import type { ExplorerNode } from "../types";

export function collectDefaultOpenIds(nodes: ExplorerNode[]): string[] {
  return nodes.flatMap((node) => [
    ...(node.defaultOpen ? [node.id] : []),
    ...(node.children ? collectDefaultOpenIds(node.children) : []),
  ]);
}

export function findNodePath(
  nodes: ExplorerNode[],
  targetId: string,
): ExplorerNode[] | null {
  for (const node of nodes) {
    if (node.id === targetId) {
      return [node];
    }

    if (!node.children) {
      continue;
    }

    const childPath = findNodePath(node.children, targetId);
    if (childPath) {
      return [node, ...childPath];
    }
  }

  return null;
}
