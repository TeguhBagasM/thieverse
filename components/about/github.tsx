"use client";

import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

interface GithubProps {
  username: string;
}

const Github: React.FC<GithubProps> = ({ username }) => {
  const [blockSize, setBlockSize] = useState(15);
  const [blockMargin, setBlockMargin] = useState(5);
  const [fontSize, setFontSize] = useState(16);

  const theme = {
    light: ["hsl(0, 0%, 92%)", "#0000FF"],
    dark: ["#161b22", "#0000FF"],
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setBlockSize(8);
        setBlockMargin(2);
        setFontSize(12);
      } else if (width < 768) {
        setBlockSize(10);
        setBlockMargin(3);
        setFontSize(14);
      } else {
        setBlockSize(15);
        setBlockMargin(5);
        setFontSize(16);
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center py-8 w-full overflow-x-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-6">
        Aktivitas <span className="text-blue-600">Coding</span> Saya
      </h1>
      <div className="min-w-[300px] flex justify-center">
        <GitHubCalendar
          username={username}
          blockSize={blockSize}
          blockMargin={blockMargin}
          fontSize={fontSize}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Github;
