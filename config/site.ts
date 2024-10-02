import { FaClock, FaComments, FaInfinity, FaLaptopCode, FaUsers, FaWallet } from "react-icons/fa";

const whatsappMessage = "Halo kak, saya ingin bergabung dengan Thieverse";

export const siteConfig = {
  name: "Thieverse",
  url: "https://thieverse.vercel.app",
  description: "Nextjs 14 blog using velite, tailwind and shadcn",
  author: "Teguh Bagas M",
  job: "Web Developer",
  campus: "STMIK Mardira Indonesia",
  email: "teguhbagas2134@gmail.com",
  links: {
    instagram: "https://instagram.com/teguhbagasm",
    github: "https://github.com/TeguhBagasM",
    linkedin: "https://linkedin.com/in/teguh-bagas-mardiansyah-8390572b7",
    personalSite: "https://teguhbagasm.vercel.app",
    whatsapp: `https://wa.me/+6281321821374?text=${encodeURIComponent(whatsappMessage)}`,
  },
};

export const konsulFeaturs = [
  {
    title: "Konsultasi Tanpa Batas",
    description: "Akses dukungan 24/7 untuk menjawab setiap pertanyaan coding Anda.",
    icon: FaComments,
  },
  {
    title: "Fleksibilitas Maksimal",
    description: "Sesuaikan jadwal belajar dengan ritme Anda untuk hasil optimal.",
    icon: FaClock,
  },
  {
    title: "Harga Terjangkau",
    description: "Nikmati penawaran harga yang kompetitif dan ramah di kantong.",
    icon: FaWallet,
  },
  {
    title: "Bimbingan Tugas Coding",
    description: "Panduan langkah demi langkah untuk menyelesaikan tugas coding Anda.",
    icon: FaLaptopCode,
  },
  {
    title: "Komunitas Pembelajar Aktif",
    description: "Bergabung dengan ekosistem Thieverse untuk belajar dan berkembang bersama.",
    icon: FaUsers,
  },
  {
    title: "Pembelajaran Tanpa Batas",
    description: "Eksplorasi tak terbatas dengan akses penuh ke semua sumber daya selama 30 hari.",
    icon: FaInfinity,
  },
];

export type SiteConfig = typeof siteConfig;
