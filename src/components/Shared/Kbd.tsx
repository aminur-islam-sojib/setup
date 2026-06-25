import { ReactNode } from "react";

export default function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex items-center rounded border border-vscode-border bg-vscode-elevated px-1.5 py-0.5 font-mono text-[11px] text-vscode-text">
      {children}
    </kbd>
  );
}
