import { useState } from "react";
import type { ExplorerNode } from "../types";
import { collectDefaultOpenIds } from "../data/vs-code-cpp";

export function useGuideExplorer(sectionNodes: ExplorerNode[]) {
  const [active, setActive] = useState<string>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openIds, setOpenIds] = useState<string[]>(() => {
    return collectDefaultOpenIds(sectionNodes);
  });

  function handleNavigate(id: string) {
    setActive(id);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    // Scroll to the target section
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  }

  function handleToggleNode(id: string) {
    setOpenIds((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );
  }

  return {
    active,
    setActive,
    sidebarOpen,
    setSidebarOpen,
    openIds,
    handleNavigate,
    handleToggleNode,
  };
}
