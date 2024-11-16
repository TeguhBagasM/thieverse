"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { typo } from "../ui/typography";
import CustomLink from "./custom-link";
import { TProject } from "./_project-mock";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Eye } from "lucide-react";

type ProjectItemProps = TProject;

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  title,
  description,
  deployedURL,
  cover,
  stacks,
  isRepo,
  repoUrl,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewDetail = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <li role="listitem" className="list-none">
      <div className="grid gap-4 group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="relative w-full pt-[56.25%] overflow-hidden">
          <Image alt={`${title} cover`} src={cover} layout="fill" objectFit="cover" />

          {/* Konten hover dengan transisi */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <Button
              variant="outline"
              onClick={handleViewDetail}
              className="text-black dark:text-white border-white hover:text-blue-500 hover:border-blue-500 transition-colors flex items-center gap-2"
            >
              <Eye size={20} />
              Detail
            </Button>

            {deployedURL && (
              <CustomLink
                aria-label={`Kunjungi ${title} live URL`}
                href={deployedURL}
                className="text-white hover:text-blue-500 transition-colors flex items-center"
              >
                <FaExternalLinkAlt size={24} />
                <span className="ml-2">Demo</span>
              </CustomLink>
            )}

            {isRepo && (
              <CustomLink
                aria-label={`Kunjungi ${title} GitHub Repo`}
                href={repoUrl as string}
                className="text-white hover:text-blue-500 transition-colors flex items-center"
              >
                <FaGithub size={24} />
                <span className="ml-2">GitHub</span>
              </CustomLink>
            )}
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <h2 className="font-medium font-ubuntu text-base">{title}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDetail}
              className="text-muted-foreground hover:text-primary"
            >
              <Eye size={16} className="mr-1" />
              Detail
            </Button>
          </div>

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
