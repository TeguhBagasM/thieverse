import Image from "next/image";
import { Frown } from "lucide-react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const NOT_FOUND_IMAGE_URL = "/images/not-found.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <Image
        src={NOT_FOUND_IMAGE_URL}
        alt="Not Found"
        width={240}
        height={240}
        className="h-60 w-60 object-cover"
      />
      <h1 className="text-xl flex items-center text-primary mt-4">
        Oops! Halaman tidak ditemukan. <Frown className="ml-2" />
      </h1>
      <Link
        href="/"
        className="mt-6 flex items-center text-primary font-semibold hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Kembali ke Beranda
      </Link>
    </div>
  );
}
