"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Download,
  Terminal,
  Settings,
  Puzzle,
  PlayCircle,
  Trophy,
  Variable,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  ComputerIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import CodeBlock from "@/components/Shared/CodeBlock";
import StepWrap from "@/components/Shared/StepWrap";
import Kbd from "@/components/Shared/Kbd";
import StepHeading from "@/components/Shared/StepHeading";
import Footer from "@/components/Shared/Footer";

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

const NAV = [
  { id: "overview", label: "Overview", icon: PlayCircle },
  { id: "step-1", label: "1. Download Software", icon: Download },
  { id: "step-2", label: "2. Environment Path", icon: Variable },
  { id: "step-3", label: "3. Verify Install", icon: CheckCircle2 },
  { id: "step-4", label: "4. settings.json", icon: Settings },
  { id: "step-5", label: "5. Extensions", icon: Puzzle },
  { id: "step-6", label: "6. Test Code", icon: Terminal },
  { id: "competitive", label: "Competitive Programming", icon: Trophy },
];

function LandingPage() {
  const [active, setActive] = useState<string>("overview");

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
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" />
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-border bg-[#323233] px-4 text-sm">
        <div className="flex items-center gap-3">
          <VSCodeIcon className="h-5 w-5" />
          <span className="font-mono text-xs text-vscode-muted">
            <span className="text-vscode-text">VS Code Setup</span>
            <span className="mx-2">›</span>
            <span>C / C++</span>
          </span>
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-12 hidden h-[calc(100vh-3rem)] w-72 shrink-0 overflow-y-auto border-r border-border bg-vscode-panel lg:block">
          <div className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-vscode-muted">
            Explorer
          </div>
          <div className="px-2 pb-2 text-xs font-semibold text-vscode-text">
            <span className="inline-flex items-center gap-1 px-2 py-1">
              <ChevronRight className="h-3 w-3" />
              VS-CODE-CPP-SETUP
            </span>
          </div>
          <nav className="px-2 pb-8">
            {NAV.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 rounded-sm px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-vscode-accent text-vscode-accent-foreground"
                      : "text-vscode-text hover:bg-vscode-elevated"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-vscode-blue" />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
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

function Chip({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-vscode-elevated px-1.5 py-0.5 font-mono text-[12px] text-vscode-orange">
      {children}
    </code>
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
          Then PATH isn't set correctly — revisit Step 2 and confirm the{" "}
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

export default LandingPage;
