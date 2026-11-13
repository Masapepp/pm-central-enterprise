# PM CENTRAL Enterprise V4

## Perubahan V4
- Dashboard menampilkan empat kartu departemen sekaligus: Bagging, Analyzer, BFR, Product Warehouse.
- Carousel dan tombol Previous/Next pada kartu departemen dihapus.
- Tombol Back dan Next tersedia pada halaman selain Dashboard untuk berpindah urutan halaman: Home → Bagging → Analyzer → BFR → Product Warehouse → PM Scheduler → Equipment Master → Work Orders → Reports Center → Upload File → Script Management → Settings.
- URL Google Apps Script Bagging dan Analyzer dipertahankan.
- Upload File dan Script Management tetap tersedia. File masih disimpan lokal di browser/perangkat, belum tersinkron ke Google Drive/server. Script hanya disimpan/diunduh dan tidak dijalankan otomatis.

## Deploy
1. Ekstrak ZIP.
2. Upload keenam file ke root repository GitHub, ganti file lama.
3. Commit changes.
4. Tunggu Netlify deploy berstatus Published.

Build: `npm run build`
Test: `npm test`
