"use client";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { typo } from "../ui/typography";
import CustomLink from "./custom-link";
import { TProject } from "./_project-mock";

type ProjectItemProps = TProject;

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  deployedURL,
  cover,
  stacks,
  isRepo,
  repoUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li role="listitem" className="list-none">
      <div className="grid gap-4 group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
        <div
          className="relative w-full pt-[56.25%] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image alt={`${title} cover`} src={cover} layout="fill" objectFit="cover" />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
              {deployedURL && (
                <CustomLink
                  aria-label={`Kunjungi ${title} live URL`}
                  href={deployedURL}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <FaExternalLinkAlt size={24} />
                  <span className="sr-only">Live Demo</span>
                </CustomLink>
              )}
              {isRepo && (
                <CustomLink
                  aria-label={`Kunjungi ${title} GitHub Repo`}
                  href={repoUrl as string}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <FaGithub size={24} />
                  <span className="sr-only">Repo URL</span>
                </CustomLink>
              )}
            </div>
          )}
        </div>

        <div className="p-4 space-y-2">
          <h2 className="font-medium font-ubuntu text-base">{title}</h2>
          <p className="text-xs text-ring" aria-label="project stacks">
            {stacks.join(" / ")}
          </p>
          <div className={cn(typo({ variant: "paragraph", size: "sm" }), "relative")}>
            <p className={isExpanded ? "" : "line-clamp-2"}>{description}</p>
            {description.length > 100 && (
              <button
                onClick={toggleDescription}
                className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-medium mt-1"
              >
                {isExpanded ? "Sembunyikan" : "Baca selengkapnya"}
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
