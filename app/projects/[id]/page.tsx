// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/project-detail";
import projects from "@/components/projects/_project-mock";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return { title: "Project Details" };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      images: [{ url: project.cover, alt: project.title }],
    },
  };
}

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
  "csa-tasktify": {
    startDate: "September 2025",
    endDate: "November 2025",
    features: [
      "Notes management",
      "Tasks management",
      "Categories management",
      "Task status tracking",
      "Responsive layout",
    ],
    challenges: [
      "Keeping the data relations between tasks, notes, and categories consistent",
      "Keeping real-time data in sync between the frontend and the database",
      "Optimizing the UX for daily task management",
    ],
    techDetails: [
      "Built with React.js",
      "Type-safe development with TypeScript",
      "Supabase for authentication and data storage",
      "shadcn/ui for modern interface components",
      "Styled with Tailwind CSS",
    ],
  },
  "tdi-presensi": {
    startDate: "February 2026",
    endDate: "March 2026",
    features: [
      "Admin dashboard for attendance monitoring",
      "User, division, and job role management",
      "Attendance approval workflow for users",
      "Daily attendance data and attendance status summaries",
      "GPS-based attendance that requires check-in from within the office area",
      "Location map integration using OpenStreetMap",
      "Attendance system settings",
    ],
    challenges: [
      "Defining a valid office radius for GPS attendance",
      "Handling varying device coordinate accuracy",
      "Designing the approval flow so attendance data stays accurate",
    ],
    techDetails: [
      "Built with Laravel",
      "Bootstrap for the admin dashboard interface",
      "PostgreSQL as the relational database",
      "OpenStreetMap for visualizing and validating attendance locations",
      "Geolocation validation to ensure attendance is only recorded from the office area",
    ],
  },
  erapor: {
    startDate: "February 2026",
    endDate: "March 2026",
    features: [
      "Admin dashboard for academic data summaries",
      "Two main roles: Admin and Homeroom Teacher",
      "Master data management (users, teachers, students, classes, majors, subjects)",
      "Student grade entry by homeroom teachers",
      "Grade data import and export",
      "Printing student report cards",
      "Active academic year management",
    ],
    challenges: [
      "Defining different access rules for Admin and Homeroom Teacher",
      "Keeping data validation intact when importing large volumes of grades",
      "Keeping the report card format consistent across all classes",
    ],
    techDetails: [
      "Built with Laravel",
      "Bootstrap for the admin panel interface",
      "MySQL as the relational database",
      "Role-based access control for Admin and Homeroom Teacher",
      "Data export/import features for efficient grade management",
    ],
  },
  "expense-tracker": {
    startDate: "July 2025",
    endDate: "July 2025",
    features: [
      "Income recording",
      "Expense recording",
      "Charts and statistics",
      "Category management",
      "Responsive layout",
    ],
    challenges: [
      "Optimizing application performance",
      "Implementing responsive design",
      "Managing state",
    ],
    techDetails: [
      "Built with Laravel",
      "Admin panel built with Filament",
      "MySQL as the relational database",
      "A user-friendly interface for tracking expenses",
    ],
  },
  spendtvise: {
    startDate: "February 2025",
    endDate: "March 2025",
    features: [
      "Income recording",
      "Expense recording",
      "Charts and statistics",
      "User profile",
      "Responsive layout with Tailwind CSS",
      "Dark mode support",
    ],
    challenges: [
      "Integrating complex data visualizations",
      "Optimizing performance with large numbers of transactions",
      "Implementing real-time budget tracking",
    ],
    techDetails: [
      "Full-stack application with the MERN Stack",
      "Express.js for the backend API",
      "React.js with hooks for state management",
      "MySQL as the relational database",
      "Styled with Tailwind CSS",
      "Chart.js for visualizing financial data",
    ],
  },
  "portal-berita": {
    startDate: "February 2026",
    endDate: "February 2026",
    features: [
      "News management",
      "News category management",
      "User requests for content submission",
      "Comment system for articles",
      "User and role management",
      "News search and filtering",
      "Responsive layout with Tailwind CSS",
    ],
    challenges: [
      "Structuring news categories and relations efficiently",
      "Keeping user request and comment input secure",
      "Optimizing MySQL queries for news listings and search",
    ],
    techDetails: [
      "Built with Laravel",
      "Blade templates for page rendering",
      "MySQL as the relational database",
      "Styled with Tailwind CSS",
      "Laravel Eloquent for managing news, category, and comment data",
    ],
  },
  marcourse: {
    startDate: "October 2024",
    endDate: "November 2024",
    features: [
      "Learning Management System",
      "Role and permission management",
      "User authentication with Laravel Breeze",
      "Responsive layout",
      "Dashboards for instructors and students",
    ],
    challenges: [
      "Implementing a complex role system",
      "Managing course content efficiently",
      "Optimizing performance for multiple users",
    ],
    techDetails: [
      "Built with Laravel",
      "Laravel Breeze for authentication",
      "Spatie for role and permission management",
      "MySQL as the relational database",
      "Styled with Tailwind CSS",
    ],
  },
  simanis: {
    startDate: "November 2024",
    endDate: "January 2025",
    features: [
      "QR code scanning for item returns",
      "User authentication management with Laravel Breeze",
      "Real-time inventory status tracking",
      "Managing loan and return data",
      "Managing asset and consumable item data",
      "Responsive, modern interface with Tailwind CSS",
    ],
    challenges: [
      "Integrating QR codes for item returns",
      "Managing inventory data efficiently",
      "Building a role-based authorization system with Spatie",
      "Optimizing the interface with Tailwind CSS",
      "Providing inventory reports accessible in real time",
    ],
    techDetails: [
      "Built with Laravel 11",
      "QR code integration for asset tracking",
      "Spatie for role and permission management",
      "MySQL as the relational database",
      "Styled with Tailwind CSS",
      "Responsive design for various devices",
    ],
  },
  marquizzy: {
    startDate: "November 2024",
    endDate: "November 2024",
    features: [
      "Interactive quiz application",
      "Authentication with Clerk",
      "Leaderboard system",
      "User statistics tracking",
      "Content management with Sanity",
    ],
    challenges: [
      "Handling real-time leaderboard updates",
      "Integrating multiple third-party services",
      "Optimizing quiz performance with many questions",
      "Implementing a secure authentication flow",
    ],
    techDetails: [
      "Built with Next.js",
      "Type-safe development with TypeScript",
      "PostgreSQL for data storage",
      "Prisma as the ORM for database management",
      "Authentication with Clerk",
      "Sanity for content management",
      "Styled with Tailwind CSS",
    ],
  },
  "csa-quizzy": {
    startDate: "November 2024",
    endDate: "November 2024",
    features: [
      "Interactive quizzes on technology topics",
      "Real-time score calculation",
      "Multiple quiz categories (HTML, CSS, PHP, JavaScript, Laravel)",
      "Responsive design",
      "Progress tracking",
    ],
    challenges: [
      "Implementing accurate quiz logic",
      "Optimizing performance for real-time scoring",
      "Managing complex quiz state",
    ],
    techDetails: [
      "Built with Next.js",
      "Type-safe development with TypeScript",
      "Styled with Tailwind CSS",
      "Local state management for quiz data",
      "Responsive design for mobile and desktop",
    ],
  },
  "csa-stmikmi": {
    startDate: "September 2024",
    endDate: "October 2024",
    features: [
      "Organization website",
      "Information display for IT divisions",
      "Responsive layout",
      "Modern UI/UX design",
    ],
    challenges: [
      "Designing a clear information structure",
      "Optimizing loading performance",
      "Cross-browser compatibility",
    ],
    techDetails: [
      "Built with React.js",
      "Styled with Tailwind CSS",
      "Component-based architecture",
      "Optimized images and assets",
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
      "Designing a conversion-friendly UX",
      "Optimizing loading speed",
      "Cross-device compatibility",
    ],
    techDetails: [
      "Built with React.js",
      "Vite for fast development and bundling",
      "Styled with Tailwind CSS",
      "Modern JavaScript (ES6+)",
    ],
  },
  thievbook: {
    startDate: "2024",
    endDate: "2024",
    features: [
      "Online book library",
      "Book search and filtering",
      "Genre categorization",
      "Public API integration",
      "Responsive book catalog",
    ],
    challenges: [
      "Integration with a public book API",
      "Optimizing performance for large datasets",
      "Implementing efficient search",
    ],
    techDetails: [
      "Built with React.js",
      "Integration with a public book API",
      "Modern JavaScript for data fetching",
      "Responsive design for various screen sizes",
    ],
  },
  thievstore: {
    startDate: "March 2024",
    endDate: "April 2024",
    features: [
      "E-commerce platform",
      "Product management",
      "User-friendly interface",
      "Shopping cart functionality",
      "Order management",
    ],
    challenges: [
      "Implementing complex e-commerce logic",
      "Database schema optimization",
      "Security for payment processing",
    ],
    techDetails: [
      "Built with Next.js",
      "Type-safe development with TypeScript",
      "PostgreSQL for data storage",
      "Prisma as the ORM for database management",
      "Styled with Tailwind CSS",
      "Server-side rendering for SEO optimization",
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
      "Handling reliable real-time connections",
      "Optimizing websocket usage",
      "Managing state across multiple chat rooms",
      "Implementing typing indicators",
    ],
    techDetails: [
      "Built with Laravel",
      "Laravel Breeze for authentication",
      "React.js for frontend interactions",
      "Inertia.js for an SPA-like experience",
      "Laravel Reverb for real-time features",
      "Styled with Tailwind CSS",
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
      "Report generation",
    ],
    challenges: [
      "Implementing an accurate borrowing system",
      "Tracking due dates and penalties",
      "Data integrity for inventory",
    ],
    techDetails: [
      "Built with Laravel",
      "MySQL as the relational database",
      "Bootstrap for responsive styling",
      "Authentication and authorization system",
    ],
  },
  "sistem-reservasi-hotel": {
    startDate: "March 2022",
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
      "Integration with a payment system",
    ],
    techDetails: [
      "Built with native PHP",
      "MySQL as the relational database",
      "Bootstrap for responsive design",
      "Session management for user authentication",
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
      "Built with native PHP",
      "MySQL as the relational database",
      "Bootstrap for styling",
      "Secure payment processing logic",
    ],
  },
};

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  // Bagian timeline, fitur, tantangan, dan detail teknis hanya tampil bila datanya ada.
  return <ProjectDetail project={{ ...project, ...projectDetailsMap[project.id] }} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
