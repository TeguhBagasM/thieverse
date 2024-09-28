import React from "react";
import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { konsulFeaturs } from "@/config/site";

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
            Thieverse hadir untuk menjadi rekan belajar coding Anda. Kami siap membantu Anda mengatasi
            segala kesulitan yang dihadapi, mulai dari pemahaman dasar hingga proyek yang lebih
            kompleks. Dengan biaya terjangkau Rp 25.000 per bulan, Anda dapat mengakses dukungan penuh
            dari mentor kami. Jangan ragu untuk bertanya, kami siap membimbing Anda setiap saat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {konsulFeaturs?.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start p-6 border rounded-2xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border-gray-200 dark:border-gray-700 group"
            >
              <div className="flex items-center mb-2">
                <feature.icon className="text-3xl text-violet-500 dark:text-blue-500 dark:group-hover:text-blue-400 group-hover:text-violet-600" />
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
