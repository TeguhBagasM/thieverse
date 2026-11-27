import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { posts } from "#site/content";
import { Tag } from "@/components/tag";
import { Container } from "@/components/ui-kit/container";

export const metadata: Metadata = {
  title: "Topics",
  description: "All the topics written about on Thieverse.",
  alternates: { canonical: "/tags" },
};

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <Container className="py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Topics</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {sortedTags?.map((tag) => <Tag tag={tag} count={tags[tag]} key={tag} />)}
      </div>
    </Container>
  );
}
