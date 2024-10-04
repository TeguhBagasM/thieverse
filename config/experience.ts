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
    ocupation: "Kursus Web untuk Pemula",
    company: "",
    url: "",
    location: "Remote",
    startDate: "2024-01-05",
    description:
      "Sebagai instruktur pemrograman web untuk pemula, saya memiliki pengalaman yang mendalam dalam mengajarkan dasar-dasar pengembangan web. Fokus pengajaran saya meliputi bahasa pemrograman PHP, kerangka kerja Laravel, bahasa pemformatan CSS, serta kerangka kerja Bootstrap.",
  },
  {
    ocupation: "Asisten Praktikum",
    company: "STMIK Mardira Indonesia",
    url: "https://stmik-mi.ac.id/",
    location: "Kampus STMIK Mardira Indonesia",
    startDate: "2023-10-01",
    endDate: "2024-09-20",
    description:
      "Bertanggung jawab atas pengelolaan tiga kelas Pemrograman Web, membimbing mahasiswa dalam praktikum dan menganalisis kesalahan kode program, serta mendukung dosen dalam pengajaran mata kuliah Pemrograman Web dan pengembangan modul pembelajaran.",
  },
  {
    ocupation: "Fullstack Developer",
    company: "Bara Enterprise",
    url: "https://bara.co.id/",
    location: "SMKN 2 Cimahi",
    startDate: "2021-09-01",
    endDate: "2021-11-30",
    description:
      "Melaksanakan Praktik Kerja Lapangan (PKL) melalui program Project Work. Program ini merupakan hasil kerja sama antara SMK Negeri 2 Cimahi dan PT BARA PRIMA MULTI TEKNOVASI. Dalam kegiatan ini, saya bertugas merancang dan mengembangkan aplikasi Sistem Pembayaran SPP dengan menggunakan bahasa pemrograman PHP dan kerangka kerja Bootstrap.",
  },
] satisfies JobExperience[];
