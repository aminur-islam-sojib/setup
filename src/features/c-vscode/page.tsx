"use client";

import {
  Hero,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Competitive,
} from "@/features/c-vscode/componetns";
import { GuideFeaturePage } from "../guides/components/GuideFeaturePage";
import { EXPLORER_TREE, GUIDE_META, GUIDE_SECTIONS } from "./data/vs-code-cpp";

export default function VSCodeCppGuidePage() {
  return (
    <GuideFeaturePage
      sections={GUIDE_SECTIONS}
      tree={EXPLORER_TREE}
      feature={GUIDE_META}
    >
      <Hero />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <Competitive />
    </GuideFeaturePage>
  );
}
