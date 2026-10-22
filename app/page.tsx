import type { Metadata } from "next";

import { getLatestPosts } from "@/lib/posts";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeClient latestPosts={getLatestPosts(6)} />;
}
