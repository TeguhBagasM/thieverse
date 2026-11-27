# Laporan Fase 2 — Perbaikan Alur Halaman

Branch: `refactor/phase-2` (dari `refactor/phase-1`).

Spesifikasi Fase 2 tidak ada di repo. Lingkup ini diturunkan dari audit kode dan browser: hanya bug alur dan tampilan, tanpa mengubah isi artikel, data proyek, atau identitas visual.

## Perbaikan

| Masalah | Perbaikan |
|---|---|
| `/blog?query=kotlin` terhapus menjadi `/blog` setelah halaman dimuat; pencarian memakai `router.push` | Input diisi dari URL, navigasi memakai `replace` dan hanya saat nilainya berubah |
| `/projects` memanggil `decodeURIComponent` pada query yang sudah di-decode (rawan `URIError`), dan huruf besar di URL tidak cocok | Query langsung di-lowercase |
| Tautan demo/source di kartu proyek hanya terlihat saat hover, tetapi tetap bisa diklik saat transparan | Tautan selalu terlihat di bagian bawah kartu |
| Detail proyek dibuka lewat `router.push` pada tombol | Judul, gambar, dan "Detail" memakai `Link` |
| `<li>` kartu tidak berada di dalam list | Grid menjadi `<ul>` |
| Tabel dan inline code membuat artikel bergeser horizontal di 320/375 px | Tabel dibungkus area gulir, `break-words` pada prose, `min-w-0` pada kolom |
| Artikel memiliki dua `h1` | `#` di MDX dirender sebagai `h2` |
| Foto penulis gepeng di ponsel | Ukuran tetap, `shrink-0`, `object-cover` |
| Halaman 404 tanpa `h1` | Pesan menjadi `h1` |
| Proyek tanpa detail diberi timeline "2024", fitur, tantangan, dan detail teknis generik (hanya `kantin-mardira`) | Data bawaan dihapus; bagian hanya tampil bila datanya ada |
| Teks antarmuka campur Inggris–Indonesia | Diseragamkan ke Indonesia (artikel, topik, pencarian, Tentang) |

## Verifikasi

- Typecheck lolos; build lolos (101 halaman); lint hanya warning lama.
- 40 route (termasuk semua artikel di sitemap) pada lebar 320 dan 375: tidak ada overflow horizontal, masing-masing tepat satu `h1`.
- Deep link `?query=kotlin` bertahan; mengetik memperbarui URL tanpa menambah riwayat; mengosongkan input menghapus query.
- `/projects?query=%25` tetap ter-render; judul kartu membuka halaman detail.
- Screenshot sampel (bukan semua halaman) pada 375 dan 1440; dark mode hanya dicek di Home 375.

## Belum dikerjakan

1. **Hero Home:** dipindahkan ke Fase 3.
2. **Format tanggal** masih `en-US`; dipertahankan sengaja sejak Fase 1.
3. **Detail asli `kantin-mardira`** menunggu isian pemilik di `projectDetailsMap`.

## Sisa untuk fase cleanup

`components/chatbase-widget.tsx`, `components/ui/content-not-found.tsx`, dependency dan aset tak terpakai, ukuran `public/teguh.jpg` (3,5 MB), indeks ringan untuk sitemap.
