import React from "react";

const DrawOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group relative inline-flex items-center px-4 py-2 font-medium text-primary transition-colors duration-200">
      <span className="flex items-center">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-150 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-150 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-150 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-150 group-hover:h-full" />
    </div>
  );
};

export default DrawOutline;
