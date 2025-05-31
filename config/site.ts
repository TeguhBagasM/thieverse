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

export const codingQuotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Software is a great combination of artistry and engineering.",
    author: "Bill Gates",
  },
  {
    quote: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
];

export type SiteConfig = typeof siteConfig;
