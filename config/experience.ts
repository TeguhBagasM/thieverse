export interface JobExperience {
  ocupation: string;
  company: string;
  asLink?: boolean;
  location: string;
  url?: string;
  startDate: string;
  endDate?: string | null;
  description: string;
}

export const JOB_EXPERIENCE = [
  {
    ocupation: "Full Stack Developer",
    company: "Tabel Data Informatika",
    url: "https://web.tabeldata.com/",
    location: "Jl. Pratista Raya No.17",
    startDate: "2025-08-19",
    endDate: "2026-01-26",
    description:
      "I worked on an API Management project focused on integrating banking services such as Bank BJB and Bank Mandiri using Apache Camel. My role covered designing, implementing, and testing service flows to make sure data is transformed and delivered securely and consistently across systems. I also contributed to configuration optimization, technical documentation, and understanding enterprise integration concepts so the APIs could be used efficiently by internal and external services.",
  },
  {
    ocupation: "Chairperson",
    company: "Creative Student Association",
    url: "https://csa-stmikmi.vercel.app",
    location: "STMIK Mardira Indonesia Campus",
    startDate: "2025-01-25",
    endDate: "2026-04-18",
    description:
      "As chairperson of the Creative Student Association (CSA), I led an organization focused on technology development and the creativity of its members.",
  },

  {
    ocupation: "Beginner Programming Course Instructor",
    company: "",
    url: "",
    location: "Remote",
    startDate: "2024-01-05",
    description:
      "As a programming instructor for beginners, I have hands-on experience teaching the fundamentals of web development, along with Object-Oriented Programming (OOP) concepts using Java and version control with Git. My teaching covers PHP, the Laravel framework, CSS, and the Bootstrap framework.",
  },
  {
    ocupation: "Teaching Assistant",
    company: "STMIK Mardira Indonesia",
    url: "https://stmik-mi.ac.id/",
    location: "STMIK Mardira Indonesia Campus",
    startDate: "2023-10-01",
    description:
      "Responsible for managing five Web Programming classes, guiding students through lab work and analyzing program errors, and supporting the lecturer in teaching the Web Programming course and developing learning modules.",
  },
  {
    ocupation: "Web Developer",
    company: "Bara Enterprise",
    url: "https://bara.co.id/",
    location: "SMKN 2 Cimahi",
    startDate: "2021-09-01",
    endDate: "2021-11-30",
    description:
      "Completed an industry internship (PKL) through the Project Work program, a collaboration between SMK Negeri 2 Cimahi and PT BARA PRIMA MULTI TEKNOVASI. I designed and developed a school fee (SPP) payment system using PHP and the Bootstrap framework.",
  },
] satisfies JobExperience[];
