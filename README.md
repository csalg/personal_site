### Development notes

* Requires Node >= 18 (Gatsby 5). Any recent LTS works; CI builds on Node 20.
* To install `npm install`.
* Then to develop `npm start`. To build for production `npm run build`.

### Deployment

* Pushes to `master` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
* The custom domain is configured in GitHub Pages settings/API; `static/CNAME` mirrors `csalg.com` for the generated site. DNS must point at the GitHub Pages host.
