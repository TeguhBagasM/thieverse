"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import SearchInput from "@/components/search-input";
import ContentNotFound from "@/components/ui/content-not-found";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    const searchQuery = searchParams.get("query") || "";
    setCurrentPage(page);
    setQuery(searchQuery);
  }, [searchParams]);

  // Filter berdasarkan query
  const filteredPosts = posts
    .filter((post) => post.published)
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));

  // Urutkan post
  const sortedPosts = sortPosts(filteredPosts);
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="inline-block font-bold text-4xl md:text-5xl text-center">Blog</h1>
        <p className="text-xl text-muted-foreground text-center">
          My ramblings about everything and coding.
        </p>
        <SearchInput />
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {displayPosts.length > 0 ? (
          displayPosts.map((post) => (
            <PostItem
              key={post.slug}
              slug={post.slug}
              date={post.date}
              title={post.title}
              description={post.description}
              tags={post.tags}
              img={post.img}
            />
          ))
        ) : (
          <div className="flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-3 h-64">
            <ContentNotFound text="No Articles Found" />
          </div>
        )}
      </div>

      <QueryPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        className="justify-end mt-8"
      />
    </div>
  );
}
