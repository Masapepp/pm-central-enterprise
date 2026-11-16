import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile('index.html','utf8');
const lower = html.toLowerCase();

test('retains Netlify build structure and responsive local workspace features',()=>{
  assert.match(html,/id="sidenav"/);
  assert.match(html,/localStorage/);
  assert.match(html,/exportAll/);
  assert.match(html,/@media\(max-width:900px\)/);
  assert.match(html,/function pageNavigation\(\)/);
});
test('main menu exposes PE, NPE, Analyzer & Bagging, and PM Compliance',()=>{
  for(const route of ['pe','npe','analyzerBagging','compliance']) assert.ok(html.includes(`data-page="${route}"`) || html.includes(`${route}:`) || html.includes(`'${route}'`),`missing ${route}`);
  assert.ok(lower.includes('analyzer &amp; bagging'));
  assert.ok(lower.includes('pm compliance'));
});
test('Analyzer & Bagging contains the four requested modules',()=>{
  for(const label of ['bagging','bfr','analyzer','product warehouse','pm ink jet printer','pm analyzer wtp']) assert.ok(lower.includes(label),`missing ${label}`);
});
test('uses the latest user-supplied Apps Script URLs and SharePoint link',()=>{
  assert.ok(html.includes('https://script.google.com/macros/s/AKfycbwDMo8rk82VoeBcYDdlsQbPsTPR_lmfN20sMS-8MlYY7C__D9A0U1W6WsBAwh3KuqryKA/exec'));
  assert.ok(html.includes('https://script.google.com/macros/s/AKfycbwYB2VgYWttU-LFhg9tiqDexLqFG3ZuYbPjNOrwpv5q-T20azxna0JuTd1ycVhRl15h/exec'));
  assert.ok(html.includes('https://chandraasripetrochemical-my.sharepoint.com/:x:/g/personal/afif_allam_capcx_com/IQAO0dSQQAN8Q5UHHqyQfoK7ATZu5QV-824MVvByf0tNGlU?e=48cbAR'));
});
test('PM Compliance offers embedded SharePoint and open-in-new-tab fallback',()=>{
  assert.match(html,/function compliancePage\(/);
  assert.match(html,/iframe/);
  assert.match(html,/Buka di SharePoint/);
});
test('printer and analyzer Apps Script modules have iframe and new-tab access',()=>{
  assert.match(html,/function embedded\(which\)/);
  assert.match(html,/Open in new tab/);
  assert.match(html,/AKfycbwDMo8rk82VoeBcYDdlsQbPsTPR_lmfN20sMS-8MlYY7C__D9A0U1W6WsBAwh3KuqryKA/);
  assert.match(html,/AKfycbwYB2VgYWttU-LFhg9tiqDexLqFG3ZuYbPjNOrwpv5q-T20azxna0JuTd1ycVhRl15h/);
});
test('PE and NPE are clearly marked as placeholders until their module URLs are supplied',()=>{
  assert.match(html,/function teamLanding\(team\)/);
  assert.match(html,/Belum ada modul atau link form/);
});
test('Back and Next navigation includes new main and submodule routes',()=>{
  assert.match(html,/const PAGE_FLOW=\['dashboard','pe','npe','analyzerBagging','bagging','bfr','analyzer','warehouse','compliance'/);
  assert.match(html,/← Back/);
  assert.match(html,/Next →/);
});
test('upload and script management pages remain available',()=>{
  for(const token of ['data-page="uploads"','data-page="scripts"','fileUpload','scriptUpload','indexedDB','TIDAK dijalankan otomatis']) assert.ok(html.includes(token),`missing ${token}`);
});
test('dashboard retains premium responsive card layout',()=>{
  assert.match(html,/class=\\?"home-hero/);
  assert.match(html,/Connected maintenance/);
  assert.match(html,/\.department-card:nth-child\(4\)/);
  assert.match(html,/@media\(max-width:480px\)/);
});

test('Daily Schedule MPE2 is a separate SharePoint menu with iframe and fallback',()=>{
  assert.ok(html.includes('https://chandraasripetrochemical-my.sharepoint.com/:x:/g/personal/fitri_gunawan_capcx_com/IQA1wb2DLlybRqVbMErg-sMCAcKYLMq-hvalesswCe0_C84?e=SuedV2'));
  assert.match(html,/function dailyScheduleMPE2Page\(/);
  assert.match(html,/Daily Schedule MPE2/);
});
test('dashboard visually separates the three team workspaces from support documents',()=>{
  assert.match(html,/team-workspaces/);
  assert.match(html,/support-resources/);
  assert.match(html,/PM COMPLIANCE/);
  assert.match(html,/DAILY SCHEDULE MPE2/);
});
test('SharePoint support documents each provide embedded and direct-open access',()=>{
  assert.match(html,/function compliancePage\(/);
  assert.match(html,/function dailyScheduleMPE2Page\(/);
  assert.ok((html.match(/Buka di SharePoint/g)||[]).length>=2);
});

test('Daily Schedule MPE2 has a readable Back/Next navigation label',()=>{
  assert.match(html,/names=\{[^}]*dailyScheduleMPE2:'Daily Schedule MPE2'/);
});
test('README identifies V7 and separates team workspaces from shared documents',async()=>{
  const readme = await readFile('README.md','utf8');
  assert.match(readme,/# PM CENTRAL Enterprise V7/);
  assert.match(readme,/Menu utama: PE, NPE, Analyzer & Bagging\./);
  assert.match(readme,/Dokumen pendukung terpisah: PM Compliance dan Daily Schedule MPE2\./);
});
test('package and build metadata are aligned with project version V7',async()=>{
  const pkg = JSON.parse(await readFile('package.json','utf8'));
  const build = await readFile('build.mjs','utf8');
  assert.equal(pkg.version,'7.1.0');
  assert.match(build,/PM CENTRAL V7.1 build complete/);
});

test('MPE2 creator branding is visible in the app shell and documented in README',async()=>{
  assert.match(html,/MPE2 TEAM/);
  assert.match(html,/Developed &amp; Designed by Masapep \/ BWK/);
  assert.match(html,/An Internal Digital Maintenance Initiative/);
  assert.match(html,/function aboutPage\(/);
  const readme = await readFile('README.md','utf8');
  assert.match(readme,/Developer: Masapep \/ BWK/);
  assert.match(readme,/Team: MPE2/);
});
