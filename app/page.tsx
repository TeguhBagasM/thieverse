import { getLatestPosts } from "@/lib/posts";
import HomeClient from "./home-client";

export default function Home() {
  return <HomeClient latestPosts={getLatestPosts(6)} />;
}
