import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CodeBlock({
  code,
  label,
}: {
  code: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Copy failed");
    }
  };
  return (
    <div className="overflow-hidden rounded-md border border-vscode-border bg-[#1e1e1e] shadow-lg">
      <div className="flex items-center justify-between border-b border-vscode-border bg-[#323233] px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-[11px] text-vscode-muted">
            {label}
          </span>
        </div>
        <button
          onClick={onCopy}
          className="flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] text-vscode-muted hover:bg-vscode-elevated hover:text-vscode-text"
        >
          {copied ? (
            <Check className="h-3 w-3 text-vscode-teal" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[13px] leading-relaxed text-vscode-text">
        <code>{code}</code>
      </pre>
    </div>
  );
}
