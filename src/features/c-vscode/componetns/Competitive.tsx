import { Trophy, ExternalLink } from "lucide-react";
import StepWrap from "@/components/Shared/StepWrap";

export function Competitive() {
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
