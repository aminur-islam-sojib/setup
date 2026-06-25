import { Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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
