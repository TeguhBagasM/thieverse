import React from "react";
import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";

export const metadata: Metadata = {
  title: "Konsultasi",
  description: "Konsultasi",
};

const insights: string[] = [
  "Konsultasi Kapan Saja",
  "Harga Bersahabat",
  "Membantu Tugas Coding Kamu",
  "Siap Membantu Pemula",
  "Dibimbing dari 0",
  "Tak Perlu Khawatir, Kami Siap Mendampingi",
];

export default function KonsultasiPage() {
  return (
    <>
      <InsightRoll insights={insights} />
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">Konsultasi</h1>
          </div>
        </div>
        <hr className="my-8" />
      </div>
    </>
  );
}