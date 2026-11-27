# Laporan Fase 1 — Sistem Global

Status: **selesai untuk pekerjaan kode**; verifikasi visual tidak dapat dilakukan karena tidak ada browser headless/Playwright.

## 1. Ringkasan

Fase 1 membangun sistem global yang tipis di atas fondasi Fase 0: primitif layout, tipografi, tombol, metadata, tag, cover image, dan empty state; lalu menerapkannya ke seluruh halaman dan komponen. Perubahan berhenti di Fase 1 dan tidak menyentuh alur Fase 2/3.

- 56 file berubah: +611 / -429 baris.
- Tidak ada file, aset, atau dependency yang dihapus.
- Tidak ada library baru.
- Build tetap 97 halaman statis.
- First Load JS shared tetap **87.5 kB**.
- Semua route yang diuji mengembalikan HTTP 200 dari `next start`.
- Screenshot dan cek overflow **TIDAK DIKETAHUI**; lihat bagian 9.

## 2. Primitif Global

Dibuat di `components/ui-kit/`:

| File | Tanggung jawab |
|---|---|
| `container.tsx` | Wrapper `container` dengan opsi lebar `default` dan `reading` (68ch) |
| `section.tsx` | Section vertikal konsisten, label mono opsional |
| `prose.tsx` | Body Literata, lebar 68ch, link underline, gambar/pre/table bertoken |
| `button-link.tsx` | Tautan berbentuk tombol: primary, secondary, link |
| `meta.tsx` | Tanggal dan estimasi baca |
| `tag.tsx` | Tag tautan ke `/tags/[slug]`, state aktif, count opsional |
| `cover-image.tsx` | Cover rasio 4:3 dengan fallback `/images/not-found.png` |
| `empty-state.tsx` | Empty state dengan pesan dan aksi opsional |

`components/tag.tsx` dipertahankan sebagai wrapper re-export agar import lama tidak berubah.

## 3. Pemetaan Halaman

| Area | Primitif / perubahan |
|---|---|
| Home | `Section`, `Container`, `ButtonLink`; hero dan grid artikel; gradient/scale/shadow dihapus |
| Blog list | `Container`, `PostItem`, `EmptyState`; pencarian dan pagination dipertahankan |
| Artikel | `Prose`, `Meta`, `ButtonLink`; hero memakai `bg-overlay/60`; author avatar bertoken |
| Projects list | `Container`, `CoverImage`, `EmptyState`; card dan overlay bertoken |
| Project detail | `Container`, `ButtonLink`; `max-w-6xl` diganti lebar `Container`; image `fill` + `sizes` |
| Tags index | `Container`, `PostItem`, `Tag` |
| Tag detail | `Container`, `PostItem`, `Tag`, `EmptyState` |
| About | `Container`, `ButtonLink`; badge gradient diganti label bertoken; GitHub, Skills, Experience bertoken |
| Layanan | `ButtonLink`; seluruh card/CTA memakai token; copy tidak diubah |
| Shell | Header/nav/footer memakai token, focus ring, dan target aksesibilitas |
| MDX | Code, callout, command, disclosure, tabs, TOC, typography bertoken |

## 4. Token dan Pembersihan Kelas

Token baru:

- `--color-code`
- `--color-code-foreground`
- `--color-overlay`
- `--color-overlay-foreground`

Token tersebut dipetakan ke Tailwind sebagai `code`, `code-foreground`, `overlay`, dan `overlay-foreground`. Prose memakai variabel `--tw-prose-*` yang mengambil token yang sama.

Kelas no-op yang dihapus/diganti:

| Sebelum | Sesudah |
|---|---|
| `text-md` | `text-base` |
| `text-light` / `text-dark` | `text-foreground` |
| `font-sm` | `text-sm` |
| `xs:*` | `sm:*` atau dihapus |
| `sxl:*` | dihapus |
| `mt-18` | `mt-16` |
| `sticky-ml-[2px]` | `ml-[2px]` |
| `el-focus-styles` | focus ring global |
| `font-ubuntu` | `font-display` atau dihapus |
| `font-mediumgue` | `font-medium` |
| `duration-[400ms]` | `duration-200` |

Hasil pencarian akhir untuk seluruh pola di atas: **0 kemunculan**.

Grep baseline → akhir:

| Pola | Baseline | Akhir |
|---|---:|---:|
| Utility warna literal | 234 | 2 |
| Arbitrary hex Tailwind | 4 | 0 |
| Hex di CSS/TSX | 22 | 4 |
| Gradient | 8 | 0 |
| Shadow dekoratif | 22 | 0 |
| Hover scale | 26* | 0 |
| Scale state fungsional | — | 4 |
| RGB/HSL literal | 5 | 0 |

\* Angka baseline mencakup `scale-*` fungsional pada theme toggler. Empat `scale-*` yang tersisa hanya animasi state ikon tema, bukan hover.

## 5. Alignment dan Lebar

- `project-detail` tidak lagi memakai `container max-w-6xl`; sekarang memakai `Container`.
- Home tidak lagi memakai `max-w-6xl` terpisah; grid memakai wrapper yang sama.
- About, Blog, dan Projects memakai `Container` dengan padding horizontal bawaan.
- Footer tidak lagi memakai `mx-auto` ganda.
- Artikel memakai `Prose` dengan lebar baca 68ch.
- `prevnextpost.tsx` masih memakai `max-w-2xl`, tetapi komponen ini tidak dirender dan lebarnya disengaja untuk navigasi artikel.
- Badge, avatar, bullet, dan dot mempertahankan `rounded-full` karena bentuk fungsional, bukan pill button dekoratif.

## 6. Dark Mode dan Kontras

Perbaikan:

- `components/giscus.tsx` sekarang mengikuti `resolvedTheme` (`light`/`dark`), bukan hardcoded `dark`.
- `color-scheme: light` / `dark` ditambahkan pada root.
- Line number code memakai `code-foreground/60`, bukan `muted` di atas background code.
- Highlight code memakai `accent/20` agar tetap terbaca di blok code gelap.
- Ikon copy/check di code dan command memakai `code-foreground`.
- Overlay hero artikel dinaikkan ke `bg-overlay/60`; tombol overlay project memakai `bg-overlay/30` di atas overlay 60% dan hover `bg-overlay/50`.
- GitHub calendar memakai CSS variable yang sama untuk light dan dark.

Pasangan kontras utama yang dipakai (WCAG rasio):

| Pasangan | Light | Dark |
|---|---:|---:|
| ink / paper | 13.47 | 15.04 |
| ink / surface | 14.95 | 13.74 |
| muted / paper | 4.89 | 8.03 |
| muted / surface | 5.42 | 7.33 |
| muted / accent-soft | 4.73 | 6.37 |
| ink / accent-soft | 13.04 | 11.94 |
| accent / paper | 6.33 | 7.77 |
| accent / surface | 7.02 | 7.10 |
| accent / accent-soft | 6.13 | 6.17 |
| primary-foreground / primary | 7.50 | 7.77 |
| focus / paper | 5.07 | 7.74 |
| overlay-foreground / overlay | 21.00 | 21.00 |
| code-foreground / code | 14.25 | 14.25 |

Semua pasangan teks utama di atas memenuhi 4.5:1. `muted / line` bernilai 3.73 di light, tetapi `line` dipakai sebagai border, bukan background teks.

## 7. Motion dan Aksesibilitas

- Aturan global `prefers-reduced-motion: reduce` menonaktifkan animasi/transisi dan mematikan view transition.
- Marquee `animate-roll` dihentikan dan dikembalikan ke posisi awal pada reduced motion.
- Durasi transisi state diselaraskan ke 150–200ms:
  - hover/warna: 150ms
  - underline navigasi: 200ms
  - sheet: 200ms
  - view transition tema: 200ms
- `Loader2` dan marquee tetap memakai animasi panjang saat motion diizinkan; keduanya dihentikan oleh media query.
- Focus ring global tetap 2px dengan offset 3px.
- Skip link dipertahankan.
- `Giscus` hanya dirender jika env repo/category tersedia.

## 8. Build dan Performa

Baseline adalah hasil akhir Fase 0. Hasil akhir adalah build Fase 1.

| Route | Fase 0 | Fase 1 | Delta |
|---|---:|---:|---:|
| `/` | 121 kB | 119 kB | -2 kB |
| `/blog` | 121 kB | 121 kB | 0 |
| `/blog/[...slug]` | 144 kB | 145 kB | +1 kB |
| `/about` | 162 kB | 162 kB | 0 |
| `/layanan` | 96.4 kB | 96.4 kB | 0 |
| `/projects` | 121 kB | 121 kB | 0 |
| `/projects/[id]` | 108 kB | 117 kB | +9 kB |
| `/tags` | 96.4 kB | 96.4 kB | 0 |
| `/tags/[tag]` | 102 kB | 102 kB | 0 |
| Shared JS | 87.5 kB | 87.5 kB | 0 |

Catatan:

- Kenaikan `/projects/[id]` perlu dipantau; shared chunk tidak berubah dan angkanya masih di bawah `/projects`. Belum ada profiling bundle per-modul.
- Kenaikan artikel +1 kB berkorelasi dengan hook tema Giscus yang sekarang mengikuti dark mode.
- Build: **97 halaman statis**, sukses.
- Typecheck: sukses.
- Lint: sukses dengan 6 warning lama (`<img>` dan cleanup ref), tanpa error.
- Warning Edge runtime pada `/api/og` tetap ada dan tidak diubah pada Fase 1.

## 9. Verifikasi Visual

**TIDAK DIKETAHUI.**

Alasannya:

- `npx --no-install playwright --version` gagal: package tidak terpasang.
- `require("playwright")` dan `require("puppeteer")` gagal: module tidak ditemukan.
- Tidak ada Chrome, Chromium, atau Edge di `/Applications`; hanya Safari yang tersedia.
- Sesuai instruksi, tidak ada instalasi browser atau package baru.

| Pemeriksaan | Hasil |
|---|---|
| Screenshot 375 light | TIDAK DIKETAHUI |
| Screenshot 375 dark | TIDAK DIKETAHUI |
| Screenshot 1440 light | TIDAK DIKETAHUI |
| Screenshot 1440 dark | TIDAK DIKETAHUI |
| Overflow 320 | TIDAK DIKETAHUI |
| Overflow 375 | TIDAK DIKETAHUI |
| Dark mode visual | TIDAK DIKETAHUI; hanya audit kode dan kontras matematis |
| Giscus light/dark | TIDAK DIKETAHUI; butuh env dan browser |

Smoke test runtime via `next start`:

```text
200 /
200 /blog
200 /about
200 /layanan
200 /projects
200 /tags
200 /blog/1-tutorial-laravel-ui
200 /projects/kantin-mardira
200 /tags/laravel
200 /robots.txt
200 /sitemap.xml
```

## 10. Exception yang Disengaja

| Lokasi | Exception | Alasan |
|---|---|---|
| `app/api/og/route.tsx` | `text-black bg-white` | Gambar OG selalu terang; di luar sistem tema halaman |
| `app/layout.tsx` | `#E9EDE7`, `#121A16` | `themeColor` metadata browser, bukan kelas UI |
| `components/icons.tsx` | `fill="#fff"` | Mask SVG teknis, bukan warna UI |
| `components/theme/theme-toggler.tsx` | `scale-*` | Animasi state ikon tema, bukan hover scale |
| `components/ui/badge.tsx` | `rounded-full` | Badge fungsional |
| `components/ui/avatar.tsx` | `rounded-full` | Avatar bulat |
| `app/layanan/page.tsx` | `rounded-full` | Bullet dan badge layanan |
| `components/mdx/*` | background code gelap | Tema syntax `one-dark-pro` konsisten di light/dark |

`components/chatbase-widget.tsx` tetap ada sesuai aturan tidak menghapus file, tetapi tidak dimuat oleh layout. Konfigurasi warnanya sudah memakai `hsl(var(--...))`.

## 11. Commit

| Commit | Isi |
|---|---|
| `925b9ae` | Primitif `components/ui-kit/*` |
| `0c29458` | Token, radius, primitif ke halaman dan komponen |
| `dc1f2ed` | Dark mode, kontras, Giscus, code block |
| `8b48606` | Reduced motion dan durasi transisi |
| `0ef3ccb` | Format tanggal dipertahankan dan durasi spotlight |

Commit dokumen laporan ini dibuat sebagai langkah terakhir Fase 1.

## 12. Checklist Fase 1

- [x] Primitif global dibuat dan dipakai
- [x] Token semantik dipakai di halaman dan komponen
- [x] Gradient dekoratif dihapus
- [x] Shadow dekoratif dihapus
- [x] Hover scale dihapus
- [x] Pill button dekoratif dihapus; badge/tag fungsional dipertahankan
- [x] Kelas no-op yang teridentifikasi dihapus
- [x] Wrapper halaman diselaraskan
- [x] Code block dan line number bertoken
- [x] Giscus mengikuti tema
- [x] Kontras pasangan utama dihitung
- [x] `prefers-reduced-motion` dihormati
- [x] Typecheck sukses
- [x] Lint sukses tanpa error
- [x] Build 97 halaman sukses
- [x] Smoke test route 200
- [ ] Screenshot dan overflow — TIDAK DIKETAHUI
- [ ] Verifikasi visual dark mode — TIDAK DIKETAHUI

Fase 1 berhenti di sini. Tidak ada pekerjaan Fase 2 yang dimulai.
