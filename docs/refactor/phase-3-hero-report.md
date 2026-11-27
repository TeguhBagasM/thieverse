# Laporan Fase 3 — Hero

Branch: `refactor/phase-3-hero` (dari `refactor/phase-2`). **Belum di-commit**, menunggu review.

Spesifikasi Fase 3 tidak ada di repo; instruksi pemilik untuk hero dipakai sebagai spesifikasi.

## 1. Temuan

- Next.js App Router, React 18.3.1, TypeScript strict, Tailwind 3.4, dark mode `next-themes` (class, default light).
- Seluruh Home adalah client component; hero memakai `hero.gif` (2.152.787 byte) dan kutipan acak yang muncul setelah hydration.
- `node_modules` tertinggal dari lockfile (Next 14.2.7, lockfile 14.2.35). `npm install` dijalankan sebelum baseline, jadi sebelum dan sesudah memakai versi yang sama. Build Fase 2 sebelumnya berjalan di 14.2.7.
- Header: link sosial tidak punya nama di ponsel dan tetap bisa difokus walau isinya tersembunyi.

## 2. Keputusan

- **Konsep monitor/terminal low-poly**, diturunkan dari logo (lingkaran, monitor, `>_`). Lebih khas dibanding torus knot atau partikel, dan cukup memakai geometri sederhana tanpa material transmisi atau post-processing.
- **Three.js murni**, tanpa R3F/drei: hanya satu scene kecil. Selisih ukurannya terhadap R3F tidak diukur.
- **Framer Motion** (sudah terpasang) untuk tagline berputar dan tombol magnetic lewat `LazyMotion`. Entrance memakai CSS agar teks tampil tanpa menunggu hydration.
- **Grain dibuang.** Tekstur grain membuat seluruh section menjadi elemen LCP: median LCP 3.253 ms dengan grain, 756 ms tanpa grain, dengan `h1` sebagai elemen LCP. Gradient dan glow dipertahankan.
- **Kutipan acak dibuang**, termasuk `codingQuotes`.

## 3. File

Baru:

| File | Isi |
|---|---|
| `config/hero.ts` | Teks, CTA, link sosial, isi terminal |
| `components/hero/hero.tsx` | Susunan section |
| `components/hero/hero-content.tsx` | Nama, peran, tagline, CTA, sosial |
| `components/hero/hero-scene.tsx` | Penentu 3D atau poster, `next/dynamic` `ssr: false` |
| `components/hero/hero-canvas.tsx` | Renderer, interaksi, jeda, dispose |
| `components/hero/monitor-model.ts` | Geometri dan warna per tema |
| `components/hero/terminal-screen.ts` | Tekstur terminal |
| `components/hero/hero-poster.tsx` | Fallback SVG |
| `components/hero/scroll-indicator.tsx` | Tautan ke Blog Terbaru |
| `components/hero/rotating-text.tsx`, `magnetic.tsx`, `motion-features.ts` | Animasi |

Diubah: `app/page.tsx` (markup "Blog Terbaru" dipindahkan tanpa perubahan, hanya ditambah `id`), `app/globals.css`, `components/site-header.tsx`, `components/main-nav.tsx` (alt logo), `config/site.ts`, `package.json`, `package-lock.json`.

Dihapus: `app/home-client.tsx`, `public/images/hero.gif`.

## 4. Dependensi

```bash
npm install three@0.187.0
npm install -D @types/three@0.187.0
```

| Paket | Fungsi | Dampak |
|---|---|---|
| `three` | Render monitor 3D | Dimuat terpisah, hanya bila 3D aktif |
| `@types/three` | Tipe TypeScript | Hanya development, tidak masuk bundle |

Total JavaScript tambahan saat 3D aktif: **151.882 byte terkirim** (dua chunk Three.js 63.702 + 84.543, kode canvas 3.637).

Lighthouse dan `puppeteer-core` dipasang di folder sementara di luar repo.

## 5. Ukuran

| Metrik | Sebelum | Sesudah |
|---|---:|---:|
| Aset visual hero | GIF 2.152.787 byte | Poster SVG inline 985 byte (489 gzip) + JS 3D 151.882 byte |
| First Load JS `/` | 119 kB | **135 kB (+16 kB)** |
| Shared JS | 87,5 kB | 87,7 kB |
| Total transfer Home (Lighthouse) | 2.506.192 byte | 579.638 byte (-77%) |

Kenaikan First Load berasal dari kode hero, termasuk Framer Motion yang sekarang ikut di bundle Home. Rinciannya per modul tidak diprofil.

## 6. Lighthouse mobile

Lighthouse 13.6.0, Chrome for Testing 148, `next start` lokal, median 3 run. Bukan angka produksi.

| Metrik | Sebelum | Sesudah |
|---|---:|---:|
| Performance | 95 | 100 |
| Accessibility | 96 | 100 |
| Best Practices | 96 | 96 |
| SEO | 100 | 100 |
| FCP | 756 ms | 755 ms |
| LCP | 2.977 ms | 755 ms |
| TBT | 0 ms | **31 ms (lebih buruk)** |
| Speed Index | 755 ms | **2.179 ms (lebih buruk)** |
| CLS | 0,028 | 0 |

- Speed Index kemungkinan naik karena animasi masuk dan pergantian poster ke canvas membuat tampilan terus berubah. Penyebab ini belum diisolasi.
- Pada build antara (masih dengan grain), satu dari 3 run mendapat Performance 64 dengan TBT 1.315 ms. Enam run sesudahnya tidak mengulanginya. Penyebabnya tidak dipastikan; inisialisasi 3D di CPU yang diperlambat adalah dugaan.

## 7. Verifikasi

Lolos:

- Typecheck; lint (hanya 5 warning lama); build 101 halaman.
- Lebar 320, 360, 390, 768, 1024, 1440, 2560, light dan dark: tidak ada overflow horizontal, satu `h1`, teks dan CTA di satu garis kiri (glyph ikon sosial bergeser 2 px), visual tidak menimpa teks.
- Kontras terhadap latar ter-render (360, 768, 1440; persentil 1 piksel): teks terendah 5,47:1 (light) dan 6,66:1 (dark); ikon sosial 4,64:1 dan 7,69:1. Teks tombol memakai pasangan token yang sudah diuji di Fase 1 dan tidak diukur ulang.
- Reduced motion dan `deviceMemory` 2 GB: poster statis, chunk Three.js tidak diunduh.
- Tanpa JavaScript: `h1` dan poster tetap ada.
- Render berhenti saat hero di luar layar, lalu lanjut saat terlihat lagi.
- Ganti tema memakai canvas yang sama.
- 5 kali navigasi bolak-balik: satu konteks WebGL aktif; di `/blog` nol.
- Urutan Tab sesuai urutan visual dan setiap elemen yang diuji menampilkan fokus.
- Indikator scroll membawa ke "Blog Terbaru" (tepat di bawah header); tombol magnetic merespons mouse; tagline berhenti di item pertama setelah satu putaran.

Tidak diverifikasi:

- Perangkat fisik, Safari/iOS, dan Firefox. Semua uji memakai Chrome headless di Mac.
- FPS, baterai, dan suhu di ponsel kelas bawah.
- Kebocoran memori lewat heap profiler; yang diperiksa hanya jumlah konteks WebGL dan canvas.
- Jeda saat tab disembunyikan, fallback `webglcontextlost`, mode hemat data, dan perangkat tanpa WebGL2.
- Screen reader.
- Rasa gerak parallax kursor dan efek scroll (screenshot diam).
- Screenshot diperiksa untuk sampel, bukan semua kombinasi.

## 8. Trade-off

- Pada tinggi layar di bawah sekitar 844 px di ponsel, hero lebih tinggi dari layar sehingga indikator scroll dan sebagian monitor berada di bawah lipatan (360×640, 360×780, 320×568).
- Di ponsel, teks layar terminal terlalu kecil untuk dibaca. Isinya dekoratif; informasi penting ada di teks hero.
- Poster lebih sederhana daripada model 3D (tanpa keyboard, dua perintah).
- Gerakan melayang monitor dan kursor berkedip berjalan terus tanpa tombol jeda; hanya berhenti lewat reduced motion atau saat di luar layar.
- Warna monitor dan poster ditulis sebagai hex di komponen, di luar token tema.

## 9. Perlu diganti manual

- `config/hero.ts`: `role`, `focus`, `summary`, dan isi `terminal` masih placeholder dari teks halaman Tentang.
- `siteConfig.job` ("Web Developer", dipakai di halaman artikel) belum diselaraskan dengan peran di hero.
- `kantin-mardira` belum punya detail di `projectDetailsMap`.

## 10. Saran lanjutan

1. Setelah deploy, ukur ulang dengan PageSpeed Insights dan uji di ponsel fisik.
2. Bila baterai atau TBT di ponsel bermasalah, muat 3D di ponsel hanya setelah interaksi pertama, atau pakai poster saja.
3. Selaraskan peran di hero, halaman Tentang, dan `siteConfig.job` dari satu sumber.
