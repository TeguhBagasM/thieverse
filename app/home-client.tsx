"use client";

import { codingQuotes } from "@/config/site";
import { PostItem } from "@/components/post-item";
import { ButtonLink } from "@/components/ui-kit/button-link";
import { Container } from "@/components/ui-kit/container";
import { Section } from "@/components/ui-kit/section";
import { useEffect, useState } from "react";
import { MdArticle } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import type { PostSummary } from "@/lib/posts";

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * codingQuotes.length);
  return codingQuotes[index];
};

function RandomQuote() {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setQuote(getRandomQuote());
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <blockquote className="mt-6 border-l-4 border-accent pl-4 italic">
      <p className="text-lg">{quote.quote}</p>
      <footer className="mt-2 text-sm">- {quote.author}</footer>
    </blockquote>
  );
}

export default function HomeClient({ latestPosts }: { latestPosts: PostSummary[] }) {
  return (
    <>
      <Section className="pb-8 pt-6 md:pb-12 md:mt-2 lg:py-16">
        <Container className="flex flex-col-reverse items-center gap-8 md:flex-row">
          <div className="ml-2 flex-1 text-center md:text-left">
            <h1 className="text-3xl font-black text-balance sm:text-5xl md:text-6xl lg:text-4xl">
              Selamat datang di Thieverse
            </h1>
            <p className="mx-auto mt-4 max-w-prose text-balance text-muted-foreground sm:text-xl md:mx-0">
              Di sini, saya senang berbagi apa yang saya pelajari tentang teknologi dan pengalaman saya
              dalam dunia coding.
            </p>
            <RandomQuote />
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/blog" size="lg" className="w-full sm:w-fit">
                <MdArticle className="h-6 w-6" /> Jelajahi Wawasan
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary" size="lg" className="w-full sm:w-fit">
                <FaRegNewspaper className="h-6 w-6" /> Eksplorasi Proyek
              </ButtonLink>
            </div>
          </div>
          <div className="mb-6 flex-1 md:mb-0">
            <img
              src="/images/hero.gif"
              alt="Thieverse Animated"
              className="mx-auto h-auto w-full max-w-[500px] rounded-lg object-cover md:max-w-[660px] lg:max-w-[550px]"
            />
          </div>
        </Container>
      </Section>

      <Section className="container mt-16 space-y-0 py-6 lg:py-10">
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
