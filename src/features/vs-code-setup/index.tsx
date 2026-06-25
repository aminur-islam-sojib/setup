"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ChevronDown,
  Download,
  FileText,
  Folder,
  Menu,
  Terminal,
  Settings,
  Puzzle,
  PlayCircle,
  Trophy,
  Variable,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  ComputerIcon,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/sonner";
import CodeBlock from "@/components/Shared/CodeBlock";
import StepWrap from "@/components/Shared/StepWrap";
import Kbd from "@/components/Shared/Kbd";
import StepHeading from "@/components/Shared/StepHeading";
import Footer from "@/components/Shared/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import Chip from "@/components/Shared/Chip";

type ExplorerNode = {
  id: string;
  label: string;
  kind: "folder" | "file" | "section";
  icon?: LucideIcon;
  href?: string;
  defaultOpen?: boolean;
  children?: ExplorerNode[];
};

const GUIDE_SECTION_NODES: ExplorerNode[] = [
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

const EXPLORER_TREE: ExplorerNode[] = [
  {
    id: "vs-code-cpp-setup",
    label: "VS-CODE-CPP-SETUP",
    kind: "folder",
    icon: Folder,
    defaultOpen: true,
    children: [
      {
        id: "guide-md",
        label: "guide.md",
        kind: "file",
        icon: FileText,
        defaultOpen: true,
        href: "#overview",
        children: GUIDE_SECTION_NODES,
      },
    ],
  },
];

const DEFAULT_OPEN_IDS = collectDefaultOpenIds(EXPLORER_TREE);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VS Code Setup for C/C++ — Complete Guide" },
      {
        name: "description",
        content:
          "Step-by-step guide to set up Visual Studio Code for C and C++ development on Windows and Linux: MinGW, environment variables, extensions, and competitive programming tools.",
      },
      {
        property: "og:title",
        content: "VS Code Setup for C/C++ — Complete Guide",
      },
      {
        property: "og:description",
        content:
          "MinGW install, PATH setup, settings.json, must-have extensions, and sample programs to verify your C/C++ environment in VS Code.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [active, setActive] = useState<string>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIds, setOpenIds] = useState<string[]>(DEFAULT_OPEN_IDS);
  const isMobile = useIsMobile();
  const showMobileSidebar = isMobile && sidebarOpen;

  const activePath = findNodePath(EXPLORER_TREE, active) ?? [];

  useEffect(() => {
    if (!showMobileSidebar) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showMobileSidebar]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    GUIDE_SECTION_NODES.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function handleNavigate(id: string) {
    setActive(id);
    if (isMobile) {
      setSidebarOpen(false);
    }
  }

  function handleToggleNode(id: string) {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" />
      <header className="sticky top-0 z-50 flex h-12 items-center justify-between border-b border-border bg-[#323233] px-3 text-sm sm:px-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Button
            type="button"
            size="icon-sm"
            variant="ghost"
            className="shrink-0 text-vscode-text hover:bg-vscode-elevated hover:text-white lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open explorer"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <VSCodeIcon className="h-5 w-5 shrink-0" />
          <div className="min-w-0">
            <div className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-vscode-muted">
              Explorer
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-1 font-mono text-[11px] text-vscode-text sm:text-xs">
              {activePath.map((node, index) => (
                <span
                  key={node.id}
                  className={
                    index === activePath.length - 1
                      ? "text-white"
                      : "text-vscode-text"
                  }
                >
                  {index > 0 ? (
                    <span className="mx-1 text-vscode-muted">›</span>
                  ) : null}
                  {node.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-vscode-muted hover:text-vscode-text"
        >
          <ComputerIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Reference</span>
        </a>
      </header>

      <div className="flex min-h-[calc(100vh-3rem)]">
        <aside className="sticky top-12 hidden h-[calc(100vh-3rem)] w-80 shrink-0 overflow-y-auto border-r border-border bg-vscode-panel lg:block">
          <ExplorerPanel
            activeId={active}
            openIds={openIds}
            onNavigate={handleNavigate}
            onToggleNode={handleToggleNode}
          />
        </aside>

        <main className="min-w-0 flex-1">
          <article className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-16">
            <Hero />
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Step6 />
            <Competitive />
            <Footer />
          </article>
        </main>
      </div>

      {showMobileSidebar ? (
        <div className="fixed inset-x-0 bottom-0 top-12 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close explorer"
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(86vw,19rem)] flex-col border-r border-border bg-vscode-panel shadow-2xl">
            <div className="flex items-center justify-between border-b border-vscode-border px-4 py-3">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-vscode-muted">
                  Explorer
                </div>
                <div className="font-mono text-sm text-vscode-text">
                  VS-CODE-CPP-SETUP
                </div>
              </div>
              <Button
                type="button"
                size="icon-sm"
                variant="ghost"
                className="text-vscode-text hover:bg-vscode-elevated hover:text-white"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close explorer"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ExplorerPanel
              activeId={active}
              openIds={openIds}
              onNavigate={handleNavigate}
              onToggleNode={handleToggleNode}
            />
          </aside>
        </div>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="overview" className="scroll-mt-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs font-mono text-vscode-teal">
        <span className="h-1.5 w-1.5 rounded-full bg-vscode-teal" />
        guide.md · updated 2026
      </div>
      <div className="flex items-start gap-5">
        <VSCodeIcon className="mt-1 h-14 w-14 shrink-0" />
        <div>
          <h1 className="font-mono text-4xl font-bold leading-tight text-white sm:text-5xl">
            VS Code Setup
            <br />
            <span className="text-vscode-blue">for C / C++</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-vscode-text">
            A complete, no-fluff walkthrough to configure Visual Studio Code as
            a full C/C++ development environment — compiler, PATH, extensions,
            and ready-to-run sample programs.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          asChild
          className="bg-vscode-blue text-white hover:bg-vscode-blue/90"
        >
          <a href="#step-1">
            <Download className="mr-2 h-4 w-4" /> Get Started
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-vscode-border bg-transparent text-vscode-text hover:bg-vscode-panel hover:text-white"
        >
          <a href="#step-4">
            <Settings className="mr-2 h-4 w-4" /> Jump to settings.json
          </a>
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 border-t border-vscode-border pt-8">
        <Stat k="6" v="Setup steps" />
        <Stat k="4" v="Extensions" />
        <Stat k="2" v="OS supported" />
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-2xl font-bold text-vscode-teal">{k}</div>
      <div className="text-xs uppercase tracking-wider text-vscode-muted">
        {v}
      </div>
    </div>
  );
}

function Step1() {
  const tools = [
    {
      name: "VS Code",
      desc: "The editor itself. Download the stable build for your OS.",
      links: [
        {
          label: "code.visualstudio.com/download",
          href: "https://code.visualstudio.com/download",
        },
      ],
    },
    {
      name: "MinGW Compiler",
      desc: "Provides gcc / g++ on Windows so VS Code can compile C/C++.",
      links: [
        { label: "Google Drive (mirror 1)", href: "https://drive.google.com" },
        { label: "Google Drive (mirror 2)", href: "https://drive.google.com" },
      ],
    },
    {
      name: "Git Bash",
      desc: "A Unix-style shell that pairs nicely with VS Code's terminal.",
      links: [
        {
          label: "git-scm.com/downloads",
          href: "https://git-scm.com/downloads",
        },
      ],
    },
  ];
  return (
    <StepWrap id="step-1">
      <StepHeading
        n={1}
        title="Download required software"
        desc="Install the following tools to set up your environment."
      />
      <div className="grid gap-3 sm:grid-cols-3">
        {tools.map((t) => (
          <div
            key={t.name}
            className="rounded-md border border-vscode-border bg-vscode-panel p-4 transition-colors hover:border-vscode-blue"
          >
            <div className="font-mono text-sm font-semibold text-vscode-teal">
              {t.name}
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-vscode-text">
              {t.desc}
            </p>
            <div className="mt-3 space-y-1">
              {t.links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 break-all font-mono text-[11px] text-vscode-blue hover:underline"
                >
                  <ExternalLink className="h-3 w-3 shrink-0" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StepWrap>
  );
}

function Step2() {
  const steps: ReactNode[] = [
    <>
      Move the extracted MinGW folder to <Chip>C:\</Chip>.
    </>,
    <>
      Press <Kbd>Win</Kbd> + <Kbd>S</Kbd>.
    </>,
    <>
      Search for <Chip>Environment Variables</Chip>.
    </>,
    <>
      Open{" "}
      <strong className="text-white">
        Edit the system environment variables
      </strong>
      .
    </>,
    <>
      Click <strong className="text-white">Environment Variables</strong>.
    </>,
    <>
      Under <em>User variables</em>, select <Chip>Path → Edit</Chip>.
    </>,
    <>
      Click <strong className="text-white">New</strong>.
    </>,
    <>
      Paste the MinGW <Chip>bin</Chip> path.
    </>,
    <>
      Click <strong className="text-white">OK</strong> on all windows.
    </>,
  ];
  return (
    <StepWrap id="step-2">
      <StepHeading
        n={2}
        title="Add bin path to environment variables"
        desc="So Windows knows where to find gcc when you run it from any terminal."
      />
      <ol className="space-y-2.5">
        {steps.map((s, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-md border border-vscode-border bg-vscode-panel px-4 py-2.5 text-sm text-vscode-text"
          >
            <span className="font-mono text-xs text-vscode-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </StepWrap>
  );
}

function Step3() {
  return (
    <StepWrap id="step-3">
      <StepHeading
        n={3}
        title="Verify the installation"
        desc="Open a new Command Prompt and run:"
      />
      <CodeBlock label="cmd" code={`gcc --version`} />
      <p className="mt-6 mb-2 text-sm text-vscode-text">
        You should see something like:
      </p>
      <CodeBlock label="output" code={`gcc (MinGW-W64) 14.x.x`} />

      <div className="mt-6 rounded-md border-l-4 border-vscode-orange bg-vscode-panel p-4">
        <div className="mb-2 flex items-center gap-2 text-vscode-orange">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider">
            If you get
          </span>
        </div>
        <CodeBlock label="error" code={`'gcc' is not recognized...`} />
        <p className="mt-3 text-sm text-vscode-text">
          Then PATH is not set correctly — revisit Step 2 and confirm the{" "}
          <Chip>bin</Chip> path was added under <em>User variables</em>.
        </p>
      </div>
    </StepWrap>
  );
}

const SETTINGS_WIN = `{
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.executorMap": {
    "c":   "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
  },
  "terminal.integrated.defaultProfile.windows": "Command Prompt"
}`;

const SETTINGS_LINUX = `{
  "code-runner.runInTerminal": true,
  "code-runner.saveFileBeforeRun": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.executorMap": {
    "c":   "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
  },
  "terminal.integrated.defaultProfile.linux": "bash"
}`;

function Step4() {
  return (
    <StepWrap id="step-4">
      <StepHeading
        n={4}
        title={`Apply OS-specific settings.json`}
        desc="Configure VS Code by applying the appropriate settings file for your operating system."
      />
      <Tabs defaultValue="windows" className="w-full">
        <TabsList className="bg-vscode-panel">
          <TabsTrigger
            value="windows"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Windows
          </TabsTrigger>
          <TabsTrigger
            value="linux"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Linux
          </TabsTrigger>
        </TabsList>
        <TabsContent value="windows" className="mt-3">
          <CodeBlock label="settings.json" code={SETTINGS_WIN} />
        </TabsContent>
        <TabsContent value="linux" className="mt-3">
          <CodeBlock label="settings.json" code={SETTINGS_LINUX} />
        </TabsContent>
      </Tabs>
    </StepWrap>
  );
}

function Step5() {
  const exts = [
    { name: "C/C++", version: "v1.21.6", by: "Microsoft" },
    { name: "C/C++ Extension Pack", version: "v1", by: "Microsoft" },
    { name: "C/C++ Compile Run", version: "v1.0.5", by: "danielpinto8zz6" },
    { name: "Code Runner", version: "v0.12.2", by: "Jun Han" },
  ];
  return (
    <StepWrap id="step-5">
      <StepHeading
        n={5}
        title="Install VS Code extensions"
        desc="Search for and install the following required extensions within VS Code."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {exts.map((e) => (
          <div
            key={e.name}
            className="flex items-start gap-3 rounded-md border border-vscode-border bg-vscode-panel p-4 transition-colors hover:border-vscode-teal"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-vscode-elevated">
              <Puzzle className="h-5 w-5 text-vscode-teal" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-sm font-semibold text-white">
                {e.name}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-vscode-muted">
                {e.version} · by {e.by}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StepWrap>
  );
}

const CODE_1 = `// code - 01
#include <stdio.h>

int main()
{
    printf("Hello World");
    return 0;
}`;

const CODE_2 = `// code - 02
#include <stdio.h>

int main() {
    int a;
    scanf("%d", &a);
    printf("a = %d", a);
    return 0;
}`;

function Step6() {
  return (
    <StepWrap id="step-6">
      <StepHeading
        n={6}
        title="Test your setup with sample code"
        desc="Run these in your newly configured VS Code to verify everything works."
      />
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="bg-vscode-panel">
          <TabsTrigger
            value="basic"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Basic Output
          </TabsTrigger>
          <TabsTrigger
            value="io"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Standard I/O
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="mt-3">
          <p className="mb-2 text-sm text-vscode-text">
            Paste and run — you should see <Chip>Hello World</Chip>.
          </p>
          <CodeBlock label="hello.c" code={CODE_1} />
        </TabsContent>
        <TabsContent value="io" className="mt-3">
          <p className="mb-2 text-sm text-vscode-text">
            Paste, run, type an integer, then check the printed result.
          </p>
          <CodeBlock label="io.c" code={CODE_2} />
        </TabsContent>
      </Tabs>
    </StepWrap>
  );
}

function Competitive() {
  return (
    <StepWrap id="competitive">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-vscode-teal font-mono text-sm font-bold text-vscode-bg">
          <Trophy className="h-4 w-4" />
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-vscode-muted">
          Bonus
        </span>
      </div>
      <h2 className="font-mono text-2xl font-bold text-white sm:text-3xl">
        For competitive programming
      </h2>
      <p className="mt-2 text-sm text-vscode-text">
        Compile, run, judge, and submit problems from Codeforces, CodeChef,
        TopCoder and more — all from inside VS Code.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href="https://github.com/jmerle/competitive-companion"
          target="_blank"
          rel="noreferrer"
          className="group rounded-md border border-vscode-border bg-vscode-panel p-5 transition-colors hover:border-vscode-teal"
        >
          <div className="font-mono text-xs uppercase tracking-wider text-vscode-muted">
            Browser Extension
          </div>
          <div className="mt-1 flex items-center justify-between font-mono text-base font-semibold text-white">
            Competitive Companion
            <ExternalLink className="h-4 w-4 text-vscode-blue group-hover:text-vscode-teal" />
          </div>
          <p className="mt-2 text-xs text-vscode-text">
            Parses problem statements from judging sites and sends them directly
            into your editor.
          </p>
        </a>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper"
          target="_blank"
          rel="noreferrer"
          className="group rounded-md border border-vscode-border bg-vscode-panel p-5 transition-colors hover:border-vscode-teal"
        >
          <div className="font-mono text-xs uppercase tracking-wider text-vscode-muted">
            VS Code Extension
          </div>
          <div className="mt-1 flex items-center justify-between font-mono text-base font-semibold text-white">
            CP Helper (cph)
            <ExternalLink className="h-4 w-4 text-vscode-blue group-hover:text-vscode-teal" />
          </div>
          <p className="mt-2 text-xs text-vscode-text">
            Auto-downloads testcases, compiles, runs against samples, and
            submits — one click away.
          </p>
        </a>
      </div>
    </StepWrap>
  );
}

function VSCodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        fill="#0e639c"
        d="M70 8 35 42 18 28 8 34v32l10 6 17-14 35 34 22-10V18zM70 32v36L42 50z"
      />
    </svg>
  );
}

function collectDefaultOpenIds(nodes: ExplorerNode[]): string[] {
  return nodes.flatMap((node) => [
    ...(node.defaultOpen ? [node.id] : []),
    ...(node.children ? collectDefaultOpenIds(node.children) : []),
  ]);
}

function findNodePath(
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

function ExplorerPanel({
  activeId,
  openIds,
  onNavigate,
  onToggleNode,
}: {
  activeId: string;
  openIds: string[];
  onNavigate: (id: string) => void;
  onToggleNode: (id: string) => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-vscode-muted">
        Explorer
      </div>
      <nav className="px-2 pb-8">
        {EXPLORER_TREE.map((node) => (
          <ExplorerTreeNode
            key={node.id}
            node={node}
            depth={0}
            activeId={activeId}
            openIds={openIds}
            onNavigate={onNavigate}
            onToggleNode={onToggleNode}
          />
        ))}
      </nav>
    </div>
  );
}

function ExplorerTreeNode({
  node,
  depth,
  activeId,
  openIds,
  onNavigate,
  onToggleNode,
}: {
  node: ExplorerNode;
  depth: number;
  activeId: string;
  openIds: string[];
  onNavigate: (id: string) => void;
  onToggleNode: (id: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isOpen = openIds.includes(node.id);
  const isActive = activeId === node.id;
  const Icon = node.icon ?? (node.kind === "folder" ? Folder : FileText);

  return (
    <div>
      <div
        className={`group flex items-center gap-1 rounded-sm px-2 py-1 text-sm transition-colors ${
          isActive
            ? "bg-vscode-accent text-vscode-accent-foreground"
            : "text-vscode-text hover:bg-vscode-elevated"
        }`}
        style={{ paddingLeft: `${0.75 + depth * 0.9}rem` }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={() => onToggleNode(node.id)}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-vscode-muted transition-colors hover:bg-black/20 hover:text-white"
            aria-label={`${isOpen ? "Collapse" : "Expand"} ${node.label}`}
            aria-expanded={isOpen}
          >
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-0" : "-rotate-90"}`}
            />
          </button>
        ) : (
          <span className="h-6 w-6 shrink-0" aria-hidden="true" />
        )}

        <button
          type="button"
          onClick={() => {
            if (node.href) {
              onNavigate(node.href.replace(/^#/, ""));
            } else if (hasChildren) {
              onToggleNode(node.id);
            }
          }}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <Icon
            className={`h-4 w-4 shrink-0 ${node.kind === "folder" ? "text-vscode-yellow" : "text-vscode-blue"}`}
          />
          <span className="truncate">{node.label}</span>
        </button>
      </div>

      {hasChildren && isOpen ? (
        <div className="mt-0.5 space-y-0.5">
          {node.children!.map((child) => (
            <ExplorerTreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
              openIds={openIds}
              onNavigate={onNavigate}
              onToggleNode={onToggleNode}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default LandingPage;
