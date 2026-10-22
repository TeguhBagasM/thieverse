import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { FaWhatsapp, FaCode, FaUsers, FaGlobe, FaRegNewspaper } from "react-icons/fa";
import { ButtonLink } from "@/components/ui-kit/button-link";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan les Laravel untuk pemula sampai menengah: mentoring personal, kelas grup, dan pendampingan project real.",
  alternates: { canonical: "/layanan" },
};

const insights: string[] = [
  "Les Laravel dari Dasar Sampai Deploy",
  "Belajar CRUD, Auth, dan API Laravel",
  "Pendampingan Project Tugas Kuliah atau Freelance",
  "Materi Praktis: Laravel 11, Filament, dan MySQL",
  "Mentoring Santai Tapi Terarah",
];

const whatsappNumber = "+6281321821374";

const createWhatsAppURL = (serviceName: string, price: string) => {
  const message = `Halo! Saya tertarik ikut *${serviceName}* (${price}) untuk belajar Laravel. Bisa konsultasi dulu?`;
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

const createConsultationURL = () => {
  const message =
    "Halo! Saya ingin konsultasi gratis untuk les Laravel (materi, jadwal, dan kebutuhan belajar).";
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

const serviceCards = [
  {
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Private Les Laravel",
    description: "Mentoring 1-on-1 untuk bangun fondasi Laravel sampai paham alur project",
    price: "Mulai dari Rp 75.000/sesi",
    features: [
      "Roadmap belajar sesuai level kamu",
      "Bahas routing, migration, controller, blade",
      "Feedback langsung saat ngoding",
    ],
  },
  {
    icon: <FaUsers className="h-8 w-8 text-primary" />,
    title: "Kelas Grup Laravel",
    description: "Belajar bareng teman dalam grup kecil untuk latihan project terstruktur",
    price: "Mulai dari Rp 40.000/orang",
    features: [
      "Grup kecil supaya diskusi tetap intens",
      "Latihan studi kasus CRUD dan autentikasi",
      "Rekaman & catatan materi setiap sesi",
    ],
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-primary" />,
    title: "Pendampingan Project Laravel",
    description: "Cocok untuk tugas akhir, portfolio, atau project client berbasis Laravel",
    price: "Mulai dari Rp 120.000/meeting",
    features: [
      "Review arsitektur project dan database",
      "Bantu debugging error dan optimasi query",
      "Panduan deploy ke hosting/VPS",
    ],
  },
];

const laravelAdvantages = [
  {
    title: "Belajar dari Real Case",
    description:
      "Materi tidak hanya teori. Kamu langsung praktik bikin fitur yang biasa dipakai di project Laravel nyata.",
  },
  {
    title: "Silabus Fleksibel",
    description:
      "Bisa mulai dari nol atau langsung ke topik lanjutan seperti API, queue, atau Filament sesuai kebutuhan.",
  },
  {
    title: "Pendekatan Step-by-Step",
    description:
      "Setiap sesi dibuat runtut agar kamu paham alasan di balik setiap kode, bukan sekadar copy-paste.",
  },
  {
    title: "Support Setelah Sesi",
    description:
      "Tetap bisa tanya kendala lewat chat untuk blocker ringan setelah kelas selesai.",
  },
  {
    title: "Siap Untuk Dunia Kerja",
    description:
      "Latihan standar workflow mulai dari Git, struktur project, sampai teknik debugging yang dipakai tim developer.",
  },
  {
    title: "Target Hasil yang Jelas",
    description:
      "Setiap paket punya outcome yang terukur, misalnya aplikasi CRUD selesai, API jalan, atau project berhasil deploy.",
  },
];

export default function JasaPage() {
  return (
    <>
      <InsightRoll insights={insights} />

      <section className="container flex flex-col items-center">
        <div className="relative flex w-full flex-col items-center justify-center py-16 sm:py-20">
          <h1 className="mb-4 inline-block text-center text-4xl font-semibold capitalize md:text-5xl">
            Layanan Jasa
          </h1>
          <p className="max-w-3xl text-center text-base text-muted-foreground sm:text-lg md:text-xl">
            Fokus bantu kamu menguasai Laravel lewat sesi terstruktur, praktik langsung, dan pendampingan
            sampai project jadi.
          </p>
        </div>

        <div className="mb-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-foreground/30"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent-soft">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mb-4 text-lg font-bold text-primary">{service.price}</div>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={createWhatsAppURL(service.title, service.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Pilih Layanan
              </ButtonLink>
            </div>
          ))}
        </div>

        <div className="mb-16 w-full rounded-lg bg-accent-soft p-8 sm:p-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground sm:text-3xl">
            Kenapa Cocok untuk Belajar Laravel?
          </h2>
          <div className="mb-6 text-center">
            <span className="inline-block rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground">
              ✨ Fokus Laravel, Bukan Materi Campur-campur
            </span>
          </div>
          <p className="mb-8 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pembelajaran dirancang dari kebutuhanmu: mulai dari dasar syntax Laravel sampai membangun
            aplikasi end-to-end dengan best practice.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={createConsultationURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" />
              Konsultasi Gratis
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary" size="lg" className="w-full sm:w-fit">
              <FaRegNewspaper className="mr-2 h-6 w-6" />
              Lihat Project Saya
            </ButtonLink>
          </div>
        </div>

        <div className="w-full">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
            Keunggulan Les Laravel di Sini
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {laravelAdvantages.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-foreground/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                    <span className="text-xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full py-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Siap Naik Level di Laravel?
          </h2>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            Ceritakan target belajarmu, nanti saya bantu susun jalur belajar Laravel yang paling pas.
          </p>
          <ButtonLink
            href={createConsultationURL()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            Chat Via WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
