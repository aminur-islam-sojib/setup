"use client";

import { useEffect } from "react";
import { GuideLayout } from "./components/GuideLayout";
import { useGuideExplorer } from "./hooks/useGuideExplorer";
import { GUIDE_SECTIONS, EXPLORER_TREE } from "./data/vs-code-cpp";
import {
  Hero,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Competitive,
} from "@/guides/vs-code-cpp";
import Footer from "@/components/Shared/Footer";

export default function VSCodeCppGuidePage() {
  const {
    active,
    setActive,
    sidebarOpen,
    setSidebarOpen,
    openIds,
    handleNavigate,
    handleToggleNode,
  } = useGuideExplorer(GUIDE_SECTIONS);

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
    GUIDE_SECTIONS.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [setActive]);

  return (
    <GuideLayout
      nodes={EXPLORER_TREE}
      activeId={active}
      sidebarOpen={sidebarOpen}
      openIds={openIds}
      onNavigate={handleNavigate}
      onToggleNode={handleToggleNode}
      onSidebarOpen={() => setSidebarOpen(true)}
      onSidebarClose={() => setSidebarOpen(false)}
    >
      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-16">
        <Hero />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Competitive />
        <Footer />
      </article>
    </GuideLayout>
  );
}
