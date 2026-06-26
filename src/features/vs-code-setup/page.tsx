"use client";

import { GuideFeaturePage } from "../guides/components/GuideFeaturePage";
import {
  FinalChecklist,
  Hero,
  Step1,
  Step10,
  Step11,
  Step12,
  Step13,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
} from "./content";
import {
  EXPLORER_TREE,
  GUIDE_META,
  GUIDE_SECTIONS,
} from "./data/vs-code-setup";

export default function VSCodeSetupGuidePage() {
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
      <Step7 />
      <Step8 />
      <Step9 />
      <Step10 />
      <Step11 />
      <Step12 />
      <Step13 />
      <FinalChecklist />
    </GuideFeaturePage>
  );
}
