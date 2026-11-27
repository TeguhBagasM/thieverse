"use client";
import React from "react";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { env } from "@/constants/env";

const PostComments = () => {
  const { resolvedTheme } = useTheme();

  if (!env.NEXT_PUBLIC_GISCUS_REPO_ID || !env.NEXT_PUBLIC_GISCUS_CATEGORY_ID) {
    return null;
  }

  return (
    <div className="w-full mt-4">
      <Giscus
        id="comments"
        repo="TeguhBagasM/thieverse"
        repoId={env.NEXT_PUBLIC_GISCUS_REPO_ID}
        category="General"
        categoryId={env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        term="Welcome to Thieverse"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        lang="id"
      />
    </div>
  );
};

export default PostComments;
