import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import InsightRoll from "@/components/insight-roll";
import { FaExternalLinkAlt } from "react-icons/fa";
import GradientText from "@/components/ui/gradient-text";
import DrawOutline from "@/components/ui/draw-outline-button";
import Skills from "@/components/skills";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

const insights: string[] = [
  "Mahasiswa Teknik Informatika",
  "Asisten Praktikum",
  "25+ Lisensi dan Sertifikasi",
  "Creative Student Association",
  "Wakil Ketua Divisi Pemrograman",
  "Web Developer",
];

export default function AboutPage() {
  return (
    <>
      <InsightRoll insights={insights} />
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">About Me</h1>
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
              <a href={siteConfig.links.personalSite} target="_blank" rel="noopener noreferrer">
                <DrawOutline>
                  <span>My Portfolio</span>
                  <FaExternalLinkAlt className="ml-2" />
                </DrawOutline>
              </a>
            </div>
            <p className="text-muted-foreground text-lg py-4">
              I&apos;m a dedicated Informatics Engineering student with a strong passion for crafting
              innovative web applications. My expertise lies in leveraging popular frameworks and
              libraries like Laravel, Express.js, React JS, and Tailwind CSS to deliver efficient and
              visually appealing solutions. I&apos;m committed to meeting project deadlines and
              continuously expanding my skillset through targeted training and certifications. As a
              full-stack developer, I thrive on the opportunity to work on projects from conception to
              deployment. I&apos;m eager to contribute my technical skills and problem-solving
              abilities to a dynamic team.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-8 mr-8">
        <Skills />
      </div>
    </>
  );
}
