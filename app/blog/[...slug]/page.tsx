import { posts } from "#site/content";
import { getPostBySlug } from "@/lib/posts";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
// import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "#config";
import { Tag } from "@/components/tag";
import Image from "next/image";
import ShareButton from "@/components/share-button";
import { ChevronLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui-kit/button-link";
import { Meta } from "@/components/ui-kit/meta";
import { Prose } from "@/components/ui-kit/prose";
import PostComments from "@/components/giscus";
import PostTableOfContent from "@/components/toc";

interface PostPageProps {
  params: {
    slug: string[];
    loading?: boolean;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  return getPostBySlug(slug);
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.date).toISOString();

  const ogImages = [
    {
      url: `/api/og?title=${encodeURIComponent(post.title)}`,
      width: 1200,
      height: 630,
    },
  ];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/${post.slug.replace(/^\/+/, "")}`,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: [siteConfig.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ogImages,
    },
    alternates: {
      canonical: `/${post.slug.replace(/^\/+/, "")}`,
    },
  };
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: new URL(post.img, siteConfig.url).toString(),
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: [
      {
        "@type": "Person",
        name: siteConfig.author,
      },
    ],
  };

  const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const readingTime = Math.max(1, Math.ceil(post.body.split(/\s+/).length / 200));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <article className="container">
        <div className="relative isolate mb-8 h-[50vh] w-full overflow-hidden rounded-lg sm:h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0 z-10 bg-overlay/60" />
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-20 text-overlay-foreground">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              {post.title}
            </h1>
            <p className="hidden sm:block text-base sm:text-lg opacity-80">{post.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="mt-4 mb-4 flex space-x-4">
                  <Image
                    src="/images/teguh.jpg"
                    alt="author"
                    width={45}
                    height={45}
                    className="size-[45px] shrink-0 rounded-full bg-surface object-cover"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium text-lg">{siteConfig.author}</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.job}</p>
                    <Meta date={post.date} readingTime={readingTime} className="mt-1" />
                  </div>
                </div>
                <h2 className="text-lg font-semibold mb-2">Topik</h2>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
                </div>
              </div>
              <ShareButton
                text={`Baca postingan '${post.title}' oleh @teguhbagasm di Thieverse:`}
                url={`${siteConfig.url}/${post.slug}`}
              />
              <div>
                <PostTableOfContent toc={post.toc} />
              </div>
            </div>
          </div>
          <div className="col-span-12 min-w-0 lg:col-span-8 mt-4 mb-5">
            <Prose>
              <MDXContent code={post.body} />
              <hr className="mt-10" />
              <div className="flex justify-center">
                <ButtonLink href="/blog" variant="link">
                  <ChevronLeft className="mr-2 size-4" />
                  <span>Lihat semua artikel</span>
                </ButtonLink>
              </div>
            </Prose>
            <PostComments />
          </div>
        </div>
      </article>
    </>
  );
}
