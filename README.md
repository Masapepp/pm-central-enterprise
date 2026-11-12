# PM CENTRAL Enterprise v2

## Deploy to Netlify
- Repository root contains `index.html`, `package.json`, `build.mjs`, `netlify.toml`, `test.mjs`.
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22

## Current capabilities
- Responsive enterprise-style navigation and dashboard.
- Bagging and Analyzer embed the original Apps Script URLs in their correct menus, with open-in-new-tab fallback.
- BFR and Product Warehouse equipment register UI.
- Equipment, PM schedule, and work order forms.
- Local browser persistence and CSV export.
- Responsive mobile navigation.

## Important limitations
This is a frontend Phase 1 workspace. Records are stored only in the current browser using localStorage; they are not shared between users/devices and are not a secure central database. Supabase, Google OAuth, Google Drive API uploads, role-based access control, recurring schedule automation, email notifications, PDF/XLSX generation, audit logs and server backups are not yet connected. Do not use local mode as the authoritative production maintenance record until backend integration and security review are completed.

## Verify locally
Run `npm test` and `npm run build` using Node.js 22+.
