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
    description: "Belajar bareng teman sesama mahasiswa yang paham struggle dan tantangan kuliah IT",
  },
  {
    title: "Harga Mahasiswa Banget",
    description: "Tarif yang disesuaikan dengan budget mahasiswa, ga bikin kantong bolong",
  },
  {
    title: "Waktu Fleksibel",
    description: "Jadwal yang bisa disesuaikan dengan jadwal kuliah dan aktivitas kampus kamu",
  },
  {
    title: "Belajar Sambil Ngobrol",
    description: "Suasana belajar yang santai dan friendly, ga kaku kayak di kelas formal",
  },
  {
    title: "Sharing Pengalaman",
    description: "Berbagi tips dan trik yang udah dipraktekkan selama kuliah dan ngerjain project",
  },
  {
    title: "Bantuan Tugas Real-time",
    description: "Siap bantuin tugas yang lagi stuck atau deadline yang mepet",
  },
  {
    title: "Komunitas Support",
    description: "Join grup belajar bareng teman-teman lain yang sama-sama belajar coding",
  },
  {
    title: "Learn by Doing",
    description: "Belajar langsung praktek dengan project-project sederhana yang aplikatif",
  },
  {
    title: "No Pressure Learning",
    description: "Belajar tanpa tekanan, boleh nanya berkali-kali sampai paham",
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
