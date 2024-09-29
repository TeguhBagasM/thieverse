"use client";
import React from "react";
import Giscus from "@giscus/react";

const PostComments = () => {
  return (
    <div className="w-full mt-4">
      <Giscus
        id="comments"
        repo="TeguhBagasM/thieverse"
        repoId="R_kgDOM1VljA"
        category="General"
        categoryId="DIC_kwDOM1VljM4CivXL"
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
