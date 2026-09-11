# Domain setup

This doc explains how the site's domains are wired up. **Target state (roadmap):
make `csalg.com` the canonical domain and deprecate `csalgado.io`.**

## Summary

| Domain        | Registrar            | DNS hosted at | Role                                              |
| ------------- | -------------------- | ------------- | ------------------------------------------------- |
| `csalg.com`   | Cloudflare Registrar | Cloudflare    | **current canonical** (serving the site over HTTPS) |
| `csalgado.io` | NameSilo             | Cloudflare    | **301 → csalg.com** redirect; still carries mailbox.org email |

> **Status (2026-09-11):** the canonical cutover's GitHub Pages step is live. GitHub Pages is
> bound to `csalg.com`; `csalg.com` web DNS is DNS-only GitHub Pages records;
> the old `csalg.com` → `csalgado.io` redirect was removed; the Let's Encrypt
> certificate is issued and Enforce HTTPS is enabled. `csalgado.io` now redirects
> to `csalg.com` through Cloudflare while retaining mailbox.org email records. See
> `logbook/260822-csalgcom-canonical-cutover.md`.

Both zones live in the same Cloudflare account. The site itself is a Gatsby 5
site in `csalg/personal_site`, deployed to **GitHub Pages** via
`.github/workflows/deploy.yml` (workflow source, not branch deploys).

## Current topology

### GitHub Pages

- `csalg/personal_site` → Pages enabled (GitHub Actions source).
- Custom domain bound: `csalg.com` (GitHub serves both apex and `www` for a
  bound domain; `https://csalg.com/`, with Enforce HTTPS enabled).
- The workflow builds `public/` and deploys it; `static/CNAME` is **not** used
  by workflow deploys (the domain is set in the Pages settings/API).

### DNS — csalgado.io (Cloudflare zone)

Web redirect (Cloudflare proxy, **proxied / orange cloud**):

```
A      @             → 192.0.2.1       (proxied)
CNAME  www           → csalg.github.io  (proxied)
```

Cloudflare Page Rule: `*csalgado.io/*` → **301** `https://csalg.com/$2`
(path and query preserved).

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

Canonical, pointing at GitHub Pages (**DNS only / grey cloud** — GitHub must see
the records to serve its certificate):

```
A      @             → 185.199.108.153
A      @             → 185.199.109.153
A      @             → 185.199.110.153
A      @             → 185.199.111.153
CNAME  www           → csalg.github.io
```

(The former proxied placeholder `A` records and the `*csalg.com/*` → 301
`csalgado.io` Page Rule were removed on 2026-08-22.)

## Why the plan is to switch canonical to csalg.com

- `csalg.com` is cheaper to renew.
- The GitHub username is `csalg` — `csalg.com` aligns with it.
- One canonical domain avoids duplicate-content issues; the other names should
  redirect (not serve identical content).

## Roadmap: make csalg.com canonical

1. ~~Wait for the `csalgado.io` cutover and provision the `csalg.com` certificate.~~
   Completed 2026-09-11: GitHub Pages serves a Let's Encrypt certificate for
   `csalg.com` and `www.csalg.com`, with Enforce HTTPS enabled.
2. ~~Bind GitHub Pages to `csalg.com` and point its DNS at GitHub Pages.~~
   Completed 2026-09-11; DNS remains DNS-only as required by GitHub Pages.
3. ~~Flip the `csalgado.io` zone to redirect.~~ Completed 2026-09-11 with
   proxied web records and a path-preserving Cloudflare 301 to `https://csalg.com`.
   **Keep the mailbox.org MX/SPF/DKIM records on csalgado.io** (email
   `charlie@csalgado.io` stays), and make `csalg.com` the new MX/SPF/DKIM holder
   if email moves there later.
4. Update the site's visible links (CV website field `www.csalgado.io`, README)
   and any references in the repo.

## Operational notes

- **Cloudflare tokens:** the current token can write DNS and Page Rules for the
  active zones; Zone Rulesets and some zone settings endpoints are not available
  to it.
- **Email is the sensitive part.** Any DNS migration must carry over
  MX/SPF/SRV/DKIM. Verify with `dig`/public-DNS lookups before switching
  nameservers.
- **Old infrastructure left orphaned after cutover:** the Netlify site serving
  the stale build, and the old Cloudflare zone/account. Safe to delete once the
  new setup is verified live.
