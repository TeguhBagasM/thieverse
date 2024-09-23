import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thievblog",
  description: "My blog made by Thiever",
};

const POSTS_PER_PAGE = 5;

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
    <div className="container max-w-7xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 text-center space-y-4">
          <h1 className="inline-block font-black text-4xl text-center lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">My ramblings about everything and coding.</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <Card className="bg-gray-100 dark:bg-slate-900 rounded-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-300 dark:border-slate-700 col-span-12 sm:col-span-8 sm:col-start-3 h-fit">
          <CardHeader className="text-center">
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
        <div className="col-span-12 sm:col-span-8 sm:col-start-3 mt-4">
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
        </div>
      </div>
    </div>
  );
}
