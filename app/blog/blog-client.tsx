"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import SearchInput from "@/components/search-input";
import ContentNotFound from "@/components/ui/content-not-found";
import { sortPosts } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const INITIAL_POSTS_COUNT = 6;

interface BlogPageClientProps {
  searchParams: {
    query?: string;
  };
}

export default function BlogPageClient({ searchParams }: BlogPageClientProps) {
  const [displayCount, setDisplayCount] = useState(INITIAL_POSTS_COUNT);
  const searchParamsHook = useSearchParams();
  const query = searchParamsHook.get("query") || searchParams.query || "";

  // Filter berdasarkan query
  const filteredPosts = posts
    .filter((post) => post.published)
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));

  // Urutkan post
  const sortedPosts = sortPosts(filteredPosts);

  const displayPosts = sortedPosts.slice(0, displayCount);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + INITIAL_POSTS_COUNT);
  };

  const handleShowLess = () => {
    setDisplayCount(INITIAL_POSTS_COUNT);
  };

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="inline-block font-bold text-4xl md:text-5xl text-center">Blog</h1>
        <p className="text-xl text-muted-foreground text-center">
          Berbagi wawasan dan pengalaman seputar berbagai aspek dalam dunia coding.
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
            <ContentNotFound text="Artikel tidak ditemukan" />
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8">
        {displayCount < sortedPosts.length ? (
          <Button onClick={handleShowMore}>
            Tampilkan Lebih Banyak <FaArrowDown className="ml-2" />
          </Button>
        ) : displayCount > INITIAL_POSTS_COUNT ? (
          <Button onClick={handleShowLess}>
            Sembunyikan <FaArrowUp className="ml-2" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
