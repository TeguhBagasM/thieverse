"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import CustomLink from "./custom-link";
import { TProject } from "./_project-mock";
import { Button } from "@/components/ui/button";
import { CoverImage } from "@/components/ui-kit/cover-image";
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
      <div className="group grid gap-4 overflow-hidden rounded-lg border border-line bg-surface">
        <CoverImage
          src={cover}
          alt={`${title} project screenshot`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-none border-0"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-overlay/60 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
            {deployedURL && (
              <CustomLink
                aria-label={`View ${title} live demo`}
                href={deployedURL}
                className="flex items-center gap-2 rounded bg-overlay/30 px-4 py-2 text-overlay-foreground backdrop-blur-sm transition-colors duration-150 hover:text-primary"
              >
                <FaExternalLinkAlt size={20} />
                <span>Live Demo</span>
              </CustomLink>
            )}

            {isRepo && repoUrl && (
              <CustomLink
                aria-label={`View ${title} source code on GitHub`}
                href={repoUrl}
                className="flex items-center gap-2 rounded bg-overlay/30 px-4 py-2 text-overlay-foreground backdrop-blur-sm transition-colors duration-150 hover:text-primary"
              >
                <FaGithub size={20} />
                <span>Source Code</span>
              </CustomLink>
            )}
          </div>
        </CoverImage>

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-2">
            <h2 className="line-clamp-1 text-base font-medium text-foreground">
              {title}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDetail}
              className="shrink-0 text-muted-foreground hover:text-primary"
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
                className="rounded bg-accent-soft px-2 py-1 text-xs text-foreground"
              >
                {stack}
              </span>
            ))}
          </div>

          <div className="relative">
            <p className={cn("text-sm text-muted-foreground", !isExpanded && "line-clamp-3")}>
              {description}
            </p>
            {description.length > 150 && (
              <button
                onClick={toggleDescription}
                className="mt-2 text-sm font-medium text-primary transition-colors duration-150 hover:text-foreground"
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
