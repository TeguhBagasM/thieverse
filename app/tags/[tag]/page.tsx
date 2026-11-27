import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui-kit/empty-state";
import { Container } from "@/components/ui-kit/container";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    tag: string;
    page?: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: `Topik ${tag}`,
    description: `Artikel tentang ${tag} di Thieverse.`,
    alternates: { canonical: `/tags/${tag}` },
  };
}

export async function generateStaticParams() {
  const tags = getAllTags(posts);
  return Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostsByTagSlug(posts, tag);

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <>
      <Container className="mt-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4 text-center">
            <h1 className="inline-block text-center text-4xl font-black lg:text-5xl">
              <span>#</span>
              {title}
            </h1>
            <p className="mb-2 px-2 text-xl text-muted-foreground">
              Jelajahi topik lain dan perluas wawasanmu.
            </p>
            <hr />
          </div>
        </div>
      </Container>
      <Container className="mt-10">
        <Card className="h-fit w-full">
          <CardHeader>
            <CardTitle>Topik</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />)}
          </CardContent>
        </Card>
      </Container>
      <Container className="mt-8 grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts?.length > 0 ? (
          displayPosts
            .filter((post) => post.published)
            .map((post) => {
              const { slug, date, title, description, tags, img } = post;
              return (
                <PostItem
                  key={slug}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                  img={img}
                />
              );
            })
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <EmptyState title="Belum ada artikel" />
          </div>
        )}
      </Container>
    </>
  );
}
