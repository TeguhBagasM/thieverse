import { FaClock, FaComments, FaWallet } from "react-icons/fa";

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
  },
};

export const konsulFeaturs = [
  {
    title: "Konsultasi Kapan Saja",
    description: "Dapatkan dukungan dan konsultasi kapan pun Anda membutuhkannya.",
    icon: FaComments,
  },
  {
    title: "Jadwal Fleksibel",
    description: "Atur jadwal belajar sesuai dengan kenyamanan dan ketersediaan waktu Anda.",
    icon: FaClock,
  },
  {
    title: "Harga Terjangkau",
    description: "Nikmati penawaran harga yang kompetitif dan ramah di kantong.",
    icon: FaWallet,
  },
];

export type SiteConfig = typeof siteConfig;
