"use client";
import Link from "next/link";
import React, { useState } from "react";
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

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="ml-auto flex flex-col space-y-2">
      <p className="text-sm text-gray-600 dark:text-gray-300">Share this post</p>
      <div className="flex space-x-4">
        <Link href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <BsTwitterX className="size-5 text-slate-600 dark:text-slate-400 transition-transform transform hover:scale-110" />
        </Link>
        <Link href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="pl-1">
          <FaWhatsapp className="size-5 text-slate-600 dark:text-slate-400 transition-transform transform hover:scale-110" />
        </Link>
        <Link href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="pl-1">
          <Icons.linkedin className="size-5 text-slate-600 dark:text-slate-400 transition-transform transform hover:scale-110" />
        </Link>
        <button
          onClick={handleCopyLink}
          className="transition-transform transform hover:scale-110"
          aria-label="Copy link"
        >
          {copied ? (
            <BsClipboardCheck className="size-4 text-green-600 dark:text-green-400" />
          ) : (
            <BsClipboard className="size-4 text-slate-600 dark:text-slate-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareButton;
