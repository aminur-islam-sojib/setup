import {
  BookOpen,
  ClipboardCheck,
  Download,
  FileCode2,
  Folder,
  Monitor,
  Package,
  PlayCircle,
  Puzzle,
  RefreshCcw,
  Settings,
  Terminal,
  TriangleAlert,
  Variable,
  Wrench,
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
    label: "1. Download Python",
    kind: "section",
    icon: Download,
    href: "#step-1",
  },
  {
    id: "step-2",
    label: "2. Install VS Code",
    kind: "section",
    icon: Monitor,
    href: "#step-2",
  },
  {
    id: "step-3",
    label: "3. Python Extension",
    kind: "section",
    icon: Puzzle,
    href: "#step-3",
  },
  {
    id: "step-4",
    label: "4. Python Tools",
    kind: "section",
    icon: Wrench,
    href: "#step-4",
  },
  {
    id: "step-5",
    label: "5. Select Interpreter",
    kind: "section",
    icon: Variable,
    href: "#step-5",
  },
  {
    id: "step-6",
    label: "6. Virtual Environment",
    kind: "section",
    icon: Folder,
    href: "#step-6",
  },
  {
    id: "step-7",
    label: "7. Upgrade pip",
    kind: "section",
    icon: RefreshCcw,
    href: "#step-7",
  },
  {
    id: "step-8",
    label: "8. Install Packages",
    kind: "section",
    icon: Package,
    href: "#step-8",
  },
  {
    id: "step-9",
    label: "9. First Project",
    kind: "section",
    icon: FileCode2,
    href: "#step-9",
  },
  {
    id: "step-10",
    label: "10. VS Code Settings",
    kind: "section",
    icon: Settings,
    href: "#step-10",
  },
  {
    id: "step-11",
    label: "11. Debugging",
    kind: "section",
    icon: Terminal,
    href: "#step-11",
  },
  {
    id: "step-12",
    label: "12. Common Tools",
    kind: "section",
    icon: BookOpen,
    href: "#step-12",
  },
  {
    id: "step-13",
    label: "13. Recommended Libraries",
    kind: "section",
    icon: FileCode2,
    href: "#step-13",
  },
  {
    id: "step-14",
    label: "14. Terminal Commands",
    kind: "section",
    icon: Terminal,
    href: "#step-14",
  },
  {
    id: "step-15",
    label: "15. Troubleshooting",
    kind: "section",
    icon: TriangleAlert,
    href: "#step-15",
  },
  {
    id: "checklist",
    label: "Final Verification Checklist",
    kind: "section",
    icon: ClipboardCheck,
    href: "#checklist",
  },
  {
    id: "next-steps",
    label: "Next Steps",
    kind: "section",
    icon: PlayCircle,
    href: "#next-steps",
  },
];

export const EXPLORER_TREE: ExplorerNode[] = [
  {
    id: "python-setup",
    label: "PYTHON-SETUP",
    kind: "folder",
    icon: Folder,
    defaultOpen: true,
    children: GUIDE_SECTIONS,
  },
];

export const GUIDE_META: GuideFeatureMeta = {
  title: "Python Setup Guide - Complete Development Environment Setup",
  description:
    "A complete walkthrough to install Python, configure VS Code, set up a virtual environment, and prepare a clean development workflow on Windows, Linux, and macOS.",
  ogTitle: "Python Setup Guide - Complete Development Environment Setup",
  ogDescription:
    "Install Python, configure VS Code, create a virtual environment, and verify your first project with a polished step-by-step guide.",
  ogUrl: "/",
  iconSrc: "/python-logo-only.png",
  iconAlt: "Python",
};
