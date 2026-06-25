"use client";

import type { ExplorerNode } from "../data/vs-code-cpp";
import { ExplorerTreeNode } from "./ExplorerTreeNode";

export function ExplorerPanel({
  nodes,
  activeId,
  openIds,
  onNavigate,
  onToggleNode,
}: {
  nodes: ExplorerNode[];
  activeId: string;
  openIds: string[];
  onNavigate: (id: string) => void;
  onToggleNode: (id: string) => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-widest text-vscode-muted">
        Explorer
      </div>
      <nav className="px-2 pb-8">
        {nodes.map((node) => (
          <ExplorerTreeNode
            key={node.id}
            node={node}
            depth={0}
            activeId={activeId}
            openIds={openIds}
            onNavigate={onNavigate}
            onToggleNode={onToggleNode}
          />
        ))}
      </nav>
    </div>
  );
}
