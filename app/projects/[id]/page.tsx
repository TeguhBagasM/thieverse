// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/project-detail";
import projects from "@/components/projects/_project-mock";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Project Detail| ${siteConfig.name}`,
};

// Menambahkan informasi tambahan untuk setiap project
const projectsWithDetails = projects.map((project) => ({
  ...project,
  // Menambahkan field tambahan sesuai dengan project
  startDate:
    project.title === "CSA Quizzy"
      ? "November 2024"
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
        "Real-time messaging dengan Laravel Echo dan Pusher",
        "Autentikasi pengguna",
        "Status online tracking",
        "Manajemen percakapan dinamis",
        "Tampilan responsif dengan Tailwind CSS",
      ];
    // Tambahkan fitur untuk project lainnya
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
    // Tambahkan challenges untuk project lainnya
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
