import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
// import { FaExternalLinkAlt } from "react-icons/fa";
import GradientText from "@/components/ui/gradient-text";
// import DrawOutline from "@/components/ui/draw-outline-button";
import Skills from "@/components/about/skills";
import { Experience } from "@/components/about/experience";
import { JOB_EXPERIENCE } from "@/config/experience";
import Github from "@/components/about/github";

export const metadata: Metadata = {
  title: `About Me | ${siteConfig.name}`,
  description: "Information about me",
};

export default function AboutPage() {
  return (
    <>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
          <div className="flex-1">
            <h1 className="font-bold text-4xl md:text-5xl text-center">About Me</h1>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <Avatar className="h-48 w-48">
              <AvatarImage src="/teguh.jpg" alt={siteConfig.author} />
              <AvatarFallback>TBM</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-center break-words">{siteConfig.author}</h2>
            <div className="w-fit rounded-lg bg-gradient-to-r dark:from-blue-400 from-blue-600 dark:to-teal-400 to-teal-600 p-px">
              <div className="rounded-lg dark:bg-neutral-950/80 bg-white/80 text-md">
                <GradientText
                  as="span"
                  className="flex items-center justify-center gap-0.5 bg-gradient-to-r dark:from-blue-400 from-blue-600 dark:to-teal-400 to-teal-600 px-3 py-px text-md font-medium"
                >
                  Web Developer
                </GradientText>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex justify-center">
              {/* <a href={siteConfig.links.personalSite} target="_blank" rel="noopener noreferrer">
                <DrawOutline>
                  <span>My Portfolio</span>
                  <FaExternalLinkAlt className="ml-2" />
                </DrawOutline>
              </a> */}
            </div>
            <p className="text-muted-foreground text-lg py-4">
              Seorang mahasiswa Teknik Informatika yang berdedikasi dengan minat kuat dalam merancang
              aplikasi web inovatif. Keahlian saya terletak pada pemanfaatan framework dan library
              populer seperti Laravel, Express.js, React JS, dan Tailwind CSS untuk menghadirkan solusi
              yang efisien dan menarik secara visual. Saya berkomitmen untuk memenuhi tenggat waktu
              proyek dan terus memperluas keterampilan melalui pelatihan serta sertifikasi yang
              terarah. Sebagai seorang full-stack developer, saya senang bekerja pada proyek dari tahap
              perancangan hingga penerapan. Saya antusias untuk berkontribusi dengan keterampilan
              teknis dan kemampuan pemecahan masalah saya dalam tim yang dinamis.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <Skills />
      </div>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 className="text-3xl font-bold mb-6">Pengalaman</h2>
        <Experience experience={JOB_EXPERIENCE} />
      </div>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex justify-center">
          <Github username="TeguhBagasM" />
        </div>
      </div>
    </>
  );
}
