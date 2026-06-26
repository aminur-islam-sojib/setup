import {
  CheckCircle2,
  Download,
  Folder,
  PlayCircle,
  Puzzle,
  Settings,
  Terminal,
  Trophy,
  Variable,
} from "lucide-react";
import { ExplorerNode } from "../../guides/types";

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
    label: "1. Download Software",
    kind: "section",
    icon: Download,
    href: "#step-1",
  },
  {
    id: "step-2",
    label: "2. Environment Path",
    kind: "section",
    icon: Variable,
    href: "#step-2",
  },
  {
    id: "step-3",
    label: "3. Verify Install",
    kind: "section",
    icon: CheckCircle2,
    href: "#step-3",
  },
  {
    id: "step-4",
    label: "4. settings.json",
    kind: "section",
    icon: Settings,
    href: "#step-4",
  },
  {
    id: "step-5",
    label: "5. Extensions",
    kind: "section",
    icon: Puzzle,
    href: "#step-5",
  },
  {
    id: "step-6",
    label: "6. Test Code",
    kind: "section",
    icon: Terminal,
    href: "#step-6",
  },
  {
    id: "competitive",
    label: "Competitive Programming",
    kind: "section",
    icon: Trophy,
    href: "#competitive",
  },
];

export const EXPLORER_TREE: ExplorerNode[] = [
  {
    id: "python-setup",
    label: "PYTHON-SETUP",
    kind: "folder",
    icon: Folder,
    defaultOpen: false,
    children: GUIDE_SECTIONS,
  },
];
