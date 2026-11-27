"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui-kit/button-link";
import { Container } from "@/components/ui-kit/container";
import { useRouter } from "next/navigation";
import { TProject } from "@/components/projects/_project-mock";

interface ProjectDetailProps {
  project: TProject & {
    startDate?: string;
    endDate?: string;
    features?: string[];
    challenges?: string[];
    techDetails?: string[];
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const router = useRouter();

  return (
    <Container className="py-6 lg:py-10">
      <div className="mb-8">
        <Button variant="ghost" className="mb-4 flex items-center gap-2" onClick={() => router.back()}>
          <ArrowLeft size={16} />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stacks.map((stack) => (
            <Badge key={stack} variant="secondary" className="text-sm">
              {stack}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </CardContent>
          </Card>

          {/* Technical Details */}
          {project.techDetails && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Code2 className="w-6 h-6" />
                  Technical Details
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.techDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Features */}
          {project.features && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Layers className="w-6 h-6" />
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Project Links</h2>
              <div className="space-y-3">
                {project.deployedURL && (
                  <ButtonLink
                    href={project.deployedURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="w-full justify-start gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </ButtonLink>
                )}
                {project.isRepo && project.repoUrl && (
                  <ButtonLink
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="w-full justify-start gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </ButtonLink>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Project Timeline */}
          {(project.startDate || project.endDate) && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Timeline
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  {project.startDate && (
                    <div>
                      <span className="font-medium">Start:</span> {project.startDate}
                    </div>
                  )}
                  {project.endDate && (
                    <div>
                      <span className="font-medium">End:</span> {project.endDate}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Challenges */}
          {project.challenges && (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetail;
