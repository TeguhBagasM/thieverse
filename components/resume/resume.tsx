"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set worker URL
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
}

export default function ResumePage() {
  const [width, setWidth] = useState<number>(1200);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pdfUrl = "/CV-TeguhBagasMardiansyah.pdf";

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setError(null);
    setNumPages(numPages);
  }

  function onDocumentLoadError(err: Error): void {
    console.error("PDF Load Error:", err);
    setError("Failed to load PDF. Please try again later.");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <Button asChild className="gap-2">
          <a href={pdfUrl} download="CV-TeguhBagasMardiansyah.pdf">
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>

      <div className="flex flex-col items-center mb-8">
        {error ? (
          <div className="text-red-500 mb-4">{error}</div>
        ) : (
          <div className="w-full max-w-4xl">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="flex justify-center"
              loading={<div className="text-center py-4">Loading PDF...</div>}
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.7 : 0.6}
                className="shadow-lg"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button asChild className="gap-2">
          <a href={pdfUrl} download="CV-TeguhBagasMardiansyah.pdf">
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
}
