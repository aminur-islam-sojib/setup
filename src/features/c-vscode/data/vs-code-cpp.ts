import {
  Download,
  Variable,
  CheckCircle2,
  Settings,
  Puzzle,
  PlayCircle,
  Trophy,
  Terminal,
  Folder,
} from "lucide-react";

import type { GuideFeatureMeta, ExplorerNode } from "../../guides/types";

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
    id: "vs-code-cpp-setup",
    label: "VS-CODE-CPP-SETUP",
    kind: "folder",
    icon: Folder,
    defaultOpen: true,
    children: GUIDE_SECTIONS,
  },
];

export const GUIDE_META: GuideFeatureMeta = {
  title: "VS Code Setup for C/C++ — Complete Guide",
  description:
    "Step-by-step guide to set up Visual Studio Code for C and C++ development on Windows and Linux: MinGW, environment variables, extensions, and competitive programming tools.",
  ogTitle: "VS Code Setup for C/C++ — Complete Guide",
  ogDescription:
    "MinGW install, PATH setup, settings.json, must-have extensions, and sample programs to verify your C/C++ environment in VS Code.",
  ogUrl: "/",
  iconSrc: "/vscode.png",
  iconAlt: "VS Code",
};

export const SETTINGS_WINDOWS = `{
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.executorMap": {
    "c":   "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
  },
  "terminal.integrated.defaultProfile.windows": "Command Prompt"
}`;

export const SETTINGS_LINUX = `{
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.executorMap": {
    "c":   "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
  },
  "terminal.integrated.defaultProfile.linux": "bash"
}`;

export const CODE_SAMPLES = {
  helloC: `// code - 01
#include <stdio.h>

int main()
{
    printf("Hello World");
    return 0;
}`,
  ioC: `// code - 02
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);
    printf("a = %d", a);
    return 0;
}`,
};

export function collectDefaultOpenIds(nodes: ExplorerNode[]): string[] {
  return nodes.flatMap((node) => [
    ...(node.defaultOpen ? [node.id] : []),
    ...(node.children ? collectDefaultOpenIds(node.children) : []),
  ]);
}

export function findNodePath(
  nodes: ExplorerNode[],
  targetId: string,
): ExplorerNode[] | null {
  for (const node of nodes) {
    if (node.id === targetId) {
      return [node];
    }

    if (!node.children) {
      continue;
    }

    const childPath = findNodePath(node.children, targetId);
    if (childPath) {
      return [node, ...childPath];
    }
  }

  return null;
}
