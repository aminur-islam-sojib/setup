import type { ReactNode } from "react";
import StepWrap from "@/components/Shared/StepWrap";
import StepHeading from "@/components/Shared/StepHeading";
import Chip from "@/components/Shared/Chip";
import KbdComponent from "@/components/Shared/Kbd";

export function Step2() {
  const steps: ReactNode[] = [
    <>
      Move the extracted MinGW folder to <Chip>C:\</Chip>.
    </>,
    <>
      Press <KbdComponent>Win</KbdComponent> + <KbdComponent>S</KbdComponent>.
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
