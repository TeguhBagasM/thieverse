import { FaJava, FaVuejs } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiBootstrap,
  SiCss3,
  SiDaisyui,
  SiExpress,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type stacksProps = Record<
  string,
  {
    Icon: IconType;
    className: string;
    isMastered: Boolean;
  }
>;

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400", isMastered: true },
  TypeScript: { Icon: SiTypescript, className: "text-blue-600", isMastered: false },
  "React.js": { Icon: SiReact, className: "text-blue-500", isMastered: true },
  "Next.js": { Icon: SiNextdotjs, className: "text-black dark:text-slate-100", isMastered: false },
  "Vite.js": { Icon: SiVite, className: "text-blue-500", isMastered: true },
  "Vue.js": { Icon: FaVuejs, className: "text-green-600", isMastered: false },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-blue-400", isMastered: true },
  Bootstrap: { Icon: SiBootstrap, className: "text-blue-600", isMastered: true },
  "Shadcn UI": { Icon: SiShadcnui, className: "text-zinc-900 dark:text-zinc-100", isMastered: false },
  "Daisy UI": { Icon: SiDaisyui, className: "text-blue-500", isMastered: false },
  "Material UI": { Icon: SiMui, className: "text-blue-400", isMastered: false },
  CSS: { Icon: SiCss3, className: "text-blue-500", isMastered: true },
};

export const BACKEND_STACKS = {
  PostgreSQL: { Icon: BiLogoPostgresql, className: "text-blue-400", isMastered: false },
  MySQL: { Icon: SiMysql, className: "text-blue-500", isMastered: true },
  Prisma: { Icon: SiPrisma, className: "text-slate-900 dark:text-slate-100", isMastered: false },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600", isMastered: true },
  Express: { Icon: SiExpress, className: "dark:text-gray-200 text-gray-800", isMastered: false },
  PHP: { Icon: SiPhp, className: "text-blue-400", isMastered: true },
  Laravel: { Icon: SiLaravel, className: "text-red-500", isMastered: true },
  Java: { Icon: FaJava, className: "text-red-500", isMastered: false },
  GIT: { Icon: SiGit, className: "text-red-500", isMastered: true },
  Postman: { Icon: SiPostman, className: "text-red-500", isMastered: false },
};
