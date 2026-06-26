import type { LucideIcon } from "lucide-react";

export type ExplorerNode = {
  id: string;
  label: string;
  kind: "folder" | "file" | "section";
  icon?: LucideIcon;
  href?: string;
  defaultOpen?: boolean;
  children?: ExplorerNode[];
};

export type GuideFeatureMeta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  iconSrc: string;
  iconAlt: string;
};
