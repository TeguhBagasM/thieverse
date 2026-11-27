"use client";
import { Post } from "#site/content";
import { ClassValue } from "clsx";
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const TOC_STYLES: ClassValue =
  "rounded-sm text-muted-foreground hover:text-primary hover:underline";

const PostTableOfContent = ({ toc }: { toc: Post["toc"] }) => {
  const [tocValue, setTocValue] = useState("");

  const renderTocItems = (items: Post["toc"]) => {
    return (
      <ol role="list" className="space-y-2 list-disc mt-2 ps-4">
        {items.map((item) => (
          <li key={item.url} className="text-base" role="listitem">
            <a href={item.url} className={TOC_STYLES} aria-label={`Go to ${item.title}`}>
              {item.title}
            </a>
            {item.items.length > 0 && renderTocItems(item.items)}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <Accordion type="single" collapsible className="w-full" onValueChange={setTocValue}>
      <AccordionItem value="post-toc">
        <AccordionTrigger className="rounded-sm bg-surface px-3 py-3 text-sm font-semibold">
          <p>
            Table of Contents{" "}
            <span className="text-muted-foreground">(Click to {tocValue ? "Close" : "Open"})</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-2 max-h-64 overflow-y-auto">
          <ol role="list" className="space-y-2 list-decimal pl-4">
            {toc.map((tocItem) => (
              <li key={tocItem.url} className="text-base" role="listitem">
                <a href={tocItem.url} className={TOC_STYLES} aria-label={`Go to ${tocItem.title}`}>
                  {tocItem.title}
                </a>
                {tocItem.items.length > 0 && renderTocItems(tocItem.items)}
              </li>
            ))}
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PostTableOfContent;
