import { ExternalLink } from "lucide-react";
import StepWrap from "@/components/Shared/StepWrap";
import StepHeading from "@/components/Shared/StepHeading";

export function Step1() {
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
