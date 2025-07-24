// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/project-detail";
import projects from "@/components/projects/_project-mock";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Project Detail | ${siteConfig.name}`,
};

const projectDetailsMap: Record<
  string,
  {
    startDate: string;
    endDate: string;
    features: string[];
    challenges: string[];
    techDetails: string[];
  }
> = {
  "expense-tracker": {
    startDate: "Juli 2025",
    endDate: "Juli 2025",
    features: [
      "Pencatatan Pemasukan (Income)",
      "Pencatatan Pengeluaran (Expense)",
      "Grafik dan Statistik",
      "Kelola Kategori",
      "Tampilan responsif",
    ],
    challenges: [
      "Mengoptimalkan performa aplikasi",
      "Mengimplementasikan responsive design",
      "Mengelola state management",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Laravel",
      "Admin panel menggunakan Filament",
      "MySQL sebagai database relasional",
      "Interface yang user-friendly untuk tracking expenses",
    ],
  },
  spendtvise: {
    startDate: "Februari 2025",
    endDate: "Maret 2025",
    features: [
      "Pencatatan Pemasukan (Income)",
      "Pencatatan Pengeluaran (Expense)",
      "Grafik dan Statistik",
      "Profil Pengguna",
      "Tampilan responsif dengan Tailwind CSS",
      "Dark mode support",
    ],
    challenges: [
      "Mengintegrasikan visualization data yang kompleks",
      "Mengoptimalkan performa dengan banyak transaksi",
      "Implementasi real-time budget tracking",
    ],
    techDetails: [
      "Full-stack application dengan MERN Stack",
      "Express.js untuk backend API",
      "React.js dengan hooks untuk state management",
      "MySQL sebagai database relasional",
      "Styling menggunakan Tailwind CSS",
      "Chart.js untuk visualisasi data keuangan",
    ],
  },
  marcourse: {
    startDate: "Oktober 2024",
    endDate: "November 2024",
    features: [
      "Learning Management System",
      "Manajemen role dan permission",
      "Autentikasi pengguna dengan Laravel Breeze",
      "Tampilan responsif",
      "Dashboard untuk instructor dan student",
    ],
    challenges: [
      "Implementasi sistem role yang kompleks",
      "Mengelola course content secara efisien",
      "Optimasi performa untuk multiple users",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Laravel",
      "Laravel Breeze untuk autentikasi",
      "Spatie untuk manajemen role dan permission",
      "MySQL sebagai database relasional",
      "Styling menggunakan Tailwind CSS",
    ],
  },
  simanis: {
    startDate: "November 2024",
    endDate: "Januari 2025",
    features: [
      "Pemindaian QR code untuk pengembalian barang",
      "Manajemen autentikasi pengguna dengan Laravel Breeze",
      "Pelacakan status inventaris secara real-time",
      "Pengelolaan data peminjaman dan pengembalian barang",
      "Pengelolaan data asset dan barang habis pakai",
      "Antarmuka responsif dan modern dengan Tailwind CSS",
    ],
    challenges: [
      "Mengintegrasikan QR code untuk pengembalian barang",
      "Mengelola data inventaris secara efisien",
      "Membangun sistem otorisasi role berbasis Spatie",
      "Mengoptimalkan antarmuka dengan Tailwind CSS",
      "Menyediakan laporan inventaris yang dapat diakses real-time",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Laravel 11",
      "QR code integration untuk asset tracking",
      "Spatie untuk manajemen role dan permission",
      "MySQL sebagai database relasional",
      "Styling menggunakan Tailwind CSS",
      "Responsive design untuk berbagai perangkat",
    ],
  },
  marquizzy: {
    startDate: "November 2024",
    endDate: "November 2024",
    features: [
      "Interactive quiz application",
      "Autentikasi dengan Clerk",
      "Leaderboard sistem",
      "User statistics tracking",
      "Content management dengan Sanity",
    ],
    challenges: [
      "Menangani real-time leaderboard updates",
      "Mengintegrasikan multiple third-party services",
      "Optimasi performa quiz dengan banyak pertanyaan",
      "Implementasi secure authentication flow",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Next.js",
      "Type-safe development dengan TypeScript",
      "PostgreSQL untuk penyimpanan data",
      "Prisma sebagai ORM untuk manajemen database",
      "Autentikasi menggunakan Clerk",
      "Sanity untuk content management",
      "Styling menggunakan Tailwind CSS",
    ],
  },
  "csa-quizzy": {
    startDate: "November 2024",
    endDate: "November 2024",
    features: [
      "Interactive quiz untuk topik teknologi",
      "Real-time score calculation",
      "Multiple quiz categories (HTML, CSS, PHP, JavaScript, Laravel)",
      "Responsive design",
      "Progress tracking",
    ],
    challenges: [
      "Implementasi quiz logic yang akurat",
      "Optimasi performa untuk real-time scoring",
      "Mengelola state quiz yang kompleks",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Next.js",
      "Type-safe development dengan TypeScript",
      "Styling menggunakan Tailwind CSS",
      "Local state management untuk quiz data",
      "Responsive design untuk mobile dan desktop",
    ],
  },
  "csa-stmikmi": {
    startDate: "September 2024",
    endDate: "Oktober 2024",
    features: [
      "Organization website",
      "Information display untuk berbagai divisi TI",
      "Responsive layout",
      "Modern UI/UX design",
    ],
    challenges: [
      "Merancang struktur informasi yang jelas",
      "Optimasi loading performance",
      "Cross-browser compatibility",
    ],
    techDetails: [
      "Aplikasi dibangun dengan React.js",
      "Styling menggunakan Tailwind CSS",
      "Component-based architecture",
      "Optimized images dan assets",
    ],
  },
  thievshop: {
    startDate: "2024",
    endDate: "2024",
    features: [
      "Modern e-commerce landing page",
      "Product showcase",
      "Responsive design",
      "Clean navigation",
      "Optimized user experience",
    ],
    challenges: [
      "Merancang UX yang conversion-friendly",
      "Optimasi loading speed",
      "Cross-device compatibility",
    ],
    techDetails: [
      "Aplikasi dibangun dengan React.js",
      "Vite untuk fast development dan bundling",
      "Styling menggunakan Tailwind CSS",
      "Modern JavaScript ES6+",
    ],
  },
  thievbook: {
    startDate: "2024",
    endDate: "2024",
    features: [
      "Online book library",
      "Book search dan filtering",
      "Genre categorization",
      "Public API integration",
      "Responsive book catalog",
    ],
    challenges: [
      "Integrasi dengan public book API",
      "Optimasi performance untuk large datasets",
      "Implementasi efficient search functionality",
    ],
    techDetails: [
      "Aplikasi dibangun dengan React.js",
      "Integration dengan public book API",
      "Modern JavaScript untuk data fetching",
      "Responsive design untuk berbagai screen sizes",
    ],
  },
  thievstore: {
    startDate: "Maret 2024",
    endDate: "April 2024",
    features: [
      "E-commerce platform",
      "Product management",
      "User-friendly interface",
      "Shopping cart functionality",
      "Order management",
    ],
    challenges: [
      "Implementasi complex e-commerce logic",
      "Database schema optimization",
      "Security untuk payment processing",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Next.js",
      "Type-safe development dengan TypeScript",
      "PostgreSQL untuk penyimpanan data",
      "Prisma sebagai ORM untuk manajemen database",
      "Styling menggunakan Tailwind CSS",
      "Server-side rendering untuk SEO optimization",
    ],
  },
  thievchat: {
    startDate: "2024",
    endDate: "2024",
    features: [
      "Real-time messaging",
      "User authentication",
      "Online status tracking",
      "Dynamic conversation management",
      "Responsive chat interface",
    ],
    challenges: [
      "Menangani koneksi real-time yang reliable",
      "Mengoptimalkan penggunaan websocket",
      "Mengelola state untuk multiple chat rooms",
      "Mengimplementasikan fitur typing indicators",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Laravel",
      "Laravel Breeze untuk autentikasi",
      "React.js untuk frontend interactions",
      "Inertia.js untuk SPA-like experience",
      "Laravel Reverb untuk real-time features",
      "Styling menggunakan Tailwind CSS",
    ],
  },
  "sistem-peminjaman-buku": {
    startDate: "2024",
    endDate: "2024",
    features: [
      "Book borrowing management",
      "Return tracking system",
      "Library inventory management",
      "User management",
      "Reports generation",
    ],
    challenges: [
      "Implementasi sistem peminjaman yang akurat",
      "Tracking due dates dan penalties",
      "Data integrity untuk inventory",
    ],
    techDetails: [
      "Aplikasi dibangun dengan Laravel",
      "MySQL sebagai database relasional",
      "Bootstrap untuk responsive styling",
      "Authentication dan authorization system",
    ],
  },
  "sistem-reservasi-hotel": {
    startDate: "Maret 2022",
    endDate: "April 2022",
    features: [
      "Online room reservation",
      "Booking management",
      "Room availability tracking",
      "User-friendly interface",
      "Reservation reports",
    ],
    challenges: [
      "Real-time room availability management",
      "Complex booking validation logic",
      "Integration dengan payment system",
    ],
    techDetails: [
      "Aplikasi dibangun dengan PHP native",
      "MySQL sebagai database relasional",
      "Bootstrap untuk responsive design",
      "Session management untuk user authentication",
    ],
  },
  "sistem-pembayaran-spp": {
    startDate: "September 2021",
    endDate: "November 2021",
    features: [
      "SPP payment processing",
      "Payment history tracking",
      "Student financial records",
      "Administrative reports",
      "Multi-user role system",
    ],
    challenges: [
      "Accurate payment calculation",
      "Financial data security",
      "Multi-role access management",
    ],
    techDetails: [
      "Aplikasi dibangun dengan PHP native",
      "MySQL sebagai database relasional",
      "Bootstrap untuk styling",
      "Secure payment processing logic",
    ],
  },
};

const projectsWithDetails = projects.map((project) => {
  const details = projectDetailsMap[project.id];

  if (!details) {
    return {
      ...project,
      startDate: "2024",
      endDate: "2024",
      features: ["Tampilan responsif", "User Interface yang modern", "Optimasi performa"],
      challenges: [
        "Mengoptimalkan performa aplikasi",
        "Mengimplementasikan responsive design",
        "Mengelola state management",
      ],
      techDetails: [
        `Aplikasi dibangun dengan ${project.stacks[0]}`,
        `Styling menggunakan ${project.stacks.includes("Tailwind") ? "Tailwind CSS" : "CSS"}`,
      ],
    };
  }

  return {
    ...project,
    ...details,
  };
});

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsWithDetails.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
