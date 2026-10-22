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
        <h1 className="inline-block font-bold text-4xl md:text-5xl text-center">Proyek</h1>
        <p className="text-xl text-muted-foreground text-center">
          Berikut adalah beberapa proyek yang pernah saya kerjakan.
        </p>
        <SearchInput />
      </div>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => <ProjectItem key={project.id} {...project} />)
        ) : (
          <div className="col-span-1 flex h-64 items-center justify-center md:col-span-2 lg:col-span-3">
            <EmptyState title="Project tidak ditemukan" className="h-full" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProjectList;
