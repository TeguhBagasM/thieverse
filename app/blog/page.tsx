import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thievblog",
  description: "My blog made by Thiever",
};

const POSTS_PER_PAGE = 6; // Changed to 6 to match the grid layout

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8 mb-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-3xl md:text-4xl">Blog</h1>
          <p className="text-xl text-muted-foreground">My ramblings about everything and coding.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {displayPosts?.map((post) => (
          <PostItem
            key={post.slug}
            slug={post.slug}
            date={post.date}
            title={post.title}
            description={post.description}
            tags={post.tags}
            img={post.img}
          />
        ))}
      </div>

      <QueryPagination totalPages={totalPages} className="justify-end mt-8" />
    </div>
  );
}
