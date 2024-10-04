import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { typo } from "../ui/typography";
import CustomLink from "./custom-link";
import { TProject } from "./_project-mock";

type ProjectItemProps = TProject;

const linkClass =
  "!p-0 h-full hover:!text-[#0000FF] dark:hover:!text-[#00BFFF] !flex items-center gap-2 !text-sm !text-ring";

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  deployedURL,
  cover,
  stacks,
  isRepo,
  repoUrl,
}) => {
  return (
    <li role="listitem" className="list-none">
      <div className="grid gap-4 group rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="relative w-full pt-[56.25%] overflow-hidden">
          <Image alt={`${title} cover`} src={cover} layout="fill" objectFit="cover" />
        </div>

        <div className="p-4 space-y-2">
          <h2 className="font-medium font-ubuntu text-base">{title}</h2>
          <p className="text-xs text-ring" aria-label="project stacks">
            {stacks.join(" / ")}
          </p>
          <p className={cn(typo({ variant: "paragraph", size: "sm" }), "line-clamp-2 !mt-4")}>
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4 !mt-2">
            {deployedURL && (
              <CustomLink
                aria-label={`Kunjungi ${title} live URL`}
                href={deployedURL}
                className={linkClass}
              >
                <FaExternalLinkAlt size={12} />
                <span>Live Demo</span>
              </CustomLink>
            )}

            {isRepo && (
              <CustomLink
                aria-label={`Kunjungi ${title} GitHub Repo`}
                href={repoUrl as string}
                className={linkClass}
              >
                <FaGithub />
                <span>Repo URL</span>
              </CustomLink>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
