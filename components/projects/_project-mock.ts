import { createId } from "@paralleldrive/cuid2";

// Project cover images

const projects = [
  {
    id: createId(),
    title: `CSA STMIK-MI`,
    description:
      "CSA (Creative Student Association) adalah organisasi berbasis TI yang terletak di STMIK Mardira Indonesia. Organisasi ini mencakup semua aspek TI, seperti Pemrograman, Multimedia, IoT, dan Pengembangan Game.",
    deployedURL: "https://csa-stmikmi.vercel.app/",
    cover: "/images/projects/csa-stmikmi.png",
    stacks: ["React.js", "Tailwind"],
    isRepo: false,
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
    title: `ThievChat`,
    description:
      "Thievbook adalah perpustakaan buku online terbaik Anda. Platform kami menyediakan akses ke koleksi buku yang luas dari berbagai genre dan topik, mulai dari bestseller terbaru, sastra klasik, hingga materi pendidikan. Thievbook memiliki sesuatu untuk semua orang.",
    deployedURL: "",
    cover: "/images/projects/thievchat.png",
    stacks: ["Laravel Reverb", "React.js", "Tailwind"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievchat",
  },
];

export default projects;
export type TProject = (typeof projects)[0];
