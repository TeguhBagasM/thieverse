import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { Instagram } from "lucide-react";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-16">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Kolom teks */}
          <div className="flex-1 text-center md:text-left ml-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black text-balance">
              Welcome to Thievblog
            </h1>
            <p className="max-w-[42rem] mx-auto md:mx-0 text-muted-foreground sm:text-xl text-balance mt-4">
              Thievblog is my little corner of the internet where I talk about tech, web development,
              and whatever else I'm into. Besides articles and how-tos, I also share stories about my
              life, from my love of tech to my hobbies. It's all about keeping things real.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row mt-6">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-fit bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                )}
              >
                View my blog
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-fit border-2 border-blue-400 text-blue-400 py-3 px-8 rounded-full hover:bg-blue-400 hover:text-white hover:border-blue-400 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                )}
              >
                <Instagram className="mr-2" /> Follow Me
              </Link>
            </div>
          </div>

          {/* Kolom gambar */}
          <div className="flex-1 mb-6 md:mb-0">
            <img
              src="/images/blog-hero.png"
              alt="Thievblog"
              className="w-full h-auto max-w-[300px] mx-auto md:max-w-[400px] lg:max-w-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-32">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map(
            (post) =>
              post.published && (
                <li key={post.slug} className="first:border-t first:border-border">
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
}
