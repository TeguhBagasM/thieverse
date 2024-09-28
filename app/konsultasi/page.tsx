import React from "react";
import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { konsulFeaturs, siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Konsultasi",
  description: "Konsultasi",
};

const insights: string[] = [
  "Konsultasi Kapan Saja",
  "Harga Terjangkau",
  "Bantu Tugas Coding Anda",
  "Panduan untuk Pemula",
  "Belajar Coding dari 0",
  "Teman Belajar di Setiap Langkah",
];

export default function KonsultasiPage() {
  return (
    <>
      <InsightRoll insights={insights} />
      <div className="container max-w-6xl py-8 lg:py-14">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:items-center md:gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight lg:text-5xl">
              Konsultasi Coding
            </h1>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              Siap membantu di setiap langkah belajar coding Anda.
            </p>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="mb-12">
          <h2 className="relative section-title-after text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Mengapa Memilih Thieverse?
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Thieverse hadir sebagai rekan belajar coding Anda. Kami siap membantu Anda mengatasi segala
            kesulitan dalam mengerjakan tugas, mulai dari pemahaman dasar hingga yang lebih kompleks.
            Dengan biaya terjangkau sebesar Rp 25.000/bulan, Anda mendapatkan akses penuh ke dukungan
            mentor kami. Jangan ragu untuk bertanya, kami selalu siap membimbing Anda kapan saja. Ayo
            bergabung dengan Thieverse sekarang, karena kuota grup terbatas hanya untuk 20 orang. Klik
            tombol di bawah untuk bergabung.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.whatsapp}
            className="flex items-center justify-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 max-w-xs w-full sm:w-auto"
          >
            <FaWhatsapp className="h-6 w-6 mr-2" />
            Chat Via WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {konsulFeaturs?.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start p-6 border rounded-2xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border-gray-200 dark:border-gray-700 group"
            >
              <div className="flex items-center mb-2">
                <feature.icon className="text-3xl text-blue-600 dark:text-blue-500 dark:group-hover:text-blue-400 group-hover:text-blue-700" />
                <h3 className="ml-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
