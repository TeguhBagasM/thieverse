import { Suspense } from "react";
import { Metadata } from "next";
import BlogPageClient from "./blog-client";
import { Loader2 } from "lucide-react";
import { getAllPostSummaries } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Catatan dan tutorial seputar Laravel, web development, dan pengalaman belajar.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
          <p className="mt-4 text-lg font-semibold text-muted-foreground">Memuat...</p>
        </div>
      }
    >
      <BlogPageClient posts={getAllPostSummaries()} />
    </Suspense>
  );
}
