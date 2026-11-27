import { FaClock, FaComments, FaInfinity, FaLaptopCode, FaUsers, FaWallet } from "react-icons/fa";

const whatsappMessage = "Halo kak, saya ingin bergabung dengan Thieverse";

export const siteConfig = {
  name: "Thieverse",
  url: "https://thieverse.vercel.app",
  description: "Portofolio, catatan belajar, dan layanan mentoring Laravel oleh Teguh Bagas M.",
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

export const jasaFeatures = [
  {
    title: "Sesama Mahasiswa",
    description:
      "Belajar bersama mahasiswa yang memahami tantangan dan kesulitan dalam perkuliahan IT",
  },
  {
    title: "Harga Terjangkau",
    description: "Tarif yang disesuaikan dengan budget mahasiswa dan tidak membebani keuangan",
  },
  {
    title: "Waktu Fleksibel",
    description: "Jadwal yang dapat disesuaikan dengan jadwal kuliah dan aktivitas kampus Anda",
  },
  {
    title: "Suasana Belajar Santai",
    description: "Lingkungan belajar yang nyaman dan tidak formal, mendorong diskusi terbuka",
  },
  {
    title: "Sharing Pengalaman",
    description: "Berbagi tips dan strategi yang telah terbukti efektif selama perkuliahan",
  },
  {
    title: "Bantuan Tugas Cepat",
    description: "Siap membantu menyelesaikan tugas yang sulit atau menghadapi deadline yang ketat",
  },
  {
    title: "Komunitas Supportif",
    description: "Bergabung dengan grup belajar bersama teman-teman yang memiliki minat sama",
  },
  {
    title: "Pembelajaran Praktis",
    description: "Fokus pada praktik langsung dengan project-project yang dapat diterapkan",
  },
  {
    title: "Pembelajaran Tanpa Tekanan",
    description: "Belajar dalam suasana yang santai dan boleh bertanya sampai benar-benar paham",
  },
];

export type SiteConfig = typeof siteConfig;
