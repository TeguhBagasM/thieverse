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
  }
>;

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400" },
  TypeScript: { Icon: SiTypescript, className: "text-blue-600" },
  "React.js": { Icon: SiReact, className: "text-blue-500" },
  "Next.js": { Icon: SiNextdotjs, className: "text-black dark:text-slate-100" },
  "Vite.js": { Icon: SiVite, className: "text-blue-500" },
  "Vue.js": { Icon: FaVuejs, className: "text-green-600" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-blue-400" },
  Bootstrap: { Icon: SiBootstrap, className: "text-blue-600" },
  "Shadcn UI": { Icon: SiShadcnui, className: "text-zinc-900 dark:text-zinc-100" },
  "Daisy UI": { Icon: SiDaisyui, className: "text-blue-500" },
  "Material UI": { Icon: SiMui, className: "text-blue-400" },
  "Styled Components": { Icon: SiStyledcomponents, className: "text-pink-500" },
  CSS: { Icon: SiCss3, className: "text-blue-500" },
};

export const BACKEND_STACKS = {
  PostgreSQL: { Icon: BiLogoPostgresql, className: "text-blue-400" },
  MySQL: { Icon: SiMysql, className: "text-blue-500" },
  Prisma: { Icon: SiPrisma, className: "text-slate-900 dark:text-slate-100" },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Express: { Icon: SiExpress, className: "dark:text-gray-200 text-gray-800" },
  PHP: { Icon: SiPhp, className: "text-blue-400" },
  Laravel: { Icon: SiLaravel, className: "text-red-500" },
  Java: { Icon: FaJava, className: "text-red-500" },
  GIT: { Icon: SiGit, className: "text-red-500" },
  Postman: { Icon: SiPostman, className: "text-red-500" },
};
