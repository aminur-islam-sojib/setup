import { AlertTriangle } from "lucide-react";
import StepWrap from "@/components/Shared/StepWrap";
import StepHeading from "@/components/Shared/StepHeading";
import CodeBlock from "@/components/Shared/CodeBlock";
import Chip from "@/components/Shared/Chip";

export function Step3() {
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
