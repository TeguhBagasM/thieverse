import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
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
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
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
  TypeScript: { Icon: SiTypescript, className: "text-blue-400" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "text-blue-500" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-cyan-300" },
  Bootstrap: { Icon: BsFillBootstrapFill, className: "text-blue-500" },
  "Material UI": { Icon: SiMui, className: "text-sky-400" },
  "Shadcn UI": { Icon: SiShadcnui, className: "text-sky-400" },
  "Daisy UI": { Icon: SiDaisyui, className: "text-sky-400" },
  "Styled Components": { Icon: SiStyledcomponents, className: "text-pink-500" },
  CSS: { Icon: SiCss3, className: "text-blue-300" },
  "Vue.js": { Icon: SiVuedotjs, className: "text-green-500" },
};

export const BACKEND_STACKS = {
  postgreSql: { Icon: BiLogoPostgresql, className: "text-blue-500" },
  MySql: { Icon: SiMysql, className: "text-blue-500" },
  Prisma: { Icon: SiPrisma, className: "text-emerald-500" },
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Express: { Icon: SiExpress, className: "" },
  PHP: { Icon: SiPhp, className: "text-blue-500" },
  Laravel: { Icon: SiLaravel, className: "text-red-500" },
  Java: { Icon: FaJava, className: "text-red-500" },
  GIT: { Icon: SiGit, className: "text-red-500" },
};
