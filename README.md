# PM CENTRAL Enterprise — GitHub Upload Package

This package is intentionally flat so it is easier to upload from an iPhone.

## Upload these six files to the ROOT of your GitHub repository:
- index.html
- package.json
- netlify.toml
- build.mjs
- test.mjs
- README.md

Do not upload the ZIP itself. Extract it first, then upload the six files.

## Netlify build settings
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`
- Framework: Other

## Verify
Run `npm test` and `npm run build` with Node.js 22 or later.

This is a build-ready static UI foundation. The Bagging and Analyzer Apps Script URLs are preserved in their correct menus. BFR, Product Warehouse, Scheduler, Work Orders, Equipment Master and Reports are UI foundations; database, Google login, Drive storage and live maintenance records still require backend integration.
