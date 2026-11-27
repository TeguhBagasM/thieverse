import type { Metadata } from "next";

import { Hero } from "@/components/hero/hero";
import { PostItem } from "@/components/post-item";
import { ButtonLink } from "@/components/ui-kit/button-link";
import { Section } from "@/components/ui-kit/section";
import { heroConfig } from "@/config/hero";
import { getLatestPosts } from "@/lib/posts";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const latestPosts = getLatestPosts(6);

  return (
    <>
      <Hero />

      <Section
        id={heroConfig.scroll.targetId}
        className="container mt-16 space-y-0 py-6 lg:py-10"
      >
        <h2 className="mb-8 text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-5xl">
          Blog Terbaru
        </h2>
        <div className="mb-4 flex justify-end">
          <ButtonLink href="/blog" variant="secondary" size="sm">
            Lihat Semua →
          </ButtonLink>
        </div>
        <ul className="mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <li key={post.slug} className="flex-grow">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                img={post.img}
              />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
