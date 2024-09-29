"use client";
import React from "react";
import Giscus from "@giscus/react";
import { env } from "@/constants/env";

const PostComments = () => {
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
        theme="dark"
        lang="id"
      />
    </div>
  );
};

export default PostComments;
