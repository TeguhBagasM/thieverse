import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./mdx/callout";
import { Tab, Tabs } from "./mdx/tabs";
import { Disclosure } from "./mdx/disclosure";
import { CopyCodeBlock } from "./mdx/code";
import { Command } from "lucide-react";
import React from "react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

function YouTube({
  id,
  title,
  width = "100%",
  height = "400px",
}: {
  id: string;
  title: string;
  width?: string;
  height?: string;
}) {
  const src = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="youtube-container my-5">
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

const components = {
  Image,
  Callout,
  Tab,
  Tabs,
  YouTube,
  Disclosure,
  pre: CopyCodeBlock,
  Command,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div
      className="
      prose-blockquote:bg-blue-500 
      prose-blockquote:border-blue-500 
      prose-blockquote:bg-blue-600/20
      prose-blockquote:p-2
      prose-blockquote:px-6
      prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg
      prose-li:marker:text-blue-600
    "
    >
      <Component components={components} />
    </div>
  );
}
