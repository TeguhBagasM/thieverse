import React from "react";
import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { jasaFeatures, siteConfig } from "@/config/site";
import { FaWhatsapp, FaCode, FaUsers, FaGlobe } from "react-icons/fa";

export const metadata: Metadata = {
  title: `Layanan Jasa | ${siteConfig.name}`,
  description: "Layanan jasa programming, mentoring, dan pengembangan website profesional",
};

const insights: string[] = [
  "Belajar Bersama Sesama Mahasiswa",
  "Harga Terjangkau untuk Mahasiswa",
  "Bantuan Tugas & Project Coding",
  "Belajar Sambil Sharing Pengalaman",
  "Teman Belajar yang Supportif",
];

const whatsappNumber = "+6281321821374";

const createWhatsAppURL = (serviceName: string, price: string) => {
  const message = `Halo! Saya tertarik dengan layanan *${serviceName}* dengan budget ${price}. Bisakah konsultasi lebih lanjut?`;
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

const createConsultationURL = () => {
  const message = `Halo! Saya ingin konsultasi gratis mengenai layanan coding. Bisakah dibantu?`;
  return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
};

const serviceCards = [
  {
    icon: <FaCode className="w-8 h-8 text-blue-500" />,
    title: "Bimbingan Personal",
    description: "Belajar coding bareng dengan pendampingan satu-satu",
    price: "Mulai dari Rp 50.000",
    features: ["Belajar sesuai kecepatan Anda", "Materi disesuaikan kebutuhan", "Waktu fleksibel"],
  },
  {
    icon: <FaUsers className="w-8 h-8 text-green-500" />,
    title: "Belajar Bersama Teman",
    description: "Sesi belajar dalam grup kecil yang interaktif dan menyenangkan",
    price: "Mulai dari Rp 30.000/orang",
    features: ["Grup maksimal 4 orang", "Diskusi dan sharing bersama", "Suasana belajar yang santai"],
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-purple-500" />,
    title: "Jasa Pembuatan Website",
    description: "Membantu pembuatan website sederhana untuk kebutuhan Anda",
    price: "Mulai dari Rp 150.000",
    features: ["Design sederhana namun menarik", "Responsive di semua device", "Free revisi 1x"],
  },
];

export default function JasaPage() {
  return (
    <>
      <InsightRoll insights={insights} />

      <section className="w-full px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center justify-center py-16 sm:py-20">
          <h1 className="inline-block font-semibold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-dark dark:text-light mb-4">
            Jasa Belajar & Bantuan Coding
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Belajar bersama mahasiswa Teknik Informatika yang siap membantu coding journey Anda!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
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

        <div className="w-full max-w-4xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark dark:text-light mb-6">
            Mengapa Memilih Belajar Bersama Saya?
          </h2>
          <div className="text-center mb-6">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
              ✨ Sudah Dipercaya 50+ Mahasiswa
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-base sm:text-lg mb-8">
            Halo! Saya mahasiswa IT semester 6 yang memiliki passion dalam bidang coding. Meskipun
            belum menjadi expert, saya sudah membantu 50+ teman-teman mahasiswa dalam perjalanan coding
            mereka. Saya memahami tantangan sebagai mahasiswa - dari deadline tugas yang ketat,
            keterbatasan budget, hingga kebingungan dalam memulai belajar. Oleh karena itu, saya ingin
            berbagi ilmu dan pengalaman yang telah saya peroleh selama kuliah dengan harga yang
            terjangkau untuk sesama mahasiswa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createConsultationURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <FaWhatsapp className="mr-2" />
              Konsultasi Gratis
            </a>
            <button className="inline-flex items-center justify-center border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Lihat Portfolio Saya
            </button>
          </div>
        </div>

        <div className="w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-dark dark:text-light mb-12">
            Keunggulan Belajar di Sini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jasaFeatures?.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
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
            Mari Mulai Belajar Bersama!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg">
            Hubungi saya untuk mendiskusikan kebutuhan belajar Anda. Konsultasi gratis!
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
