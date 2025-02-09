import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ResumePage from "@/components/resume/resume";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
  description: "My Professional Resume",
};

export default function Page() {
  return <ResumePage />;
}
