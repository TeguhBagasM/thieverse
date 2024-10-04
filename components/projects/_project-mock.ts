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
    stacks: ["React", "Tailwind"],
    isRepo: false,
  },
  {
    id: createId(),
    title: `ThievBook`,
    description:
      "Thievbook adalah perpustakaan buku online terbaik Anda. Platform kami menyediakan akses ke koleksi buku yang luas dari berbagai genre dan topik, mulai dari bestseller terbaru, sastra klasik, hingga materi pendidikan. Thievbook memiliki sesuatu untuk semua orang.",
    deployedURL: "https://thievbook.vercel.app/",
    cover: "/images/projects/thievbook.png",
    stacks: ["React", "API Public"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievbook",
  },
];

export default projects;
export type TProject = (typeof projects)[0];
