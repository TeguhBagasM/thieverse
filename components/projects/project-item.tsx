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

  // Fungsi untuk mengoptimalkan loading image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/images/projects/placeholder.png"; // Fallback image
  };

  return (
    <li role="listitem" className="list-none">
      <div className="grid gap-4 group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full pt-[56.25%] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            alt={`${title} project screenshot`}
            src={cover}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            onError={handleImageError}
            priority={false} // Set to true only for above-the-fold images
          />

          {/* Overlay dengan konten hover */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {deployedURL && (
              <CustomLink
                aria-label={`View ${title} live demo`}
                href={deployedURL}
                className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 px-4 py-2 rounded-md bg-black/20 backdrop-blur-sm"
              >
                <FaExternalLinkAlt size={20} />
                <span>Live Demo</span>
              </CustomLink>
            )}

            {isRepo && repoUrl && (
              <CustomLink
                aria-label={`View ${title} source code on GitHub`}
                href={repoUrl}
                className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 px-4 py-2 rounded-md bg-black/20 backdrop-blur-sm"
              >
                <FaGithub size={20} />
                <span>Source Code</span>
              </CustomLink>
            )}
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <h2 className="font-medium font-ubuntu text-base text-gray-900 dark:text-gray-100 line-clamp-1">
              {title}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDetail}
              className="text-muted-foreground hover:text-primary shrink-0"
              aria-label={`View detailed information about ${title}`}
            >
              <Eye size={16} className="mr-1" />
              Detail
            </Button>
          </div>

          <div className="flex flex-wrap gap-1" aria-label="Technologies used">
            {stacks.map((stack, index) => (
              <span
                key={`${id}-stack-${index}`}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {stack}
              </span>
            ))}
          </div>

          <div className={cn(typo({ variant: "paragraph", size: "sm" }), "relative")}>
            <p className={cn("text-gray-600 dark:text-gray-400", !isExpanded && "line-clamp-3")}>
              {description}
            </p>
            {description.length > 150 && (
              <button
                onClick={toggleDescription}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-2 text-sm transition-colors"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Show less description" : "Show more description"}
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
