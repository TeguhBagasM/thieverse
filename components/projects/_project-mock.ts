const projects = [
  {
    id: "expense-tracker",
    title: `Expense Tracker`,
    description:
      "Expense Tracker adalah aplikasi berbasis web yang dibangun dengan Laravel dan Filament untuk mencatat dan mengelola keuangan pribadi. Pengguna dapat mencatat transaksi pemasukan dan pengeluaran, mengelompokkan transaksi berdasarkan kategori, serta melihat detail tanggal dan jumlah transaksi. Dengan antarmuka yang sederhana dan responsif, aplikasi ini memudahkan pengguna dalam memantau kondisi finansial mereka secara real-time.",
    cover: "/images/projects/expense-tracker-filament.png",
    stacks: ["MySQL", "Laravel", "Filament"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/expense-tracker-filament",
  },
  {
    id: "spendtvise",
    title: `SpendTvise`,
    description:
      "SpendTvise adalah aplikasi berbasis website untuk mengelola keuangan pribadi. Fitur utama mencakup pencatatan pemasukan dan pengeluaran, visualisasi data keuangan melalui grafik dan bagan, serta fitur tambahan seperti pembuatan anggaran dan pelacakan tujuan keuangan. Tujuannya adalah memberikan gambaran jelas kondisi keuangan dan membantu pengambilan keputusan finansial yang lebih baik.",
    deployedURL: "https://spendtvise.vercel.app/",
    cover: "/images/projects/spendtvise.png",
    stacks: ["Mysql", "Express.js", "React", "Node.js", "Tailwind"],
    isRepo: false,
    // repoUrl: "https://github.com/TeguhBagasM/",
  },
  {
    id: "marcourse",
    title: `Marcourse`,
    description:
      "Marcourse adalah platform Learning Management System (LMS) yang dirancang menggunakan Laravel Breeze untuk autentikasi, Tailwind CSS untuk antarmuka pengguna yang responsif, dan Spatie untuk manajemen role dan permission. Sistem ini didukung oleh MySQL sebagai basis data.",
    cover: "/images/projects/marcourse.png",
    stacks: ["Laravel", "Mysql", "Tailwind", "Spatie"],
    isRepo: false,
    // repoUrl: "https://github.com/TeguhBagasM/",
  },
  {
    id: "simanis",
    title: `SIMANIS`,
    description:
      "SIMANIS (Sistem Manajemen Inventaris Sekolah) adalah aplikasi berbasis web yang dikembangkan menggunakan Laravel 11, Tailwind CSS, dan MySQL untuk mendukung pengelolaan inventaris sekolah secara efisien. Dengan integrasi Spatie untuk manajemen role dan permission, sistem ini menawarkan berbagai fitur unggulan seperti pemindaian QR code untuk proses pengembalian barang, pencatatan peminjaman, pelacakan stok barang, dan pengelolaan laporan inventaris. Antarmuka yang responsif dan modern memudahkan pengguna dari berbagai perangkat untuk mengakses dan mengelola data dengan mudah dan aman.",
    deployedURL: "https://arkas.smkn2cmi.sch.id/",
    cover: "/images/projects/simanis.png",
    stacks: ["Laravel", "Mysql", "Tailwind", "Spatie"],
    isRepo: false,
    // repoUrl: "https://github.com/TeguhBagasM/",
  },
  {
    id: "marquizzy",
    title: `Marquizzy`,
    description:
      "Marquizzy adalah aplikasi quiz yang dibangun dengan Next.js, TypeScript, dan Prisma sebagai ORM, menggunakan PostgreSQL untuk databasenya. Dengan Autentikasi menggunakan Clerk",
    cover: "/images/projects/marquizzy.png",
    stacks: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind", "Sanity"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/marquizzy",
  },
  {
    id: "csa-quizzy",
    title: `CSA Quizzy`,
    description:
      "CSA Quizzy adalah aplikasi kuis yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS untuk styling-nya. Aplikasi ini memungkinkan pengguna untuk mengikuti berbagai kuis yang berfokus pada topik teknologi dan pengembangan web, seperti HTML, CSS, PHP, JavaScript, dan Laravel. Dengan tampilan yang responsif dan interaktif, pengguna dapat menikmati pengalaman belajar yang menyenangkan. Aplikasi ini juga dilengkapi dengan fitur penghitungan skor secara real-time.",
    deployedURL: "https://csa-quizzy.vercel.app/",
    cover: "/images/projects/csa-quizzy.png",
    stacks: ["Next.js", "TypeScript", "Tailwind"],
    isRepo: false,
  },
  {
    id: "csa-stmikmi",
    title: `CSA STMIK-MI`,
    description:
      "CSA (Creative Student Association) adalah organisasi berbasis TI yang terletak di STMIK Mardira Indonesia. Organisasi ini mencakup semua aspek TI, seperti Pemrograman, Multimedia, IoT, dan Pengembangan Game.",
    deployedURL: "https://csa-stmikmi.vercel.app/",
    cover: "/images/projects/csa-stmikmi.png",
    stacks: ["React.js", "Tailwind"],
    isRepo: false,
  },
  {
    id: "thievshop",
    title: `ThievShop`,
    description:
      "Thievshop adalah landing page e-commerce modern yang dibuat menggunakan React.js dan Vite, dengan Tailwind CSS untuk styling. Halaman ini dirancang untuk memberikan pengguna pengalaman belanja yang elegan dan lancar. Thievshop menekankan kesederhanaan dan kenyamanan, dengan tata letak yang bersih dan navigasi yang intuitif.",
    deployedURL: "https://thievshop.vercel.app/",
    cover: "/images/projects/thievshop.png",
    stacks: ["React.js", "Vite", "Tailwind"],
    isRepo: false,
  },
  {
    id: "thievbook",
    title: `ThievBook`,
    description:
      "Thievbook adalah perpustakaan buku online terbaik Anda. Platform kami menyediakan akses ke koleksi buku yang luas dari berbagai genre dan topik, mulai dari bestseller terbaru, sastra klasik, hingga materi pendidikan. Thievbook memiliki sesuatu untuk semua orang.",
    deployedURL: "https://thievbook.vercel.app/",
    cover: "/images/projects/thievbook.png",
    stacks: ["React.js", "API Public"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievbook",
  },
  {
    id: "thievstore",
    title: `ThievStore`,
    description:
      "Thievstore adalah toko online yang dirancang untuk memudahkan proses jual beli produk secara online. Dengan tampilan yang user-friendly, pelanggan dapat dengan mudah mencari, memilih, dan membeli produk yang diinginkan.",
    deployedURL: "",
    cover: "/images/projects/thievstore.png",
    stacks: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Tailwind"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievstore",
  },
  {
    id: "thievchat",
    title: `ThievChat`,
    description:
      "ThievChat adalah aplikasi real time yang dibangun dengan Tailwind CSS, Laravel Breeze, React, Inertia.js, dan fitur waktu nyata melalui Laravel Echo dan Pusher. Aplikasi ini mendukung pengiriman pesan yang lancar, autentikasi pengguna, pelacakan status online, dan manajemen percakapan dinamis untuk pengalaman yang intuitif.",
    deployedURL: "",
    cover: "/images/projects/thievchat.png",
    stacks: ["Laravel Reverb", "React.js", "Tailwind", "Inertia.js"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievchat",
  },
  {
    id: "sistem-peminjaman-buku",
    title: `Sistem Peminjaman Buku Perpustakaan`,
    description:
      "Didesain dan dikembangkan sebuah sistem informasi peminjaman buku menggunakan framework Laravel untuk mempermudah pengelolaan peminjaman dan pengembalian buku, serta meningkatkan efisiensi pengelolaan data perpustakaan.",
    deployedURL: "",
    cover: "/images/projects/perpus.png",
    stacks: ["Laravel", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/kaperpus",
  },
  {
    id: "sistem-reservasi-hotel",
    title: `Sistem Reservasi Hotel`,
    description:
      "Dirancang dan dikembangkan sistem reservasi hotel berbasis web untuk memfasilitasi pemesanan kamar secara online, meningkatkan kenyamanan dan efisiensi bagi pengguna maupun manajemen hotel. Sistem ini memperbaiki pengalaman pemesanan dengan menyediakan antarmuka yang ramah pengguna dan operasi yang terintegrasi.",
    deployedURL: "",
    cover: "/images/projects/hotel.png",
    stacks: ["PHP", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/ujikom-hotel",
  },
  {
    id: "sistem-pembayaran-spp",
    title: `Sistem Pembayaran SPP`,
    description:
      "Mengembangkan sistem informasi untuk mengefektifkan proses pembayaran SPP, menjamin efisiensi dan akurasi pencatatan transaksi. Sistem ini meningkatkan pengalaman pengguna dengan memberikan solusi pembayaran yang lancar dan andal, mengurangi beban kerja administratif, dan meminimalkan kesalahan dalam dokumentasi keuangan.",
    deployedURL: "",
    cover: "/images/projects/spp.png",
    stacks: ["PHP", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/projectSPP",
  },
];

export default projects;
export type TProject = (typeof projects)[0];
