import "server-only";

import { posts, type Post } from "#site/content";
import { sortPosts } from "@/lib/utils";

export type PostSummary = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  img?: string;
};

const postBySlug = new Map(posts.map((post) => [post.slugAsParams, post]));

function toSummary(post: Post): PostSummary {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    img: post.img,
  };
}

export function getAllPostSummaries(): PostSummary[] {
  return sortPosts(posts.filter((post) => post.published)).map(toSummary);
}

export function getPostBySlug(slug: string): Post | undefined {
  return postBySlug.get(slug);
}

export function getLatestPosts(limit: number): PostSummary[] {
  return getAllPostSummaries().slice(0, limit);
}
