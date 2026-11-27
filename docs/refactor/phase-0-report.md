# Laporan Fase 0 — Refactor Thieverse

Tanggal: 22 Oktober 2026  
Branch: `refactor/phase-0`  
Baseline: `d1b50c2`  
Status: Fase 0 selesai; tidak melanjutkan ke Fase 1/2.

## Ringkasan

Fase 0 menyelesaikan baseline, hygiene dependency, pemasangan font, semantic token, pemisahan data post ke server, SEO dasar, dan shell minimum. Perubahan terbesar ada pada ukuran client JavaScript Home dan Blog: **286 kB → 121 kB** per route, setelah body artikel tidak lagi dikirim ke client.

Tidak ada cleanup dependency, file mati, atau aset di fase ini. Chatbase sudah tidak dimuat sama sekali, tetapi file komponennya masih ada sampai cleanup Fase 3 (lihat bagian Catatan).

## 1. Metrik sebelum dan sesudah

Baseline memakai Next.js 14.2.7. Build akhir memakai Next.js 14.2.35 (patch keamanan, tetap 14.x). Perbandingan ukuran karena itu mencakup perubahan versi patch, tetapi penurunan besar di Home/Blog berasal dari pemisahan data post.

| Route | First Load JS baseline | First Load JS akhir | Delta |
|---|---:|---:|---:|
| `/` | 286 kB | **121 kB** | **-165 kB** |
| `/blog` | 286 kB | **121 kB** | **-165 kB** |
| `/blog/[...slug]` | 142 kB | 144 kB | +2 kB |
| `/about` | 159 kB | 162 kB | +3 kB |
| `/layanan` | 94.3 kB | 96.4 kB | +2.1 kB |
| `/projects` | 119 kB | 121 kB | +2 kB |
| `/projects/[id]` | 108 kB | 108 kB | 0 |
| `/tags` | 94.3 kB | 96.4 kB | +2.1 kB |
| `/tags/[tag]` | 99.4 kB | 102 kB | +2.6 kB |
| `/_not-found` | 87.5 kB | 87.7 kB | +0.2 kB |
| Shared JS | 87.4 kB | 87.5 kB | +0.1 kB |

| Metrik | Baseline | Akhir |
|---|---:|---:|
| Body contoh `kerangka pemrograman PHP` di `.next/static` | 6 kemunculan di 3 chunk | **0** |
| Typecheck error | 0 | **0** |
| Halaman statis yang digenerate | 57 | **97** |
| Build produksi | lolos | **lolos** |
| Lint | lolos | **lolos, warning saja** |

Body artikel tetap ada di HTML server-side dan RSC halaman artikel, sebagaimana mestinya. Yang diperbaiki adalah kebocoran body ke client chunk. Pada build akhir, `.next/static` tidak lagi memuat frasa uji tersebut.

Sitemap menghasilkan **54 URL**: 6 route statis, 29 post, dan 19 proyek. `robots.txt` mengizinkan crawl kecuali `/api/`.

## 2. Akar masalah font serif

Gejala awal: body website tampil dengan font serif, bukan Inter.

Temuan dari build baseline:

- Build produksi memiliki `@font-face` Inter dan variable `--font-sans:"__Inter_d8ebd1","__Inter_Fallback_d8ebd1"`.
- Class `.font-sans` memakai `font-family: var(--font-sans), ui-sans-serif, ...`.
- Tidak ada deklarasi `font-family` serif eksplisit di source.
- Jika `--font-sans` tidak terdefinisi, seluruh deklarasi `font-family` yang memakai `var()` menjadi invalid at computed-value time. Properti lalu jatuh ke nilai inherited/initial browser, yaitu serif. Mekanisme ini konsisten dengan gejala.

Gejala tersebut **tidak reproducible** di build produksi yang diperiksa, dan belum ada verifikasi computed style lewat browser. Karena itu penyebab pastinya tetap **TIDAK DIKETAHUI**; yang ada adalah mekanisme paling mungkin.

Perbaikan yang dipasang:

- `app/fonts.ts`: Archivo (`--font-display`), Literata (`--font-body`), IBM Plex Mono (`--font-mono`).
- `tailwind.config.ts`: `font-sans`/`font-display` memakai `var(--font-display, ui-sans-serif)`, sehingga jika variable hilang, fallback tetap sans-serif.
- `app/layout.tsx`: memasang ketiga variable font ke `<body>`.
- Build akhir memverifikasi ketiga variable dan `@font-face` ada.

## 3. Hasil uji kontras token

Kontras dihitung dari pasangan token final. Light dan dark diuji terpisah.

| Pasangan | Light | Dark | Ambang |
|---|---:|---:|---|
| ink / paper | 13.47 | 15.04 | AAA normal |
| muted / paper | 4.89 | 8.03 | AA normal |
| accent / paper | 6.33 | 7.77 | AA normal |
| focus / paper | 5.07 | 7.74 | AA normal |
| ink / surface | 14.95 | 13.74 | AAA normal |
| white / accent | 7.50 | — | AAA normal |
| white / focus | 6.01 | — | AA normal |
| paper / accent | — | 7.77 | AAA normal |
| paper / focus | — | 7.74 | AAA normal |

Semua pasangan teks utama memenuhi minimal AA normal (4.5:1). `muted / paper` light adalah yang paling dekat batas, yaitu 4.89:1.

Palet aktif:

- Light: paper `#E9EDE7`, surface `#F7F8F3`, ink `#15251F`, muted `#5A6961`, line `#C9D2C8`, accent `#2447C7`, accent-soft `#E3E8F8`, focus `#B3372A`.
- Dark: paper/board `#121A16`, surface `#18231D`, ink `#E8EEE8`, muted `#A4B2A8`, line `#2C3A32`, accent `#8FA8FF`, accent-soft `#1E2A4D`, focus `#FF8A7A`.

## 4. Commit

| Commit | Isi |
|---|---|
| `cc19168` | `chore(refactor): catat baseline fase 0` |
| `cb9a38c` | `chore(deps): satukan versi next dan lucide, tambah typecheck` |
| `429dbcd` | `feat(fonts): pasang Archivo, Literata, dan IBM Plex Mono` |
| `265574a` | `feat(theme): tambah token semantik dan skala radius` |
| `ea9510e` | `fix(data): kirim ringkasan post dari server dan tutup kebocoran body` |
| `8d3ede0` | `feat(seo): metadata, canonical, sitemap, robots, dan locale id` |
| `ba0351e` | `refactor(shell): satukan navigasi, footer server, dan aksesibilitas dasar` |

## 5. Perubahan utama per langkah

### 0.1 Dependency dan hygiene

- `next` disatukan di dependencies dan dinaikkan ke `14.2.35` (patch keamanan, tetap 14.x).
- `next` dan `lucide-react` dihapus dari devDependencies; `eslint-config-next` diselaraskan.
- Script `typecheck` ditambahkan.
- `npm install` pertama gagal `ECONNRESET`; percobaan kedua berhasil dengan `--prefer-offline --no-audit --no-fund`.

### 0.2 Font

- `app/fonts.ts` dibuat.
- `app/layout.tsx` memasang Archivo, Literata, dan IBM Plex Mono.
- Tailwind memetakan `font-sans`, `font-display`, `font-body`, dan `font-mono`.
- Typography default/invert memakai Literata untuk body dan Archivo untuk heading.

### 0.3 Token

- `app/globals.css` memakai semantic `--color-*` dan mapping shadcn.
- `tailwind.config.ts` memakai token untuk background, teks, border, focus, accent.
- Radius diselaraskan ke 4 px dan 8 px; container 1200 px dengan gutter 24 px.
- Kontras diuji; hasil ada di bagian 3.

### 0.4 Data server-only

- `lib/posts.ts` dibuat dengan `server-only`, `PostSummary`, `getAllPostSummaries`, `getPostBySlug`, dan `getLatestPosts`.
- Home dipecah menjadi server wrapper `app/page.tsx` dan client `app/home-client.tsx`.
- Blog index mengirim `PostSummary[]` dari server ke client.
- `sortPosts` dibuat generik.
- Body artikel tidak lagi masuk ke client chunk.
- OG image artikel memakai URL absolut.

### 0.5 SEO

- `lang="id"` pada `<html>`.
- Metadata root: `metadataBase`, title template, description, authors, creator, icons, Open Graph, Twitter, theme color.
- Canonical untuk Home, Blog, About, Layanan, Projects, Tags, dan detail proyek.
- Metadata artikel: canonical, `og:locale` `id_ID`, JSON-LD dengan image absolut dan escape `<`.
- `generateStaticParams` untuk tag; 38 halaman tag menjadi SSG.
- `app/sitemap.ts` dan `app/robots.ts` dibuat.
- `NEXT_PUBLIC_APP_URL` ditambahkan ke `.env.example`.

### 0.6 Shell minimum

- `config/nav.ts` menjadi satu sumber navigasi untuk main nav, mobile nav, dan footer.
- Footer menjadi server component; jam dan interval dihapus, tahun memakai `new Date().getFullYear()`.
- Skip link “Lewati ke konten” ditambahkan; `<main>` mendapat `id="main-content"` dan `tabIndex={-1}`.
- Focus visible global memakai token `--color-focus`.
- `scroll-padding-top` diubah dari 56 px ke 80 px sesuai tinggi header.
- `aria-label` ditambahkan pada ikon share dan sosial footer.
- `h1` di footer dan heading GitHub diubah menjadi bukan `h1`.
- Chatbase dihapus dari layout sehingga tidak ada script/widget yang dimuat.
- Tinggi header dan struktur navbar tidak diubah.

## 6. Catatan, kegagalan, dan hal yang belum diketahui

1. **Chatbase:** widget sudah tidak dimuat dan tidak ada `embed.min.js` di build. File `components/chatbase-widget.tsx` masih ada sebagai dead code karena aturan Fase 0 melarang menghapus file. Jika “hapus total” berarti file juga harus dihapus, ini perlu dilakukan sebagai pengecualian kecil atau di Fase 3.
2. **Font serif:** mekanisme `var()` yang invalid sudah diidentifikasi, tetapi gejala awal tidak berhasil direproduksi di build dan belum dicek lewat computed style browser. Status pasti: **TIDAK DIKETAHUI**.
3. **`/api/og`:** build memberi warning bahwa edge runtime menonaktifkan static generation untuk route ini. Apakah endpoint berhasil saat runtime produksi belum diuji. Status: **TIDAK DIKETAHUI**.
4. **GitHub calendar:** hanya heading `h1` yang diubah; komponen/kalender tidak disentuh. Ini menjaga permintaan 0.6 tanpa masuk ke pekerjaan Fase 2.
5. **Sitemap:** output XML benar (54 URL), tetapi route server `sitemap.xml/route.js` berukuran sekitar 2.3 MB karena `lib/posts` mengimpor seluruh konten MDX. Ini bukan kebocoran ke client, tetapi bisa dioptimalkan dengan indeks post ringan di fase berikutnya.
6. **Warning build yang tersisa:** beberapa `<img>` yang disarankan `next/image`, class `duration-[400ms]` yang ambigu, dan `caniuse-lite` yang usang. Tidak diperbaiki karena di luar scope Fase 0.
7. **Route dinamis:** `/blog`, `/projects`, dan `/api/og` masih ditandai dinamis (`ƒ`) seperti baseline. Tidak diubah di Fase 0.

## 7. Status akhir

- Branch: `refactor/phase-0`
- Working tree: bersih setelah commit terakhir
- Build produksi: lolos, 97 halaman statis
- Typecheck: 0 error
- Lint: 0 error, warning saja
- Fase 0 selesai; pekerjaan Fase 1/2 belum dimulai.
