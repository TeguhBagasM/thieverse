import React from "react";
import { TProject } from "./_project-mock";
import ProjectItem from "./project-item";
import SearchInput from "../search-input";
import { EmptyState } from "@/components/ui-kit/empty-state";
import { Container } from "@/components/ui-kit/container";

interface ProjectListProps {
  projects: TProject[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <Container className="py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="inline-block font-bold text-4xl md:text-5xl text-center">Projects</h1>
        <p className="text-xl text-muted-foreground text-center">
          Here are some projects I have worked on.
        </p>
        <SearchInput />
      </div>
      <hr className="mb-8" />
      {projects.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </ul>
      ) : (
        <div className="flex h-64 items-center justify-center">
          <EmptyState title="No projects found" className="h-full" />
        </div>
      )}
    </Container>
  );
};

export default ProjectList;
