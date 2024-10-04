import { createId } from "@paralleldrive/cuid2";

const projects = [
  {
    id: createId(),
    title: `CSA STMIK-MI`,
    description:
      "CSA (Creative Student Association) adalah organisasi berbasis TI yang terletak di STMIK Mardira Indonesia. Organisasi ini mencakup semua aspek TI, seperti Pemrograman, Multimedia, IoT, dan Pengembangan Game.",
    deployedURL: "https://csa-stmikmi.vercel.app/",
    cover: "/images/projects/csa-stmikmi.png",
    stacks: ["React.js", "Tailwind"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/csa-stmikmi",
  },
  {
    id: createId(),
    title: `ThievShop`,
    description:
      "Thievshop adalah landing page e-commerce modern yang dibuat menggunakan React.js dan Vite, dengan Tailwind CSS untuk styling. Halaman ini dirancang untuk memberikan pengguna pengalaman belanja yang elegan dan lancar. Thievshop menekankan kesederhanaan dan kenyamanan, dengan tata letak yang bersih dan navigasi yang intuitif.",
    deployedURL: "https://thievshop.vercel.app/",
    cover: "/images/projects/thievshop.png",
    stacks: ["React.js", "Vite", "Tailwind"],
    isRepo: false,
  },
  {
    id: createId(),
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
    id: createId(),
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
    id: createId(),
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
    id: createId(),
    title: `Sistem Reservasi Hotel`,
    description:
      "Dirancang dan dikembangkan sistem reservasi hotel berbasis web untuk memfasilitasi pemesanan kamar secara online, meningkatkan kenyamanan dan efisiensi bagi pengguna maupun manajemen hotel. Sistem ini memperbaiki pengalaman pemesanan dengan menyediakan antarmuka yang ramah pengguna dan operasi yang terintegrasi.",
    deployedURL: "",
    cover: "/images/projects/hotel.png",
    stacks: ["PHP", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/ujikom-hotel",
  },
];

export default projects;
export type TProject = (typeof projects)[0];
