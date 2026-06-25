"use client";

import { ChevronDown, FileText, Folder } from "lucide-react";
import type { ExplorerNode } from "../data/vs-code-cpp";

export function ExplorerTreeNode({
  node,
  depth,
  activeId,
  openIds,
  onNavigate,
  onToggleNode,
}: {
  node: ExplorerNode;
  depth: number;
  activeId: string;
  openIds: string[];
  onNavigate: (id: string) => void;
  onToggleNode: (id: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isOpen = openIds.includes(node.id);
  const isActive = activeId === node.id;
  const Icon = node.icon ?? (node.kind === "folder" ? Folder : FileText);

  return (
    <div>
      <div
        className={`group flex items-center gap-1 rounded-sm px-2 py-1 text-sm transition-colors ${
          isActive
            ? "bg-vscode-accent text-vscode-accent-foreground"
            : "text-vscode-text hover:bg-vscode-elevated"
        }`}
        style={{ paddingLeft: `${0.75 + depth * 0.9}rem` }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={() => onToggleNode(node.id)}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-vscode-muted transition-colors hover:bg-black/20 hover:text-white"
            aria-label={`${isOpen ? "Collapse" : "Expand"} ${node.label}`}
            aria-expanded={isOpen}
          >
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${
                isOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>
        ) : (
          <span className="h-6 w-6 shrink-0" aria-hidden="true" />
        )}

        <button
          type="button"
          onClick={() => {
            if (node.href) {
              onNavigate(node.href.replace(/^#/, ""));
            } else if (hasChildren) {
              onToggleNode(node.id);
            }
          }}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <Icon
            className={`h-4 w-4 shrink-0 ${
              node.kind === "folder" ? "text-vscode-yellow" : "text-vscode-blue"
            }`}
          />
          <span className="truncate">{node.label}</span>
        </button>
      </div>

      {hasChildren && isOpen ? (
        <div className="mt-0.5 space-y-0.5">
          {node.children!.map((child) => (
            <ExplorerTreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
              openIds={openIds}
              onNavigate={onNavigate}
              onToggleNode={onToggleNode}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
