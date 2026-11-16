# PM CENTRAL Enterprise V7.1 – MPE2 Edition

## Struktur menu
- Menu utama: PE, NPE, Analyzer & Bagging.
- Analyzer & Bagging: Bagging (PM Ink Jet Printer), BFR, Analyzer (PM Analyzer WTP), Product Warehouse.
- Dokumen pendukung terpisah: PM Compliance dan Daily Schedule MPE2. Keduanya memiliki halaman tersendiri, iframe SharePoint, dan tombol untuk membuka file langsung.
- Dashboard memisahkan tiga workspace tim dari dua dokumen bersama menggunakan jarak, garis pemisah, dan kartu dengan aksen warna berbeda; tema gelap enterprise sebelumnya dipertahankan.
- PE dan NPE adalah halaman awal/placeholder; link form dan sumber data belum diberikan.

## Integrasi link
- PM Ink Jet Printer: Google Apps Script URL terbaru yang diberikan pengguna.
- PM Analyzer WTP: Google Apps Script URL terbaru yang diberikan pengguna.
- PM Compliance: SharePoint sharing link terbaru yang diberikan pengguna.
- Daily Schedule MPE2: SharePoint sharing link yang diberikan pengguna.

## Catatan akses SharePoint
Tampilan iframe bergantung pada kebijakan Microsoft 365/SharePoint dan hak akses file. Jika iframe diblokir atau meminta login, gunakan tombol Buka di SharePoint. Link sharing bukan pengganti autentikasi atau Microsoft Graph API. Kredensial tidak disimpan di frontend.

## Batasan saat ini
- Link Google Apps Script dibuka di dalam iframe dengan tombol fallback tab baru.
- Data equipment, schedule, work order dan upload lokal tetap tersimpan di browser/perangkat sesuai implementasi V5.
- Belum ada integrasi Microsoft Graph API, upload otomatis ke OneDrive, sinkronisasi lintas perangkat, database terpusat, atau role-based access control.
- PE dan NPE belum memiliki form karena URL modulnya belum diberikan.

## Deploy
1. Ekstrak ZIP.
2. Upload enam file ke root repository GitHub dan ganti file lama.
3. Commit changes.
4. Tunggu Netlify deploy berstatus Published.

Build: `npm run build`
Test: `npm test`


## Identitas Aplikasi

- Project: PM CENTRAL Enterprise
- Developer: Masapep / BWK
- Team: MPE2
- Release: V7.1 Branding Edition
- Platform: Netlify + GitHub

Footer aplikasi menampilkan “Developed & Designed by Masapep / BWK” dan “An Internal Digital Maintenance Initiative – MPE2 Team”.
