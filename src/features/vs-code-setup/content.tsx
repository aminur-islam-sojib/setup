"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/Shared/CodeBlock";
import Chip from "@/components/Shared/Chip";
import Kbd from "@/components/Shared/Kbd";
import StepHeading from "@/components/Shared/StepHeading";
import StepWrap from "@/components/Shared/StepWrap";

function LinkCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-md border border-vscode-border bg-vscode-panel p-4 transition-colors hover:border-vscode-blue"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-sm font-semibold text-vscode-teal">
          {title}
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-vscode-muted transition-colors group-hover:text-vscode-blue" />
      </div>
      <p className="mt-2 text-xs leading-relaxed text-vscode-text">
        {description}
      </p>
      <div className="mt-3 break-all font-mono text-[11px] text-vscode-blue">
        {href}
      </div>
    </a>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
      <div className="font-mono text-sm font-semibold text-vscode-teal">
        {title}
      </div>
      <div className="mt-3 text-sm text-vscode-text">{children}</div>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 rounded-md border border-vscode-border bg-vscode-panel px-4 py-2.5 text-sm text-vscode-text">
      <span className="font-mono text-xs text-vscode-muted">✓</span>
      <span>{children}</span>
    </li>
  );
}

export function Hero() {
  return (
    <section id="overview" className="scroll-mt-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs font-mono text-vscode-teal">
        <span className="h-1.5 w-1.5 rounded-full bg-vscode-teal" />
        guide.md · VS Code setup
      </div>

      <div className="flex items-start gap-5">
        <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-vscode-border bg-vscode-panel">
          <Image
            src="/vscode.png"
            alt="Visual Studio Code"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="font-mono text-4xl font-bold leading-tight text-white sm:text-5xl">
            VS Code Setup Guide
            <br />
            <span className="text-vscode-blue">for development</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-vscode-text">
            A complete walkthrough to install and configure Visual Studio Code
            for development on Windows, Linux, and macOS.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs text-vscode-text">
          Windows
        </span>
        <span className="rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs text-vscode-text">
          Linux
        </span>
        <span className="rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs text-vscode-text">
          macOS
        </span>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          asChild
          className="bg-vscode-blue text-white hover:bg-vscode-blue/90"
        >
          <a href="#step-1">
            <ExternalLink className="mr-2 h-4 w-4" /> Start setup
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-vscode-border bg-transparent text-vscode-text hover:bg-vscode-panel hover:text-white"
        >
          <a href="#step-2">
            <ExternalLink className="mr-2 h-4 w-4" /> Jump to extensions
          </a>
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 border-t border-vscode-border pt-8 sm:grid-cols-4">
        <Stat k="13" v="Setup steps" />
        <Stat k="3" v="OS supported" />
        <Stat k="5" v="Core settings" />
        <Stat k="1" v="Workflow" />
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-2xl font-bold text-vscode-teal">{k}</div>
      <div className="text-xs uppercase tracking-wider text-vscode-muted">
        {v}
      </div>
    </div>
  );
}

export function Step1() {
  return (
    <StepWrap id="step-1">
      <StepHeading
        n={1}
        title="Download VS Code"
        desc="Install the editor from the official download page for your operating system."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <LinkCard
          title="VS Code download"
          href="https://code.visualstudio.com/download"
          description="Pick the stable build for Windows, macOS, or Linux."
        />
        <LinkCard
          title="Windows setup docs"
          href="https://code.visualstudio.com/docs/setup/windows"
          description="Use this when you want a Windows-specific install walkthrough."
        />
      </div>

      <Panel title="Windows install checklist">
        Enable <Chip>Add \"Open with Code\" action</Chip>,{" "}
        <Chip>Add to PATH</Chip>, and
        <Chip>Register Code as editor</Chip>.
      </Panel>

      <div className="mt-5">
        <CodeBlock code="code --version" label="verify-vscode.sh" />
      </div>
    </StepWrap>
  );
}

export function Step2() {
  return (
    <StepWrap id="step-2">
      <StepHeading
        n={2}
        title="Install recommended extensions"
        desc="These extensions cover most common development workflows in one editor."
      />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <LinkCard
          title="C/C++"
          href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"
          description="Syntax highlighting, debugging, and IntelliSense for C and C++."
        />
        <LinkCard
          title="C/C++ Extension Pack"
          href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack"
          description="Includes C/C++, CMake, and debugging tools."
        />
        <LinkCard
          title="Python"
          href="https://marketplace.visualstudio.com/items?itemName=ms-python.python"
          description="Python IntelliSense, debugging, and environment support."
        />
        <LinkCard
          title="Prettier"
          href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          description="Automatic formatting for web projects."
        />
        <LinkCard
          title="ESLint"
          href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
          description="JavaScript and TypeScript code quality checks."
        />
      </div>
    </StepWrap>
  );
}

export function Step3() {
  return (
    <StepWrap id="step-3">
      <StepHeading
        n={3}
        title="Configure the terminal"
        desc="Choose the shell that best matches the tools and platform you use."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="Windows options">
          <ul className="space-y-2">
            <li>• PowerShell</li>
            <li>• Git Bash</li>
          </ul>
        </Panel>
        <Panel title="Linux / macOS options">
          <ul className="space-y-2">
            <li>• Bash</li>
            <li>• ZSH</li>
          </ul>
        </Panel>
      </div>

      <div className="mt-5">
        <CodeBlock code="Terminal → New Terminal" label="open-terminal.txt" />
      </div>
    </StepWrap>
  );
}

export function Step4() {
  return (
    <StepWrap id="step-4">
      <StepHeading
        n={4}
        title="Install Git"
        desc="Git is the default version control tool for most developer workflows."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <LinkCard
          title="Git downloads"
          href="https://git-scm.com/downloads"
          description="Download Git for your operating system."
        />
        <Panel title="Verify and configure">
          <div>git --version</div>
          <div className="mt-3">
            git config --global user.name &quot;Your Name&quot;
          </div>
          <div className="mt-1">
            git config --global user.email &quot;your@email.com&quot;
          </div>
        </Panel>
      </div>
    </StepWrap>
  );
}

export function Step5() {
  return (
    <StepWrap id="step-5">
      <StepHeading
        n={5}
        title="Configure VS Code settings"
        desc="Set a few editor defaults so every new project starts from the same baseline."
      />

      <div className="mt-5">
        <CodeBlock
          code={`{\n  "editor.fontSize": 16,\n  "editor.formatOnSave": true,\n  "files.autoSave": "afterDelay",\n  "terminal.integrated.defaultProfile.windows": "PowerShell",\n  "editor.minimap.enabled": false\n}`}
          label="settings.json"
        />
      </div>
    </StepWrap>
  );
}

export function Step6() {
  return (
    <StepWrap id="step-6">
      <StepHeading
        n={6}
        title="Install a compiler"
        desc="C and C++ development need a compiler before you can build or debug code."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <LinkCard
          title="MinGW-w64"
          href="https://www.mingw-w64.org/"
          description="A common GCC-based compiler option on Windows."
        />
        <LinkCard
          title="MSYS2"
          href="https://www.msys2.org/"
          description="A flexible environment that can install GCC through pacman."
        />
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <CodeBlock
          code="pacman -S mingw-w64-ucrt-x86_64-gcc"
          label="msys2-install.sh"
        />
        <CodeBlock code="gcc --version" label="verify-compiler.sh" />
      </div>
    </StepWrap>
  );
}

export function Step7() {
  return (
    <StepWrap id="step-7">
      <StepHeading
        n={7}
        title="Add the compiler to PATH"
        desc="Make sure the compiler folder is available from every terminal session."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="Windows path example">C:\msys64\ucrt64\bin</Panel>
        <Panel title="After updating PATH">
          Restart VS Code, then run <Chip>gcc --version</Chip> again.
        </Panel>
      </div>
    </StepWrap>
  );
}

export function Step8() {
  return (
    <StepWrap id="step-8">
      <StepHeading
        n={8}
        title="Create your first project"
        desc="A small sample project confirms that the editor, compiler, and terminal all work together."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="Project flow">
          Create a folder named <Chip>HelloWorld</Chip>, open it in VS Code,
          create
          <Chip>main.cpp</Chip>, then build and run it.
        </Panel>
        <CodeBlock
          code={`#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout << \"Hello World\";\n    return 0;\n}`}
          label="main.cpp"
        />
      </div>

      <div className="mt-5">
        <CodeBlock
          code={`g++ main.cpp -o app\n./app`}
          label="build-and-run.sh"
        />
      </div>
    </StepWrap>
  );
}

export function Step9() {
  return (
    <StepWrap id="step-9">
      <StepHeading
        n={9}
        title="Enable debugging"
        desc="Create a debugging configuration so you can run the program with breakpoints."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <Panel title="Open the debugger">
          Run → Add Configuration → C++ (GDB/LLDB)
        </Panel>
        <Panel title="Launch it">
          Press <Chip>F5</Chip> after placing breakpoints in your code.
        </Panel>
      </div>
    </StepWrap>
  );
}

export function Step10() {
  return (
    <StepWrap id="step-10">
      <StepHeading
        n={10}
        title="Recommended folder structure"
        desc="Keep projects organized so source files, build output, and settings stay separated."
      />

      <div className="mt-5">
        <CodeBlock
          code={`Project/\n├── src/\n├── include/\n├── build/\n└── .vscode/`}
          label="project-structure.txt"
        />
      </div>
    </StepWrap>
  );
}

export function Step11() {
  return (
    <StepWrap id="step-11">
      <StepHeading
        n={11}
        title="Useful shortcuts"
        desc="These keyboard shortcuts cover the actions you will use most often in VS Code."
      />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <Panel title="Command palette">Ctrl + Shift + P</Panel>
        <Panel title="Terminal">Ctrl + `</Panel>
        <Panel title="Format document">Shift + Alt + F</Panel>
        <Panel title="Search in files">Ctrl + Shift + F</Panel>
        <Panel title="Quick open">Ctrl + P</Panel>
      </div>
    </StepWrap>
  );
}

export function Step12() {
  return (
    <StepWrap id="step-12">
      <StepHeading
        n={12}
        title="Useful settings"
        desc="Keep the editor behavior consistent across projects by enabling a few defaults."
      />

      <div className="grid gap-3 md:grid-cols-3">
        <Panel title="Auto Save">"files.autoSave": "afterDelay"</Panel>
        <Panel title="Format On Save">"editor.formatOnSave": true</Panel>
        <Panel title="Disable Minimap">"editor.minimap.enabled": false</Panel>
      </div>
    </StepWrap>
  );
}

export function Step13() {
  return (
    <StepWrap id="step-13">
      <StepHeading
        n={13}
        title="Troubleshooting"
        desc="These are the most common setup problems and the first checks to try."
      />

      <div className="space-y-3">
        <Panel title="code is not recognized">
          Reinstall VS Code and enable <Chip>Add to PATH</Chip>.
        </Panel>
        <Panel title="gcc is not recognized">
          Confirm the compiler folder is added to PATH, then restart the
          terminal.
        </Panel>
        <Panel title="g++ command not found">
          Install a compiler from MinGW-w64 or MSYS2 first.
        </Panel>
      </div>
    </StepWrap>
  );
}

export function FinalChecklist() {
  return (
    <StepWrap id="checklist">
      <StepHeading
        n={14}
        title="Final verification"
        desc="Use this checklist before you start working on real projects."
      />

      <ul className="space-y-2.5">
        <ChecklistItem>VS Code installed.</ChecklistItem>
        <ChecklistItem>Terminal working.</ChecklistItem>
        <ChecklistItem>Git installed.</ChecklistItem>
        <ChecklistItem>Compiler installed.</ChecklistItem>
        <ChecklistItem>Extensions installed.</ChecklistItem>
        <ChecklistItem>Settings configured.</ChecklistItem>
        <ChecklistItem>Sample project running.</ChecklistItem>
      </ul>
    </StepWrap>
  );
}
