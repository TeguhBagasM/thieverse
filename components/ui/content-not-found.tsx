import { Frown } from "lucide-react";
import React from "react";

// Ganti dengan path gambar yang sesuai
const NOT_FOUND_IMAGE_URL = "/images/not-found.png";

const ContentNotFound = ({ text }: { text: string }) => {
  return (
    <li role="listitem" className="h-auto w-full flex items-center justify-center">
      <div className="space-y-3 flex flex-col items-center">
        <img src={NOT_FOUND_IMAGE_URL} alt="Not Found" className="h-60 w-60 object-cover" />
        <h2 className="text-xl flex items-center text-blue-500">
          {text} <Frown className="ml-1" />
        </h2>
      </div>
    </li>
  );
};

export default ContentNotFound;
