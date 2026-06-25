import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StepWrap from "@/components/Shared/StepWrap";
import StepHeading from "@/components/Shared/StepHeading";
import CodeBlock from "@/components/Shared/CodeBlock";
import {
  SETTINGS_WINDOWS,
  SETTINGS_LINUX,
} from "@/features/guides/data/vs-code-cpp";

export function Step4() {
  return (
    <StepWrap id="step-4">
      <StepHeading
        n={4}
        title={`Apply OS-specific settings.json`}
        desc="Configure VS Code by applying the appropriate settings file for your operating system."
      />
      <Tabs defaultValue="windows" className="w-full">
        <TabsList className="bg-vscode-panel">
          <TabsTrigger
            value="windows"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Windows
          </TabsTrigger>
          <TabsTrigger
            value="linux"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Linux
          </TabsTrigger>
        </TabsList>
        <TabsContent value="windows" className="mt-3">
          <CodeBlock label="settings.json" code={SETTINGS_WINDOWS} />
        </TabsContent>
        <TabsContent value="linux" className="mt-3">
          <CodeBlock label="settings.json" code={SETTINGS_LINUX} />
        </TabsContent>
      </Tabs>
    </StepWrap>
  );
}
