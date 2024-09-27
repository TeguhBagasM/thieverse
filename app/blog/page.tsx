// File: app/blog/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import BlogPageClient from "./blog-client";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thieverse",
  description: "My blog made by Thiever",
};

export default function BlogPage({ searchParams }: { searchParams: { query?: string } }) {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
          <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">Loading...</p>
        </div>
      }
    >
      <BlogPageClient searchParams={searchParams} />
    </Suspense>
  );
}
