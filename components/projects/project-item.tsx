"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { TProject } from "./_project-mock";
import { CoverImage } from "@/components/ui-kit/cover-image";
import Link from "next/link";
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
  const detailHref = `/projects/${id}`;
  const linkClass =
    "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-primary";

  return (
    <li className="list-none">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface">
        {/* Duplikat tautan judul, jadi disembunyikan dari keyboard dan pembaca layar. */}
        <Link href={detailHref} tabIndex={-1} aria-hidden="true">
          <CoverImage
            src={cover}
            alt={`Tampilan proyek ${title}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-none border-0"
          />
        </Link>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <h2 className="line-clamp-1 text-base font-medium text-foreground">
            <Link href={detailHref} className="transition-colors duration-150 hover:text-primary">
              {title}
            </Link>
          </h2>

          <ul className="flex flex-wrap gap-1" aria-label="Technologies used">
            {stacks.map((stack) => (
              <li key={stack} className="rounded bg-accent-soft px-2 py-1 text-xs text-foreground">
                {stack}
              </li>
            ))}
          </ul>

          <div>
            <p className={cn("text-sm text-muted-foreground", !isExpanded && "line-clamp-3")}>
              {description}
            </p>
            {description.length > 150 && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-sm font-medium text-primary transition-colors duration-150 hover:text-foreground"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3">
            <Link href={detailHref} className={linkClass} aria-label={`Project details for ${title}`}>
              <Eye size={16} aria-hidden="true" />
              Detail
            </Link>
            {deployedURL && (
              <a
                href={deployedURL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={`Live demo of ${title}`}
              >
                <FaExternalLinkAlt size={14} aria-hidden="true" />
                Demo
              </a>
            )}
            {isRepo && repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={`Source code of ${title}`}
              >
                <FaGithub size={16} aria-hidden="true" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProjectItem;
