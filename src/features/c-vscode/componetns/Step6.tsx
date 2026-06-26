import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StepWrap from "@/components/Shared/StepWrap";
import StepHeading from "@/components/Shared/StepHeading";
import CodeBlock from "@/components/Shared/CodeBlock";
import Chip from "@/components/Shared/Chip";
import { CODE_SAMPLES } from "@/features/c-vscode/data/vs-code-cpp";

export function Step6() {
  return (
    <StepWrap id="step-6">
      <StepHeading
        n={6}
        title="Test your setup with sample code"
        desc="Run these in your newly configured VS Code to verify everything works."
      />
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="bg-vscode-panel">
          <TabsTrigger
            value="basic"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Basic Output
          </TabsTrigger>
          <TabsTrigger
            value="io"
            className="data-[state=active]:bg-vscode-elevated data-[state=active]:text-vscode-teal"
          >
            Standard I/O
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="mt-3">
          <p className="mb-2 text-sm text-vscode-text">
            Paste and run — you should see <Chip>Hello World</Chip>.
          </p>
          <CodeBlock label="hello.c" code={CODE_SAMPLES.helloC} />
        </TabsContent>
        <TabsContent value="io" className="mt-3">
          <p className="mb-2 text-sm text-vscode-text">
            Paste, run, type an integer, then check the printed result.
          </p>
          <CodeBlock label="io.c" code={CODE_SAMPLES.ioC} />
        </TabsContent>
      </Tabs>
    </StepWrap>
  );
}
