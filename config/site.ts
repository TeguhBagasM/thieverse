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
    description: "Bergabung dengan Thieverse untuk belajar dan berkembang bersama.",
    icon: FaUsers,
  },
  {
    title: "Pembelajaran Tanpa Batas",
    description: "Eksplorasi tak terbatas dengan akses penuh ke semua sumber daya selama 30 hari.",
    icon: FaInfinity,
  },
];

export const codingQuotes = [
  {
    quote: "Code adalah puisi yang ditulis untuk mesin.",
    author: "Anonymous",
  },
  {
    quote:
      "Pemrograman bukan tentang apa yang kamu ketahui; ini tentang apa yang dapat kamu cari tahu.",
    author: "Chris Pine",
  },
  {
    quote: "Jangan tulis kode yang lebih baik, tulis kode yang lebih mudah dipahami.",
    author: "Boris Cherny",
  },
  {
    quote:
      "Debugging lebih sulit daripada menulis kode. Jadi, jika Anda menulis kode secermat mungkin, Anda, menurut definisi, tidak cukup pintar untuk men-debug-nya.",
    author: "Brian Kernighan",
  },
  {
    quote: "Pengembangan perangkat lunak yang baik adalah hasil dari konsentrasi, tidak kompleksitas.",
    author: "Edsger W. Dijkstra",
  },
];

export type SiteConfig = typeof siteConfig;
