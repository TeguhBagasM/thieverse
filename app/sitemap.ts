import type { MetadataRoute } from "next";

import projects from "@/components/projects/_project-mock";
import { siteConfig } from "@/config/site";
import { getAllPostSummaries } from "@/lib/posts";

const baseUrl = siteConfig.url.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/blog", "/projects", "/about", "/layanan", "/tags"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const postRoutes = getAllPostSummaries().map((post) => ({
    url: `${baseUrl}/${post.slug.replace(/^\/+/, "")}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...projectRoutes];
}
