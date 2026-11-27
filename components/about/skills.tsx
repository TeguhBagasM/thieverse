"use client";

import Marquee from "react-fast-marquee";
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from "@/constants/stack";
import { FaStar } from "react-icons/fa";

const Skills = () => {
  return (
    <section aria-label="skills" className="my-4 space-y-8 bg-background">
      <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
      <div className="space-y-6 w-full">
        <Marquee autoFill pauseOnHover speed={20}>
          <SkillsList stacks={FRONTEND_STACKS} />
        </Marquee>

        <Marquee autoFill pauseOnHover direction="right" speed={20}>
          <SkillsList stacks={BACKEND_STACKS} />
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;

const SkillsList = ({ stacks }: { stacks: stacksProps }) => {
  return (
    <ul className="flex items-center flex-wrap gap-3" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const { Icon, className, isMastered } = stacks[stack];
        return (
          <li
            role="listitem"
            key={index}
            className="relative flex w-max items-center gap-2 rounded border border-line bg-surface px-4 py-2 text-[15px] text-foreground"
          >
            <Icon className={className} aria-label={stack} />
            <span className="whitespace-nowrap">{stack}</span>

            {isMastered && (
              <FaStar
                className="absolute top-0 right-0 translate-x-1/2 translate-y-[-15%] text-focus text-sm"
                aria-label="Mastered"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
