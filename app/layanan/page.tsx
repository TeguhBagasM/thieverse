import React from "react";
import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaCode, FaUsers, FaGlobe, FaRegNewspaper } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Layanan Les Laravel | ${siteConfig.name}`,
  description:
    "Layanan les Laravel untuk pemula sampai menengah: mentoring personal, kelas grup, dan pendampingan project real.",
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
    icon: <FaCode className="w-8 h-8 text-blue-500" />,
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
    icon: <FaUsers className="w-8 h-8 text-green-500" />,
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
    icon: <FaGlobe className="w-8 h-8 text-purple-500" />,
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

      <section className="w-full px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center justify-center py-16 sm:py-20">
          <h1 className="inline-block font-semibold capitalize text-4xl md:text-5xl text-center mb-4">
            Layanan Les Laravel
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Fokus bantu kamu menguasai Laravel lewat sesi terstruktur, praktik langsung, dan pendampingan
            sampai project jadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-light mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
                {service.price}
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={createWhatsAppURL(service.title, service.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center inline-block"
              >
                Pilih Layanan
              </a>
            </div>
          ))}
        </div>

        <div className="w-full max-w-4xl bg-blue-50 dark:bg-gray-900 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark dark:text-light mb-6">
            Kenapa Cocok untuk Belajar Laravel?
          </h2>
          <div className="text-center mb-6">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
              ✨ Fokus Laravel, Bukan Materi Campur-campur
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-base sm:text-lg mb-8">
            Pembelajaran dirancang dari kebutuhanmu: mulai dari dasar syntax Laravel sampai membangun
            aplikasi end-to-end dengan best practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createConsultationURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaWhatsapp className="mr-2" />
              Konsultasi Gratis
            </a>
            <Link
              href="/projects"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 py-3 px-8 rounded-full hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white hover:border-blue-500 dark:hover:border-blue-400 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              )}
            >
              <FaRegNewspaper className="mr-2 h-6 w-6" />
              Lihat Project Saya
            </Link>
          </div>
        </div>

        <div className="w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark dark:text-light mb-12">
            Keunggulan Les Laravel di Sini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laravelAdvantages.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl text-center py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark dark:text-light mb-4">
            Siap Naik Level di Laravel?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg">
            Ceritakan target belajarmu, nanti saya bantu susun jalur belajar Laravel yang paling pas.
          </p>
          <a
            href={createConsultationURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            Chat Via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
