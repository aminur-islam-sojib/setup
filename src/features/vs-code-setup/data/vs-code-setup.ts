import {
  CheckCircle2,
  Code2,
  Download,
  Folder,
  GitBranch,
  KeyRound,
  LayoutGrid,
  Monitor,
  PlayCircle,
  Puzzle,
  Settings,
  Terminal,
  TriangleAlert,
  Variable,
} from "lucide-react";

import type { ExplorerNode, GuideFeatureMeta } from "../../guides/types";

export const GUIDE_SECTIONS: ExplorerNode[] = [
  {
    id: "overview",
    label: "Overview",
    kind: "section",
    icon: PlayCircle,
    href: "#overview",
  },
  {
    id: "step-1",
    label: "1. Download VS Code",
    kind: "section",
    icon: Download,
    href: "#step-1",
  },
  {
    id: "step-2",
    label: "2. Extensions",
    kind: "section",
    icon: Puzzle,
    href: "#step-2",
  },
  {
    id: "step-3",
    label: "3. Terminal",
    kind: "section",
    icon: Terminal,
    href: "#step-3",
  },
  {
    id: "step-4",
    label: "4. Install Git",
    kind: "section",
    icon: GitBranch,
    href: "#step-4",
  },
  {
    id: "step-5",
    label: "5. VS Code Settings",
    kind: "section",
    icon: Settings,
    href: "#step-5",
  },
  {
    id: "step-6",
    label: "6. Compiler Setup",
    kind: "section",
    icon: Code2,
    href: "#step-6",
  },
  {
    id: "step-7",
    label: "7. PATH",
    kind: "section",
    icon: Variable,
    href: "#step-7",
  },
  {
    id: "step-8",
    label: "8. First Project",
    kind: "section",
    icon: Folder,
    href: "#step-8",
  },
  {
    id: "step-9",
    label: "9. Debugging",
    kind: "section",
    icon: Monitor,
    href: "#step-9",
  },
  {
    id: "step-10",
    label: "10. Folder Structure",
    kind: "section",
    icon: LayoutGrid,
    href: "#step-10",
  },
  {
    id: "step-11",
    label: "11. Shortcuts",
    kind: "section",
    icon: KeyRound,
    href: "#step-11",
  },
  {
    id: "step-12",
    label: "12. Useful Settings",
    kind: "section",
    icon: Settings,
    href: "#step-12",
  },
  {
    id: "step-13",
    label: "13. Troubleshooting",
    kind: "section",
    icon: TriangleAlert,
    href: "#step-13",
  },
  {
    id: "checklist",
    label: "Final Verification",
    kind: "section",
    icon: CheckCircle2,
    href: "#checklist",
  },
];

export const EXPLORER_TREE: ExplorerNode[] = [
  {
    id: "vs-code-setup",
    label: "VS-CODE-SETUP",
    kind: "folder",
    icon: Folder,
    defaultOpen: true,
    children: GUIDE_SECTIONS,
  },
];

export const GUIDE_META: GuideFeatureMeta = {
  title: "VS Code Setup Guide - Complete Developer Environment Setup",
  description:
    "A complete walkthrough to install and configure Visual Studio Code for development on Windows, Linux, and macOS.",
  ogTitle: "VS Code Setup Guide - Complete Developer Environment Setup",
  ogDescription:
    "Install VS Code, set up recommended extensions, configure Git and compilers, and prepare a clean development workflow.",
  ogUrl: "/",
  iconSrc: "/vscode.png",
  iconAlt: "Visual Studio Code",
};
