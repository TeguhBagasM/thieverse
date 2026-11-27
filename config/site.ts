import { FaClock, FaComments, FaInfinity, FaLaptopCode, FaUsers, FaWallet } from "react-icons/fa";

const whatsappMessage = "Hi! I would like to join Thieverse";

export const siteConfig = {
  name: "Thieverse",
  url: "https://thieverse.vercel.app",
  description: "Portfolio, learning notes, and Laravel mentoring by Teguh Bagas M.",
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
    title: "Fellow Students",
    description:
      "Learn alongside fellow students who understand the challenges of IT studies",
  },
  {
    title: "Affordable Pricing",
    description: "Rates that fit a student budget without straining your finances",
  },
  {
    title: "Flexible Schedule",
    description: "Sessions that adjust to your class schedule and campus activities",
  },
  {
    title: "Relaxed Learning Atmosphere",
    description: "A comfortable, informal setting that encourages open discussion",
  },
  {
    title: "Shared Experience",
    description: "Tips and strategies that have proven effective during college",
  },
  {
    title: "Quick Assignment Help",
    description: "Ready to help with difficult assignments or tight deadlines",
  },
  {
    title: "Supportive Community",
    description: "Join a study group with friends who share your interests",
  },
  {
    title: "Hands-on Learning",
    description: "Focused on practice with real projects you can apply",
  },
  {
    title: "Pressure-free Learning",
    description: "Learn at ease and ask as many questions as you need until it clicks",
  },
];

export type SiteConfig = typeof siteConfig;
