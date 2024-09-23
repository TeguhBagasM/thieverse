import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const allPosts = getPostsByTagSlug(posts, tag);
  const displayPosts = allPosts.filter((post) => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-7xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4 text-center">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            <span>#</span>
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover more categories and expand your knowledge!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <Card className="bg-gray-100 dark:bg-slate-900 rounded-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-300 dark:border-slate-700 col-span-12 sm:col-span-8 sm:col-start-3 h-fit">
          <CardHeader className="text-center">
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center gap-2">
            {sortedTags.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
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
        </div>
      </div>
    </div>
  );
}
