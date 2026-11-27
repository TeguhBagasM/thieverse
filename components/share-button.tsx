"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsTwitterX, BsClipboard, BsClipboardCheck } from "react-icons/bs";
import { Icons } from "./icons";
import { FaWhatsapp } from "react-icons/fa";

interface ShareButtonProps {
  text: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ text, url }) => {
  const [copied, setCopied] = useState(false);

  const twitterShareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    text + " " + url
  )}`;

  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    url
  )}&title=${encodeURIComponent(text)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="ml-auto flex flex-col space-y-2">
      <p className="text-sm text-muted-foreground">Share this post</p>
      <div className="flex space-x-4">
        <Link
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
        >
          <BsTwitterX className="size-5 text-muted-foreground transition-colors duration-150 hover:text-primary" />
        </Link>
        <Link
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-1"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="size-5 text-muted-foreground transition-colors duration-150 hover:text-primary" />
        </Link>
        <Link
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-1"
          aria-label="Share on LinkedIn"
        >
          <Icons.linkedin className="size-5 text-muted-foreground transition-colors duration-150 hover:text-primary" />
        </Link>
        <button
          onClick={handleCopyLink}
          className="transition-colors duration-150 hover:text-primary"
          aria-label="Copy link"
        >
          {copied ? (
            <BsClipboardCheck className="size-5 text-primary" />
          ) : (
            <BsClipboard className="size-5 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareButton;
