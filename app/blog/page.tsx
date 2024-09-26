import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import SearchInput from "@/components/search-input";
import ContentNotFound from "@/components/ui/content-not-found"; // Import ContentNotFound
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thievblog",
  description: "My blog made by Thiever",
};

const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  searchParams: {
    page?: string;
    query?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;

  // Filter berdasarkan query
  const filteredPosts = posts
    .filter((post) => post.published)
    .filter((post) => post.title.toLowerCase().includes(decodeURIComponent(searchParams.query || "")));

  // Urutkan post
  const sortedPosts = sortPosts(filteredPosts);
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="inline-block font-bold text-3xl md:text-4xl text-center">Blog</h1>
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

      <QueryPagination totalPages={totalPages} className="justify-end mt-8" />
    </div>
  );
}
