// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/project-detail";
import projects from "@/components/projects/_project-mock";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Project Detail| ${siteConfig.name}`,
};

const projectsWithDetails = projects.map((project) => ({
  ...project,
  startDate:
    project.title === "CSA Quizzy"
      ? "November 2024"
      : project.title === "SpendTvise"
        ? "Februari 2025"
        : project.title === "SIMANIS"
          ? "November 2024"
          : project.title === "Marcourse"
            ? "Oktober 2024"
            : project.title === "CSA STMIK-MI"
              ? "September 2024"
              : project.title === "ThievStore"
                ? "Maret 2024"
                : project.title === "Sistem Pembayaran SPP"
                  ? "September 2021"
                  : project.title === "Marquizzy"
                    ? "November 2024"
                    : project.title === "Sistem Reservasi Hotel"
                      ? "Maret 2022"
                      : "2023",
  endDate:
    project.title === "CSA Quizzy"
      ? "November 2024"
      : project.title === "SpendTvise"
        ? "Maret 2025"
        : project.title === "SIMANIS"
          ? "Januari 2025"
          : project.title === "Marcourse"
            ? "November 2024"
            : project.title === "CSA STMIK-MI"
              ? "Oktober 2024"
              : project.title === "ThievStore"
                ? "April 2024"
                : project.title === "Sistem Pembayaran SPP"
                  ? "November 2021"
                  : project.title === "Marquizzy"
                    ? "November 2024"
                    : project.title === "Sistem Reservasi Hotel"
                      ? "April 2022"
                      : "2024",
  features: getProjectFeatures(project.title),
  challenges: getProjectChallenges(project.title),
  techDetails: getProjectTechDetails(project.title, project.stacks),
}));

function getProjectFeatures(title: string): string[] {
  switch (title) {
    case "ThievChat":
      return [
        "Pencatatan Pemasukan (Income)",
        "Pencatatan Pengeluaran (Expense)",
        "Grafik dan Statistik",
        "Profil Pengguna",
        "Tampilan responsif dengan Tailwind CSS",
      ];
    case "ThievChat":
      return [
        "Real-time messaging dengan Laravel Echo dan Pusher",
        "Autentikasi pengguna",
        "Status online tracking",
        "Manajemen percakapan dinamis",
        "Tampilan responsif dengan Tailwind CSS",
      ];
    case "SIMANIS":
      return [
        "Pemindaian QR code untuk pengembalian barang",
        "Manajemen autentikasi pengguna dengan Laravel Breeze",
        "Pelacakan status inventaris secara real-time",
        "Pengelolaan data peminjaman dan pengembalian barang",
        "Pengelolaan data asset dan barang habis pakai",
        "Antarmuka responsif dan modern dengan Tailwind CSS",
      ];
    default:
      return ["Tampilan responsif", "User Interface yang modern", "Optimasi performa"];
  }
}

function getProjectChallenges(title: string): string[] {
  switch (title) {
    case "ThievChat":
      return [
        "Menangani koneksi real-time yang reliable",
        "Mengoptimalkan penggunaan websocket",
        "Mengelola state untuk multiple chat rooms",
        "Mengimplementasikan fitur typing indicators",
      ];
    case "Marquizzy":
      return [
        "Menangani koneksi real-time yang reliable",
        "Mengoptimalkan penggunaan websocket",
        "Mengelola state untuk multiple chat rooms",
        "Mengimplementasikan fitur typing indicators",
      ];
    case "SIMANIS":
      return [
        "Mengintegrasikan QR code untuk pengembalian barang",
        "Mengelola data inventaris secara efisien",
        "Membangun sistem otorisasi role berbasis Spatie",
        "Mengoptimalkan antarmuka dengan Tailwind CSS",
        "Menyediakan laporan inventaris yang dapat diakses real-time",
      ];
    default:
      return [
        "Mengoptimalkan performa aplikasi",
        "Mengimplementasikan responsive design",
        "Mengelola state management",
      ];
  }
}

function getProjectTechDetails(title: string, stacks: string[]): string[] {
  const baseDetails = [
    `Aplikasi dibangun dengan ${stacks[0]}`,
    `Styling menggunakan ${stacks.includes("Tailwind") ? "Tailwind CSS" : stacks.find((s) => s.includes("CSS")) || "CSS"}`,
  ];

  if (stacks.includes("TypeScript")) {
    baseDetails.push("Type-safe development dengan TypeScript");
  }

  if (stacks.includes("PostgreSQL")) {
    baseDetails.push("Database PostgreSQL untuk penyimpanan data");
    baseDetails.push("Prisma sebagai ORM untuk manajemen database");
  }
  if (stacks.includes("MySQL")) {
    baseDetails.push("MySQL sebagai database relasional");
  }

  switch (title) {
    case "Marquizzy":
      return [
        ...baseDetails,
        "Autentikasi menggunakan Clerk",
        "Leaderboard untuk melihat point keseluruhan",
        "Statistik User",
        "API routes untuk handling backend requests",
      ];
    case "SIMANIS":
      return [
        ...baseDetails,
        "Pemindaian QR code untuk proses pengembalian barang",
        "Manajemen autentikasi pengguna menggunakan Laravel",
        "Role dan permission berbasis Spatie",
        "Database MySQL untuk menyimpan data inventaris",
        "Tampilan responsif menggunakan Tailwind CSS",
        "Pembuatan laporan inventaris",
        "Pengelolaan status barang secara real-time",
      ];
    case "ThievChat":
      return [
        ...baseDetails,
        "Real-time websocket connection dengan Laravel Echo",
        "Event broadcasting menggunakan Pusher",
        "Inertia.js untuk SPA-like experience",
      ];
    default:
      return baseDetails;
  }
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsWithDetails.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
