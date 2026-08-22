# Domain setup

This doc explains how the site's domains are wired up. **Target state (roadmap):
make `csalg.com` the canonical domain and deprecate `csalgado.io`.**

## Summary

| Domain        | Registrar            | DNS hosted at | Role                                              |
| ------------- | -------------------- | ------------- | ------------------------------------------------- |
| `csalgado.io` | NameSilo             | Cloudflare    | **current canonical** (serving the site)          |
| `csalg.com`   | Cloudflare Registrar | Cloudflare    | future canonical; currently **301 → csalgado.io** |

Both zones live in the same Cloudflare account. The site itself is a Gatsby 5
site in `csalg/personal_site`, deployed to **GitHub Pages** via
`.github/workflows/deploy.yml` (workflow source, not branch deploys).

## Current topology

### GitHub Pages

- `csalg/personal_site` → Pages enabled (GitHub Actions source).
- Custom domain bound: `csalgado.io` (GitHub serves both apex and `www` for a
  bound domain; `https://csalgado.io/`).
- The workflow builds `public/` and deploys it; `static/CNAME` is **not** used
  by workflow deploys (the domain is set in the Pages settings/API).

### DNS — csalgado.io (Cloudflare zone)

Web (GitHub Pages, **DNS only / grey cloud** — GitHub must see the records to
issue its cert):

```
A      @             → 185.199.108.153
A      @             → 185.199.109.153
A      @             → 185.199.110.153
A      @             → 185.199.111.153
CNAME  www           → csalg.github.io
```

Email (mailbox.org — do not touch):

```
MX     @             → mxext1.mailbox.org (10)
MX     @             → mxext2.mailbox.org (10)
MX     @             → mxext3.mailbox.org (20)
TXT    @             → v=spf1 include:mailbox.org
SRV    _autodiscover._tcp → 0 443 mailbox.org
CNAME  MBO0001._domainkey → MBO0001._domainkey.mailbox.org   (DKIM)
CNAME  MBO0002._domainkey → MBO0002._domainkey.mailbox.org   (DKIM)
CNAME  MBO0003._domainkey → MBO0003._domainkey.mailbox.org   (DKIM)
CNAME  MBO0004._domainkey → MBO0004._domainkey.mailbox.org   (DKIM)
```

Notes:

- The old zone (in a different, now-orphaned Cloudflare account) had a proxied
  wildcard `A` record (`*.csalgado.io`) that masked every subdomain; the new
  zone intentionally has **no wildcard**. DKIM was never set up until this cutover.
- `_acme-challenge` TXT records are Cloudflare-managed provisioning records;
  leave them alone.

### DNS — csalg.com (Cloudflare zone)

Redirect-only. Backed by proxied placeholder records so Cloudflare's edge can
answer and fire the redirect:

```
A      @   → 192.0.2.1   (proxied)
A      www → 192.0.2.1   (proxied)
```

Redirect rule (Page Rule): `*csalg.com/*` → **301** `https://csalgado.io/$2`
(path preserved).

## Why the plan is to switch canonical to csalg.com

- `csalg.com` is cheaper to renew.
- The GitHub username is `csalg` — `csalg.com` aligns with it.
- One canonical domain avoids duplicate-content issues; the other names should
  redirect (not serve identical content).

## Roadmap: make csalg.com canonical

1. Wait for `csalgado.io` cutover to settle (see logbook `260822-...`), verify
   HTTPS + Enforce HTTPS on the Pages site.
2. Change the GitHub Pages custom domain from `csalgado.io` to `csalg.com`
   (one API call: `PUT /repos/csalg/personal_site/pages` with `cname: "csalg.com"`).
3. In Cloudflare, re-point `csalg.com` `A`/`www` records at GitHub Pages:
   `A @` → `185.199.108.153`/`.109`/`.110`/`.111` (DNS only), `CNAME www` →
   `csalg.github.io`.
4. Flip the `csalgado.io` zone to redirect: change its records to the redirect
   setup (proxied placeholder `A` records + a redirect rule → `https://csalg.com`).
   **Keep the mailbox.org MX/SPF/DKIM records on csalgado.io** (email
   `charlie@csalgado.io` stays), and make `csalg.com` the new MX/SPF/DKIM holder
   if email moves there later.
5. Update the site's visible links (CV website field `www.csalgado.io`, README)
   and any references in the repo.

## Operational notes

- **Cloudflare tokens:** creating zones needs the account-level `zone.create`
  permission; writing zone DNS needs zone-level `DNS: Edit`. A user API token
  with `Zone:Read` + `DNS:Edit` on "All zones" is the reliable combination for
  this kind of work. The account token on this machine currently cannot do DNS
  writes or activation checks.
- **Email is the sensitive part.** Any DNS migration must carry over
  MX/SPF/SRV/DKIM. Verify with `dig`/public-DNS lookups before switching
  nameservers.
- **Old infrastructure left orphaned after cutover:** the Netlify site serving
  the stale build, and the old Cloudflare zone/account. Safe to delete once the
  new setup is verified live.
