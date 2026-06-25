import { Puzzle } from "lucide-react";
import StepWrap from "@/components/Shared/StepWrap";
import StepHeading from "@/components/Shared/StepHeading";

export function Step5() {
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
