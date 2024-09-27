// File: app/blog/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import BlogPageClient from "./blog-client";

export const metadata: Metadata = {
  title: "Thieverse",
  description: "My blog made by Thiever",
};

export default function BlogPage({ searchParams }: { searchParams: { query?: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageClient searchParams={searchParams} />
    </Suspense>
  );
}
