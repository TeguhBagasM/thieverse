const projects = [
  {
    id: "kantin-mardira",
    title: `Kantin Mardira`,
    description:
      "Kantin Mardira is a web application for managing and displaying food menus and recording transactions. It is built with Golang, Vue, Tailwind CSS, and MySQL, and includes menu management, transaction recording, and transaction reports.",
    cover: "/images/projects/kantin-mardira.png",
    stacks: ["Golang", "Vue", "Tailwind CSS", "MySQL"],
    isRepo: false,
    deployedURL: "https://kantin-mardira.vercel.app/",
  },
  {
    id: "portal-berita",
    title: `Portal Berita`,
    description:
      "Portal Berita is a web application for managing and displaying the latest news. It is built with Laravel, Tailwind CSS, and MySQL, and includes news management, categories, user requests, comments, and news search.",
    cover: "/images/projects/portal-berita.png",
    stacks: ["Laravel", "Tailwind CSS", "MySQL"],
    isRepo: false,
  },
  {
    id: "erapor",
    title: `E-Rapor`,
    description:
      "E-Rapor is a web-based school grade management system developed from February 2026 to March 2026. It has two main roles (Admin and Homeroom Teacher), grade entry, grade import/export, report card printing, and an academic dashboard. It is built with Laravel, Bootstrap, and MySQL.",
    cover: "/images/projects/erapor.png",
    stacks: ["Laravel", "Bootstrap", "MySQL"],
    isRepo: false,
    // deployedURL: "",
  },
  {
    id: "csa-tasktify",
    title: `CSA Tasktify`,
    description:
      "CSA Tasktify is a productivity management application developed from September 2025 to November 2025. It includes notes, tasks, and categories management, and is built with React.js, TypeScript, Supabase, and shadcn/ui.",
    cover: "/images/projects/csa-tasktify.png",
    stacks: ["React.js", "TypeScript", "Supabase", "shadcn/ui"],
    isRepo: false,
    deployedURL: "https://csa-tasktify.vercel.app/",
  },
  {
    id: "tdi-presensi",
    title: `TDI Presensi`,
    description:
      "TDI Presensi is a GPS-based attendance application that requires users to check in from within the office area. The system includes an admin dashboard, approvals, attendance data, and OpenStreetMap integration for location validation. It was developed from February 2026 to March 2026 with Laravel, Bootstrap, and PostgreSQL.",
    cover: "/images/projects/tdi-presensi.png",
    stacks: ["Laravel", "Bootstrap", "PostgreSQL", "OpenStreetMap"],
    isRepo: false,
  },
  {
    id: "expense-tracker",
    title: `Expense Tracker`,
    description:
      "Expense Tracker is a web application built with Laravel and Filament for recording and managing personal finances. Users can record income and expense transactions, group them by category, and view transaction dates and amounts. With a simple, responsive interface, it helps users monitor their financial condition in real time.",
    cover: "/images/projects/expense-tracker-filament.png",
    stacks: ["MySQL", "Laravel", "Filament"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/expense-tracker-filament",
  },
  {
    id: "spendtvise",
    title: `SpendTvise`,
    description:
      "SpendTvise is a web application for managing personal finances. Its main features include income and expense recording, financial data visualization through charts and graphs, and extra features such as budget planning and financial goal tracking. The goal is to give a clear picture of financial condition and support better financial decisions.",
    deployedURL: "https://spendtvise.vercel.app/",
    cover: "/images/projects/spendtvise.png",
    stacks: ["Mysql", "Express.js", "React", "Node.js", "Tailwind"],
    isRepo: false,
    // repoUrl: "https://github.com/TeguhBagasM/",
  },
  {
    id: "marcourse",
    title: `Marcourse`,
    description:
      "Marcourse is a Learning Management System (LMS) built with Laravel Breeze for authentication, Tailwind CSS for a responsive user interface, and Spatie for role and permission management. The system uses MySQL as its database.",
    cover: "/images/projects/marcourse.png",
    stacks: ["Laravel", "Mysql", "Tailwind", "Spatie"],
    isRepo: false,
    // repoUrl: "https://github.com/TeguhBagasM/",
  },
  {
    id: "simanis",
    title: `SIMANIS`,
    description:
      "SIMANIS (School Inventory Management System) is a web application built with Laravel 11, Tailwind CSS, and MySQL to efficiently manage school inventory. With Spatie for role and permission management, it offers features such as QR code scanning for item returns, loan recording, stock tracking, and inventory reporting. Its responsive, modern interface makes it easy and secure for users on any device to access and manage data.",
    deployedURL: "https://arkas.smkn2cmi.sch.id/",
    cover: "/images/projects/simanis.png",
    stacks: ["Laravel", "Mysql", "Tailwind", "Spatie"],
    isRepo: false,
    // repoUrl: "https://github.com/TeguhBagasM/",
  },
  {
    id: "marquizzy",
    title: `Marquizzy`,
    description:
      "Marquizzy is a quiz application built with Next.js, TypeScript, and Prisma as the ORM, using PostgreSQL for its database. Authentication is handled with Clerk.",
    cover: "/images/projects/marquizzy.png",
    stacks: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "Sanity",
    ],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/marquizzy",
  },
  {
    id: "csa-quizzy",
    title: `CSA Quizzy`,
    description:
      "CSA Quizzy is a quiz application built with Next.js, TypeScript, and Tailwind CSS for styling. It lets users take quizzes on technology and web development topics such as HTML, CSS, PHP, JavaScript, and Laravel. With a responsive, interactive interface, users can enjoy a fun learning experience. The app also includes real-time score calculation.",
    deployedURL: "https://csa-quizzy.vercel.app/",
    cover: "/images/projects/csa-quizzy.png",
    stacks: ["Next.js", "TypeScript", "Tailwind"],
    isRepo: false,
  },
  {
    id: "csa-stmikmi",
    title: `CSA STMIK-MI`,
    description:
      "CSA (Creative Student Association) is an IT-based organization at STMIK Mardira Indonesia. It covers all areas of IT, including Programming, Multimedia, IoT, and Game Development.",
    deployedURL: "https://csa-stmikmi.vercel.app/",
    cover: "/images/projects/csa-stmikmi.png",
    stacks: ["React.js", "Tailwind"],
    isRepo: false,
  },
  {
    id: "thievshop",
    title: `ThievShop`,
    description:
      "ThievShop is a modern e-commerce landing page built with React.js and Vite, using Tailwind CSS for styling. The page is designed to give users an elegant and smooth shopping experience. It emphasizes simplicity and comfort, with a clean layout and intuitive navigation.",
    deployedURL: "https://thievshop.vercel.app/",
    cover: "/images/projects/thievshop.png",
    stacks: ["React.js", "Vite", "Tailwind"],
    isRepo: false,
  },
  {
    id: "thievbook",
    title: `ThievBook`,
    description:
      "ThievBook is your go-to online book library. The platform gives access to a wide collection of books across many genres and topics, from the latest bestsellers and classic literature to educational materials. ThievBook has something for everyone.",
    deployedURL: "https://thievbook.vercel.app/",
    cover: "/images/projects/thievbook.png",
    stacks: ["React.js", "API Public"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievbook",
  },
  {
    id: "thievstore",
    title: `ThievStore`,
    description:
      "ThievStore is an online store designed to make buying and selling products online easy. With a user-friendly interface, customers can easily search for, choose, and buy the products they want.",
    deployedURL: "",
    cover: "/images/projects/thievstore.png",
    stacks: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Tailwind"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievstore",
  },
  {
    id: "thievchat",
    title: `ThievChat`,
    description:
      "ThievChat is a real-time application built with Tailwind CSS, Laravel Breeze, React, and Inertia.js, with real-time features powered by Laravel Echo and Pusher. It supports smooth message delivery, user authentication, online status tracking, and dynamic conversation management for an intuitive experience.",
    deployedURL: "",
    cover: "/images/projects/thievchat.png",
    stacks: ["Laravel Reverb", "React.js", "Tailwind", "Inertia.js"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/thievchat",
  },
  {
    id: "sistem-peminjaman-buku",
    title: `Library Book Borrowing System`,
    description:
      "A library book borrowing information system was designed and developed with the Laravel framework to simplify book loans and returns and to improve the efficiency of library data management.",
    deployedURL: "",
    cover: "/images/projects/perpus.png",
    stacks: ["Laravel", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/kaperpus",
  },
  {
    id: "sistem-reservasi-hotel",
    title: `Hotel Reservation System`,
    description:
      "A web-based hotel reservation system was designed and developed to support online room booking, improving convenience and efficiency for both guests and hotel management. The system improves the booking experience with a user-friendly interface and integrated operations.",
    deployedURL: "",
    cover: "/images/projects/hotel.png",
    stacks: ["PHP", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/ujikom-hotel",
  },
  {
    id: "sistem-pembayaran-spp",
    title: `SPP Payment System`,
    description:
      "An information system was developed to streamline school fee (SPP) payments, ensuring efficient and accurate transaction records. The system improves the user experience by providing a smooth and reliable payment solution, reduces administrative workload, and minimizes errors in financial documentation.",
    deployedURL: "",
    cover: "/images/projects/spp.png",
    stacks: ["PHP", "CSS", "Bootstrap", "MySQL"],
    isRepo: true,
    repoUrl: "https://github.com/TeguhBagasM/projectSPP",
  },
];

export default projects;
export type TProject = (typeof projects)[0];
