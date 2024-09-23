import React from "react";

interface InsightRollProps {
  insights: string[];
}

const InsightRoll: React.FC<InsightRollProps> = ({ insights }) => {
  return (
    <div className="w-full bg-violet-500 dark:bg-blue-500 text-white whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-2 sm:py-2 flex items-center justify-center capitalize font-normal tracking-wider text-sm sm:text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
