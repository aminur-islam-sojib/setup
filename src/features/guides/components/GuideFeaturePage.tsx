"use client";

import { useEffect, type ReactNode } from "react";

import Footer from "@/components/Shared/Footer";
import { useGuideExplorer } from "../hooks/useGuideExplorer";
import type { ExplorerNode, GuideFeatureMeta } from "../types";
import { GuideLayout } from "./GuideLayout";

type GuideFeaturePageProps = {
  sections: ExplorerNode[];
  tree: ExplorerNode[];
  feature: GuideFeatureMeta;
  children: ReactNode;
};

export function GuideFeaturePage({
  sections,
  tree,
  feature,
  children,
}: GuideFeaturePageProps) {
  const {
    active,
    setActive,
    sidebarOpen,
    setSidebarOpen,
    openIds,
    handleNavigate,
    handleToggleNode,
  } = useGuideExplorer(tree);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((node) => {
      const el = document.getElementById(node.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sections, setActive]);

  return (
    <GuideLayout
      nodes={tree}
      activeId={active}
      sidebarOpen={sidebarOpen}
      openIds={openIds}
      onNavigate={handleNavigate}
      onToggleNode={handleToggleNode}
      onSidebarOpen={() => setSidebarOpen(true)}
      onSidebarClose={() => setSidebarOpen(false)}
      feature={feature}
    >
      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-16">
        {children}
        <Footer />
      </article>
    </GuideLayout>
  );
}
