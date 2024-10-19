import { buttonVariants } from "@/components/ui/button";
import { siteConfig, codingQuotes } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { FaWhatsapp } from "react-icons/fa";
import { useMemo } from "react";

const getRandomQuote = (seed: number) => {
  const index = seed % codingQuotes.length;
  return codingQuotes[index];
};

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 6);

  const today = new Date().toDateString();
  const randomQuote = useMemo(() => getRandomQuote(today.length), [today]);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-2 lg:py-16">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left ml-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-black text-balance">
              Selamat datang di Thieverse
            </h1>
            <p className="max-w-[42rem] mx-auto md:mx-0 text-muted-foreground sm:text-xl text-balance mt-4">
              Di sini, saya senang berbagi apa yang saya pelajari tentang teknologi dan pengalaman saya
              dalam dunia coding. Selain artikel dan tutorial, saya juga membuka pintu untuk konsultasi
              coding.
            </p>
            <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic">
              <p className="text-lg">{randomQuote.quote}</p>
              <footer className="text-sm mt-2">- {randomQuote.author}</footer>
            </blockquote>
            <div className="flex flex-col gap-4 justify-center sm:flex-row mt-6">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit bg-blue-500 dark:bg-blue-400 text-white hover:bg-blue-700 dark:hover:bg-blue-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                )}
              >
                Lihat Semua Blog
              </Link>
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-fit border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 py-3 px-8 rounded-full hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white hover:border-blue-500 dark:hover:border-blue-400 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                )}
              >
                <FaWhatsapp className="mr-2 h-6 w-6" /> Chat Via Whatsapp
              </Link>
            </div>
          </div>
          <div className="flex-1 mb-6 md:mb-0">
            <img
              src="/images/hero.gif"
              alt="Thieverse Animated"
              className="w-full h-auto max-w-[500px] mx-auto md:max-w-[660px] lg:max-w-[550px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="container max-w-6xl py-6 lg:py-10 mt-18">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black text-center mb-8">
          Blog Terbaru
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {latestPosts.map(
            (post) =>
              post.published && (
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
              )
          )}
        </ul>
      </section>
    </>
  );
}
