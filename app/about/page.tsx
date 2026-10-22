import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import DrawOutline from "@/components/ui/draw-outline-button";
import Skills from "@/components/about/skills";
import { Experience } from "@/components/about/experience";
import { JOB_EXPERIENCE } from "@/config/experience";
import Github from "@/components/about/github";
import { Download } from "lucide-react";
import { ButtonLink } from "@/components/ui-kit/button-link";
import { Container } from "@/components/ui-kit/container";

export const metadata: Metadata = {
  title: "Tentang",
  description: `Tentang ${siteConfig.author}, web developer yang berfokus pada backend dan Laravel.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const pdfUrl = "/CV-TeguhBagasMardiansyah.pdf";
  return (
    <>
      <Container className="py-6 lg:py-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
          <div className="flex-1">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
              About Me
            </h1>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <Avatar className="h-48 w-48">
              <AvatarImage src="/teguh.jpg" alt={siteConfig.author} />
              <AvatarFallback>TBM</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-center break-words">
              {siteConfig.author}
            </h2>
            <span className="inline-flex items-center justify-center rounded border border-line bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Web Developer
            </span>
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex justify-center">
              <ButtonLink href={pdfUrl} download="CV-TeguhBagasMardiansyah.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </ButtonLink>
            </div>
            <p className="text-muted-foreground text-lg py-4">
              Pengembang Fullstack berfokus Backend dengan pengalaman dalam
              membangun dan mengembangkan aplikasi web secara end-to-end.
              Memiliki kemampuan dalam pengembangan backend, pengelolaan
              database, integrasi API, autentikasi, serta pengembangan antarmuka
              pengguna modern. Terbiasa mempelajari dan menggunakan berbagai
              teknologi sesuai kebutuhan proyek. Memiliki kemampuan adaptasi,
              problem solving, dan kemauan belajar yang tinggi dalam
              mengeksplorasi teknologi baru.
            </p>
          </div>
        </div>
      </Container>
      <Container className="my-12">
        <Skills />
      </Container>
      <Container className="my-12">
        <h2 className="text-3xl font-bold mb-6">Pengalaman</h2>
        <Experience experience={JOB_EXPERIENCE} />
      </Container>
      <Container className="my-12">
        <div className="flex justify-center">
          <Github username="TeguhBagasM" />
        </div>
      </Container>
    </>
  );
}
