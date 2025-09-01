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
    description:
      "Saya terlibat dalam proyek pengembangan API Management yang berfokus pada integrasi layanan perbankan seperti Bank BJB dan Bank Mandiri menggunakan Apache Camel. Peran saya mencakup perancangan, implementasi, dan pengujian alur integrasi (service flow) untuk memastikan data dapat ditransformasikan dan dikirim dengan aman serta konsisten antar sistem. Selain itu, saya juga berkontribusi dalam optimasi konfigurasi, dokumentasi teknis, serta pemahaman konsep integrasi enterprise agar API yang dibangun dapat digunakan secara efisien oleh berbagai layanan internal maupun eksternal perusahaan.",
  },
  {
    ocupation: "Ketua Umum",
    company: "Creative Student Association",
    url: "https://csa-stmikmi.vercel.app",
    location: "Kampus STMIK Mardira Indonesia",
    startDate: "2025-01-25",
    description:
      "Sebagai Ketua Creative Student Association (CSA), saya bertanggung jawab dalam memimpin organisasi yang berfokus pada pengembangan teknologi dan kreativitas anggota.",
  },

  {
    ocupation: "Kursus Pemrograman untuk Pemula",
    company: "",
    url: "",
    location: "Remote",
    startDate: "2024-01-05",
    description:
      "Sebagai instruktur pemrograman untuk pemula, saya memiliki pengalaman yang mendalam dalam mengajarkan dasar-dasar pengembangan web, serta konsep Object-Oriented Programming (OOP) menggunakan Java dan pengelolaan versi dengan Git. Fokus pengajaran saya meliputi bahasa pemrograman PHP, kerangka kerja Laravel, bahasa pemformatan CSS, serta kerangka kerja Bootstrap.",
  },
  {
    ocupation: "Asisten Praktikum",
    company: "STMIK Mardira Indonesia",
    url: "https://stmik-mi.ac.id/",
    location: "Kampus STMIK Mardira Indonesia",
    startDate: "2023-10-01",
    description:
      "Bertanggung jawab atas pengelolaan lima kelas Pemrograman Web, membimbing mahasiswa dalam praktikum dan menganalisis kesalahan kode program, serta mendukung dosen dalam pengajaran mata kuliah Pemrograman Web dan pengembangan modul pembelajaran.",
  },
  {
    ocupation: "Web Developer",
    company: "Bara Enterprise",
    url: "https://bara.co.id/",
    location: "SMKN 2 Cimahi",
    startDate: "2021-09-01",
    endDate: "2021-11-30",
    description:
      "Melaksanakan Praktik Kerja Lapangan (PKL) melalui program Project Work. Program ini merupakan hasil kerja sama antara SMK Negeri 2 Cimahi dan PT BARA PRIMA MULTI TEKNOVASI. Dalam kegiatan ini, saya bertugas merancang dan mengembangkan aplikasi Sistem Pembayaran SPP dengan menggunakan bahasa pemrograman PHP dan kerangka kerja Bootstrap.",
  },
] satisfies JobExperience[];
