import React from "react";
import { TProject } from "./_project-mock";
import ProjectItem from "./project-item";
import SearchInput from "../search-input";

interface ProjectListProps {
  projects: TProject[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="inline-block font-bold text-4xl md:text-5xl text-center">Project</h1>
        <p className="text-xl text-muted-foreground text-center">
          Berikut adalah beberapa proyek yang baru saja saya kerjakan.
        </p>
        <SearchInput />
      </div>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
