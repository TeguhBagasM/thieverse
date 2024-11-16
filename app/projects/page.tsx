import React from "react";
import { Metadata } from "next";
import { ProjectList, projects } from "@/components/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
};

interface ProjectsPageProps {
  searchParams: {
    query: string | undefined;
  };
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ searchParams }) => {
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(decodeURIComponent(searchParams.query || ""))
  );

  return (
    <div className="!mt-8">
      <div className="mt-6">
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
