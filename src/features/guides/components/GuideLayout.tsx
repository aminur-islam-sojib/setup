"use client";

import Image from "next/image";
import { useEffect, type ReactNode } from "react";
import { Menu, X, ComputerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "@/components/ui/sonner";
import { ExplorerPanel } from "./ExplorerPanel";
import type { GuideFeatureMeta, ExplorerNode } from "../types";
import { findNodePath } from "../utils/explorer";

export function GuideLayout({
  nodes,
  activeId,
  sidebarOpen,
  openIds,
  onNavigate,
  onToggleNode,
  onSidebarOpen,
  onSidebarClose,
  feature,
  children,
}: {
  nodes: ExplorerNode[];
  activeId: string;
  sidebarOpen: boolean;
  openIds: string[];
  onNavigate: (id: string) => void;
  onToggleNode: (id: string) => void;
  onSidebarOpen: () => void;
  onSidebarClose: () => void;
  feature: GuideFeatureMeta;
  children: ReactNode;
}) {
  const isMobile = useIsMobile();
  const showMobileSidebar = isMobile && sidebarOpen;
  const activePath = findNodePath(nodes, activeId) ?? [];

  useEffect(() => {
    if (!showMobileSidebar) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showMobileSidebar]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" />
      <header className="sticky top-0 z-50 flex h-12 items-center justify-between border-b border-border bg-[#323233] px-3 text-sm sm:px-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Button
            type="button"
            size="icon-sm"
            variant="ghost"
            className="shrink-0 text-vscode-text hover:bg-vscode-elevated hover:text-white lg:hidden"
            onClick={onSidebarOpen}
            aria-label="Open explorer"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-md  bg-transparent">
            <Image
              src={feature.iconSrc}
              alt={feature.iconAlt}
              width={28}
              height={28}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-vscode-muted">
              Explorer
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-1 font-mono text-[11px] text-vscode-text sm:text-xs">
              {activePath.map((node, index) => (
                <span
                  key={node.id}
                  className={
                    index === activePath.length - 1
                      ? "text-white"
                      : "text-vscode-text"
                  }
                >
                  {index > 0 ? (
                    <span className="mx-1 text-vscode-muted">›</span>
                  ) : null}
                  {node.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-vscode-muted hover:text-vscode-text"
        >
          <ComputerIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Reference</span>
        </a>
      </header>

      <div className="flex min-h-[calc(100vh-3rem)]">
        <aside className="sticky top-12 hidden h-[calc(100vh-3rem)] w-80 shrink-0 overflow-y-auto border-r border-border bg-vscode-panel lg:block">
          <ExplorerPanel
            nodes={nodes}
            activeId={activeId}
            openIds={openIds}
            onNavigate={onNavigate}
            onToggleNode={onToggleNode}
          />
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>

      {showMobileSidebar ? (
        <div className="fixed inset-x-0 bottom-0 top-12 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close explorer"
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            onClick={onSidebarClose}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(86vw,19rem)] flex-col border-r border-border bg-vscode-panel shadow-2xl">
            <div className="flex items-center justify-between border-b border-vscode-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-vscode-border bg-vscode-elevated">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.iconAlt}
                    width={24}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.24em] text-vscode-muted">
                    Explorer
                  </div>
                  <div className="font-mono text-sm text-vscode-text">
                    {nodes[0]?.label ?? feature.title}
                  </div>
                </div>
              </div>
              <Button
                type="button"
                size="icon-sm"
                variant="ghost"
                className="text-vscode-text hover:bg-vscode-elevated hover:text-white"
                onClick={onSidebarClose}
                aria-label="Close explorer"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ExplorerPanel
              nodes={nodes}
              activeId={activeId}
              openIds={openIds}
              onNavigate={onNavigate}
              onToggleNode={onToggleNode}
            />
          </aside>
        </div>
      ) : null}
    </div>
  );
}
