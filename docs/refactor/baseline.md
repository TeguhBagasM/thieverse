# Baseline Refactor Fase 0

Tanggal: 2026-10-22
Branch: `refactor/phase-0`
Commit dasar: `d1b50c2`
Package manager: npm (`package-lock.json`)
Next.js terpasang: 14.2.7

## Build produksi

Perintah: `npm run build`

Hasil: berhasil, 57 halaman statis/dinamis.

| Route | Size | First Load JS |
| --- | ---: | ---: |
| `/` | 5.03 kB | 286 kB |
| `/_not-found` | 138 B | 87.5 kB |
| `/about` | 51.6 kB | 159 kB |
| `/api/og` | 0 B | 0 B |
| `/blog` | 1.91 kB | 286 kB |
| `/blog/[...slug]` | 23.9 kB | 142 kB |
| `/layanan` | 176 B | 94.3 kB |
| `/projects` | 2.87 kB | 119 kB |
| `/projects/[id]` | 4.19 kB | 108 kB |
| `/tags` | 176 B | 94.3 kB |
| `/tags/[tag]` | 187 B | 99.4 kB |
| Shared by all | — | 87.4 kB |

## Bukti kebocoran body artikel ke client

Frasa uji dari `content/blog/install-laravel.mdx`:

> kerangka pemrograman PHP

Hasil pencarian di `.next/static/chunks`:

```text
.next/static/chunks/756-8be36845b52c0252.js
.next/static/chunks/app/blog/page.js
.next/static/chunks/app/page.js
```

Jumlah kemunculan: 6.

Kesimpulan: body artikel ikut masuk client bundle pada Home dan Blog index.

## Ukuran aset

```text
20M public
15M public/images
5.5M public/images/blogs
2.1M public/images/hero.gif (800x600)
3.5M public/teguh.jpg (3997x4605)
```

## Dependency

- Dideklarasikan di `package.json`: 45 dependencies + 19 devDependencies = 58 nama unik.
- Terpasang (termasuk transitif): 702 paket menurut `npm ls --all --parseable`.

## Typecheck

Perintah: `npx tsc --noEmit`

Hasil baseline: **0 error**, exit code 0.

## Catatan build

- Build mengeluarkan warning `<img>` pada `app/page.tsx`, `components/main-nav.tsx`, `components/mobile-nav.tsx`, `components/site-footer.tsx`, `components/ui/content-not-found.tsx`.
- Warning `duration-[400ms]` ambigu.
- `caniuse-lite` sudah usang.
- Build memakai Next.js 14.2.7, bukan 14.2.13 yang dideklarasikan di dependencies.
