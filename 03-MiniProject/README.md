# Mini Project - Server Informasi Kampus

Proyek ini adalah implementasi dari Mini Project Node.js Dasar. Berisi server HTTP sederhana yang merender halaman HTML.

## Spesifikasi
- **Port:** `3000`
- **Tipe Konten:** `text/html`
- **Routing:** - `/` -> Beranda
  - `/profil` -> Profil Kampus
  - `/fakultas` -> Daftar Fakultas
  - `/pengumuman` -> Papan Pengumuman
  - `/kontak` -> Informasi Kontak Admin
- Menangani halaman yang tidak terdaftar dengan *Status Code* `404 Not Found`.

## Cara Menjalankan
1. Buka terminal dan arahkan ke direktori proyek utama.
2. Pastikan file `package.json` sudah dibuat menggunakan perintah `npm init -y`.
3. Eksekusi server dengan menjalankan:
   ```bash
   node 03-Mini-Project/app.js