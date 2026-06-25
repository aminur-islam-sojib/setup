import { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-vscode-elevated px-1.5 py-0.5 font-mono text-[12px] text-vscode-orange">
      {children}
    </code>
  );
}
