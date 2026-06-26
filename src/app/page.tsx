import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Code2,
  FileCode2,
  TerminalSquare,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const guides = [
  {
    title: "VS Code Setup",
    description:
      "A complete developer environment setup for Visual Studio Code with extensions, terminal, Git, compiler, and workflow basics.",
    href: "/vs-code",
    icon: Code2,
    accent: "from-[#0e639c] to-[#094771]",
    tag: "Primary guide",
  },
  {
    title: "Python Setup",
    description:
      "Install Python, configure VS Code, create a virtual environment, and prepare a clean development workflow.",
    href: "/python-setup",
    icon: FileCode2,
    accent: "from-[#4ec9b0] to-[#0e639c]",
    tag: "Language guide",
  },
  {
    title: "C/C++ Setup",
    description:
      "Set up a C and C++ environment with compiler tools, PATH configuration, debugging, and sample projects.",
    href: "/c-vscode",
    icon: TerminalSquare,
    accent: "from-[#ce9178] to-[#0e639c]",
    tag: "Compiler guide",
  },
];

const highlights = [
  "Windows, Linux, and macOS coverage",
  "Step-by-step setup with code blocks and links",
  "Route-based guides for faster navigation",
  "Built with a VS Code-inspired visual style",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,99,156,0.22),transparent_34%),linear-gradient(180deg,#181818_0%,#1e1e1e_35%,#171717_100%)] text-vscode-text">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:px-10 lg:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-vscode-border bg-black/20 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-vscode-border bg-vscode-panel text-vscode-blue">
              <BookOpenText className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-vscode-muted">
                Setup Docs Hub
              </div>
              <div className="text-sm text-white">
                Developer environment guides
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-vscode-muted">
            <Workflow className="h-4 w-4" />
            Route-based guides
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs font-mono text-vscode-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-vscode-teal" />
              choose your setup path
            </div>
            <h1 className="max-w-3xl font-mono text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build your developer setup
              <br />
              <span className="text-vscode-blue">one guide at a time</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-vscode-text sm:text-lg">
              This app organizes practical setup guides for VS Code, Python, and
              C/C++. Open a guide to get a clean step-by-step environment setup
              with links, settings, and verification checks.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-vscode-blue text-white hover:bg-vscode-blue/90"
              >
                <Link href="/vs-code">
                  Open VS Code guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-vscode-border bg-transparent text-vscode-text hover:bg-vscode-panel hover:text-white"
              >
                <Link href="/python-setup">Browse Python guide</Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-vscode-border bg-vscode-panel p-5 shadow-2xl shadow-black/20">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <TerminalSquare className="h-4 w-4 text-vscode-teal" />
              What you get
            </div>
            <ul className="space-y-3 text-sm text-vscode-text">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border border-vscode-border/80 bg-black/10 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vscode-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.title}
                href={guide.href}
                className="group relative overflow-hidden rounded-2xl border border-vscode-border bg-[#202020] p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-vscode-blue"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${guide.accent}`}
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-vscode-border bg-vscode-elevated text-vscode-text">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-vscode-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-vscode-muted">
                    {guide.tag}
                  </span>
                </div>
                <h2 className="font-mono text-2xl font-semibold text-white">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-vscode-text">
                  {guide.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-vscode-blue transition-colors group-hover:text-white">
                  Open guide <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    </main>
  );
}
