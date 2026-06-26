# Add A New Guide Feature

This project now has shared guide plumbing so new guides can be added with minimal boilerplate.

## 1. Create the content components

Create a new folder under src/guides, for example:

- src/guides/java-setup/Hero.tsx
- src/guides/java-setup/Step1.tsx
- src/guides/java-setup/Step2.tsx
- src/guides/java-setup/index.ts

Export all sections from index.ts.

## 2. Create the guide data file

Create src/features/java-setup/data/java-setup.ts and export:

- GUIDE_SECTIONS (Explorer section nodes)
- EXPLORER_TREE (root folder with children)
- GUIDE_META (title, description, icon)

Use src/features/c-vscode/data/vs-code-cpp.ts as reference.

## 3. Create the feature page

Create src/features/java-setup/page.tsx and use GuideFeaturePage.

Example structure:

import { Hero, Step1, Step2 } from "@/guides/java-setup";
import { GuideFeaturePage } from "../guides/components/GuideFeaturePage";
import { EXPLORER_TREE, GUIDE_META, GUIDE_SECTIONS } from "./data/java-setup";

export default function JavaSetupGuidePage() {
return (
<GuideFeaturePage
      sections={GUIDE_SECTIONS}
      tree={EXPLORER_TREE}
      feature={GUIDE_META}
    >
<Hero />
<Step1 />
<Step2 />
</GuideFeaturePage>
);
}

## 4. Render the guide

Import and render the feature page where needed.

Current app entry point:

- src/app/page.tsx

Optional: create route-based pages under src/app/<guide-name>/page.tsx and render each feature there.

## 5. Shared utilities you can reuse

- src/features/guides/components/GuideFeaturePage.tsx
- src/features/guides/components/GuideLayout.tsx
- src/features/guides/hooks/useGuideExplorer.ts
- src/features/guides/utils/explorer.ts

These files are guide-agnostic and should not import from any specific guide feature.
