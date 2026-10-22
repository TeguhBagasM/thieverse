"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface TabProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

const Tab: React.FC<TabProps> = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.id);

  return (
    <>
      <div className="mt-[2em] rounded-t-md bg-code text-sm font-medium text-code-foreground">
        {children.map((child) => (
          <Badge
            key={child.props.id}
            variant={activeTab === child.props.id ? "default" : "outline"}
            className={`my-2 ml-2 rounded border-0 hover:cursor-pointer ${
              activeTab === child.props.id
                ? "bg-primary text-primary-foreground hover:bg-primary"
                : "text-code-foreground/70 transition-colors duration-150 hover:text-code-foreground"
            }`}
            onClick={() => setActiveTab(child.props.id)}
          >
            {child.props.title}
          </Badge>
        ))}
      </div>
      <div className="my-0 rounded-b-md border border-code bg-code text-code-foreground">
        {children.map((child) => {
          if (child.props.id === activeTab) {
            return (
              <div key={child.props.id} className="-mb-[24px] -mt-[24px]">
                {child}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export { Tabs, Tab };
