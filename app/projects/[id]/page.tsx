// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/project-detail";
import projects from "@/components/projects/_project-mock";

// Menambahkan informasi tambahan untuk setiap project
const projectsWithDetails = projects.map((project) => ({
  ...project,
  // Menambahkan field tambahan sesuai dengan project
  startDate:
    project.title === "Noteverse"
      ? "Januari 2024"
      : project.title === "CSA STMIK-MI"
        ? "November 2023"
        : "2023",
  endDate:
    project.title === "Noteverse"
      ? "Februari 2024"
      : project.title === "CSA STMIK-MI"
        ? "Desember 2023"
        : "2024",
  features: getProjectFeatures(project.title),
  challenges: getProjectChallenges(project.title),
  techDetails: getProjectTechDetails(project.title, project.stacks),
}));

function getProjectFeatures(title: string): string[] {
  switch (title) {
    case "Noteverse":
      return [
        "Autentikasi dengan Google dan GitHub",
        "CRUD operasi untuk catatan",
        "Tampilan responsif dengan DaisyUI",
        "Penyimpanan data dengan PostgreSQL",
        "Real-time updates",
      ];
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
      return [
        "Tampilan responsif",
        "User Interface yang modern",
        "Optimasi performa",
        "Cross-browser compatibility",
      ];
  }
}

function getProjectChallenges(title: string): string[] {
  switch (title) {
    case "Noteverse":
      return [
        "Mengimplementasikan autentikasi yang aman",
        "Optimasi performa dengan data yang banyak",
        "Mengelola state management yang kompleks",
        "Mengintegrasikan multiple third-party services",
      ];
    case "ThievChat":
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
        "Mengintegrasikan berbagai teknologi",
      ];
  }
}

function getProjectTechDetails(title: string, stacks: string[]): string[] {
  const baseDetails = [
    `Frontend dibangun dengan ${stacks[0]}`,
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
    case "Noteverse":
      return [
        ...baseDetails,
        "Implementasi OAuth untuk login dengan Google dan GitHub",
        "Server-side rendering dengan Next.js",
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
