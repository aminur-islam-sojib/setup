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

function TopicCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
      <div className="font-mono text-sm font-semibold text-vscode-teal">
        {title}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-vscode-text">
        {description}
      </p>
    </div>
  );
}

function ToolCard({
  title,
  href,
  install,
  useFor,
}: {
  title: string;
  href: string;
  install: string;
  useFor: string[];
}) {
  return (
    <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
      <div className="font-mono text-sm font-semibold text-vscode-teal">
        {title}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex break-all font-mono text-[11px] text-vscode-blue hover:underline"
      >
        {href}
      </a>
      <p className="mt-2 text-xs leading-relaxed text-vscode-text">
        {install}
      </p>
      <ul className="mt-3 space-y-1 text-xs text-vscode-text">
        {useFor.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
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
        guide.md · Python setup
      </div>

      <div className="flex items-start gap-5">
        <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-vscode-border bg-vscode-panel">
          <Image
            src="/python-logo-only.png"
            alt="Python"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="font-mono text-4xl font-bold leading-tight text-white sm:text-5xl">
            Python Setup Guide
            <br />
            <span className="text-vscode-blue">for development</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-vscode-text">
            A complete walkthrough to install and configure Python for a clean
            development workflow on Windows, Linux, and macOS.
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
          <a href="#step-6">
            <ExternalLink className="mr-2 h-4 w-4" /> Jump to virtual env
          </a>
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 border-t border-vscode-border pt-8 sm:grid-cols-4">
        <Stat k="15" v="Setup steps" />
        <Stat k="3" v="OS supported" />
        <Stat k="4" v="Core tools" />
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
        title="Download Python"
        desc="Get the official installer for your operating system from python.org."
      />

      <div className="grid gap-3 md:grid-cols-3">
        <LinkCard
          title="Windows download"
          href="https://www.python.org/downloads/windows/"
          description="Use the official Windows installer page and download the latest stable release."
        />
        <LinkCard
          title="macOS download"
          href="https://www.python.org/downloads/macos/"
          description="Install the macOS package or use Homebrew if you already manage tools that way."
        />
        <LinkCard
          title="Linux download"
          href="https://www.python.org/downloads/source/"
          description="Most Linux users install from their distro package manager, but the source releases are here."
        />
      </div>

      <div className="mt-5 rounded-md border border-vscode-border bg-vscode-panel p-4">
        <div className="font-mono text-sm font-semibold text-vscode-teal">
          Windows installer checklist
        </div>
        <ul className="mt-3 space-y-2 text-sm text-vscode-text">
          <li>• Run the installer from the official download page.</li>
          <li>
            • Enable <Chip>Add Python.exe to PATH</Chip> before clicking
            Install Now.
          </li>
          <li>• Finish installation and reopen the terminal.</li>
        </ul>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <CodeBlock code="python --version" label="verify-python.bat" />
        <CodeBlock code="pip --version" label="verify-pip.bat" />
      </div>
    </StepWrap>
  );
}

export function Step2() {
  return (
    <StepWrap id="step-2">
      <StepHeading
        n={2}
        title="Install Visual Studio Code"
        desc="VS Code is the recommended editor for Python development in this guide."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <LinkCard
          title="VS Code download"
          href="https://code.visualstudio.com/"
          description="Download the editor from the official website."
        />
        <TopicCard
          title="Recommended install options"
          description="Enable Add to PATH and Open with Code so the code command works from the terminal."
        />
      </div>

      <div className="mt-5 space-y-3 rounded-md border border-vscode-border bg-vscode-panel p-4 text-sm text-vscode-text">
        <p>
          Open a terminal and confirm the install with <Chip>code --version</Chip>.
        </p>
        <p>
          If the command is missing, restart the shell or reinstall VS Code with
          the PATH option enabled.
        </p>
      </div>
    </StepWrap>
  );
}

export function Step3() {
  return (
    <StepWrap id="step-3">
      <StepHeading
        n={3}
        title="Install the Python extension"
        desc="This gives VS Code language support, debugging, and environment discovery."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <LinkCard
          title="Python extension"
          href="https://marketplace.visualstudio.com/items?itemName=ms-python.python"
          description="The official Microsoft extension for Python in VS Code."
        />
        <TopicCard
          title="Why install it"
          description="It adds IntelliSense, debugging, code navigation, and interpreter detection."
        />
      </div>

      <div className="mt-5 rounded-md border border-vscode-border bg-vscode-panel p-4">
        <div className="font-mono text-sm font-semibold text-vscode-teal">
          Quick install path
        </div>
        <ol className="mt-3 space-y-2 text-sm text-vscode-text">
          <li>
            • Open the Extensions view with <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>X</Kbd>.
          </li>
          <li>• Search for Python.</li>
          <li>• Install the Microsoft Python extension.</li>
        </ol>
      </div>
    </StepWrap>
  );
}

export function Step4() {
  return (
    <StepWrap id="step-4">
      <StepHeading
        n={4}
        title="Install supporting Python tools"
        desc="These extensions improve autocomplete, formatting, and notebook support."
      />

      <div className="grid gap-3 md:grid-cols-3">
        <ToolCard
          title="Pylance"
          href="https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance"
          install="Provides fast autocomplete, type checking, and stronger analysis."
          useFor={[
            "Better suggestions",
            "Type-aware navigation",
            "Fast diagnostics",
          ]}
        />
        <ToolCard
          title="Jupyter"
          href="https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter"
          install="Useful for notebooks, data science work, and quick exploratory runs."
          useFor={["Notebooks", "Data science", "AI experiments"]}
        />
        <ToolCard
          title="Black Formatter"
          href="https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter"
          install="Automatically formats Python code with the Black style guide."
          useFor={[
            "Consistent formatting",
            "Save-time formatting",
            "Cleaner diffs",
          ]}
        />
      </div>
    </StepWrap>
  );
}

export function Step5() {
  return (
    <StepWrap id="step-5">
      <StepHeading
        n={5}
        title="Select the Python interpreter"
        desc="Choose the Python version that VS Code should use for the current workspace."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <TopicCard
          title="Open the command palette"
          description="Press Ctrl + Shift + P, then search for Python: Select Interpreter."
        />
        <TopicCard
          title="Pick your interpreter"
          description="Choose the Python 3.12 or newer installation that matches your project."
        />
      </div>

      <div className="mt-5 rounded-md border border-vscode-border bg-vscode-panel p-4">
        <div className="font-mono text-sm font-semibold text-vscode-teal">
          What this changes
        </div>
        <p className="mt-2 text-sm leading-relaxed text-vscode-text">
          VS Code will use that interpreter for IntelliSense, debugging,
          terminal commands, and package discovery inside the workspace.
        </p>
      </div>
    </StepWrap>
  );
}

export function Step6() {
  return (
    <StepWrap id="step-6">
      <StepHeading
        n={6}
        title="Create a virtual environment"
        desc="Keep project dependencies isolated from the system Python install."
      />

      <div className="grid gap-3 lg:grid-cols-2">
        <CodeBlock code="python -m venv .venv" label="windows-venv.bat" />
        <CodeBlock code="python3 -m venv .venv" label="linux-macos-venv.sh" />
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <TopicCard
          title="Windows activation"
          description="PowerShell: .venv\\Scripts\\Activate.ps1  |  Command Prompt: .venv\\Scripts\\activate"
        />
        <TopicCard
          title="Linux / macOS activation"
          description="Run source .venv/bin/activate and confirm that (.venv) appears in the terminal prompt."
        />
      </div>
    </StepWrap>
  );
}

export function Step7() {
  return (
    <StepWrap id="step-7">
      <StepHeading
        n={7}
        title="Upgrade pip"
        desc="Make sure your package manager is current before installing dependencies."
      />

      <div className="grid gap-3 lg:grid-cols-2">
        <CodeBlock
          code="python -m pip install --upgrade pip"
          label="upgrade-pip.sh"
        />
        <CodeBlock code="pip --version" label="check-pip-version.sh" />
      </div>
    </StepWrap>
  );
}

export function Step8() {
  return (
    <StepWrap id="step-8">
      <StepHeading
        n={8}
        title="Install Python packages"
        desc="Install packages directly, then freeze them when you want to lock the environment."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <TopicCard
          title="Install a package"
          description="Use pip install requests as the simplest example for adding dependencies."
        />
        <TopicCard
          title="Save dependencies"
          description="Run pip freeze > requirements.txt to snapshot the current environment."
        />
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <CodeBlock code="pip install requests" label="install-requests.sh" />
        <CodeBlock code="pip list" label="list-packages.sh" />
      </div>

      <div className="mt-5">
        <CodeBlock
          code={`pip freeze > requirements.txt\npip install -r requirements.txt`}
          label="lock-and-reinstall.sh"
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
        title="Create your first Python project"
        desc="A tiny project is the fastest way to confirm that the editor, interpreter, and terminal all agree."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <TopicCard
          title="Suggested structure"
          description="Project, .venv, main.py, requirements.txt, tests, and src are a solid baseline."
        />
        <TopicCard
          title="Run it"
          description="After creating main.py, run python main.py from the project root."
        />
      </div>

      <div className="mt-5">
        <CodeBlock
          code={`PythonProject/\n├── .venv/\n├── main.py\n└── requirements.txt`}
          label="project-structure.txt"
        />
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <CodeBlock code='print("Hello Python")' label="main.py" />
        <CodeBlock code="python main.py" label="run-project.sh" />
      </div>
    </StepWrap>
  );
}

export function Step10() {
  return (
    <StepWrap id="step-10">
      <StepHeading
        n={10}
        title="Configure VS Code settings"
        desc="Set the editor defaults that make Python projects more predictable."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <TopicCard
          title="Open settings JSON"
          description="Use Preferences: Open User Settings (JSON) from the command palette."
        />
        <TopicCard
          title="Recommended defaults"
          description="Turn on format on save, delayed autosave, basic type checking, and the workspace interpreter."
        />
      </div>

      <div className="mt-5">
        <CodeBlock
          code={`{\n  "editor.formatOnSave": true,\n  "files.autoSave": "afterDelay",\n  "python.analysis.typeCheckingMode": "basic",\n  "python.defaultInterpreterPath": ".venv"\n}`}
          label="settings.json"
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
        title="Set up debugging"
        desc="Create a Python debugger configuration so breakpoints and step-through debugging work immediately."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <TopicCard
          title="Add configuration"
          description="Open Run and Debug, then choose Add Configuration and select Python Debugger."
        />
        <TopicCard
          title="Start debugging"
          description="Place a breakpoint and press F5 to launch the debugger."
        />
      </div>

      <div className="mt-5">
        <CodeBlock
          code={`{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Python: Current File",\n      "type": "debugpy",\n      "request": "launch",\n      "program": "${"${file}"}",\n      "console": "integratedTerminal"\n    }\n  ]\n}`}
          label="launch.json"
        />
      </div>
    </StepWrap>
  );
}

export function Step12() {
  return (
    <StepWrap id="step-12">
      <StepHeading
        n={12}
        title="Install common development tools"
        desc="These tools cover package management, dependency isolation, and environment workflows."
      />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <ToolCard
          title="pip"
          href="https://pip.pypa.io/"
          install="The standard Python package manager used throughout this guide."
          useFor={[
            "Install packages",
            "Manage dependencies",
            "Upgrade tooling",
          ]}
        />
        <ToolCard
          title="venv"
          href="https://docs.python.org/3/library/venv.html"
          install="Built-in virtual environment support that keeps project packages isolated."
          useFor={["Project isolation", "Reproducible installs", "Local environments"]}
        />
        <ToolCard
          title="Poetry"
          href="https://python-poetry.org/"
          install="A modern dependency and packaging workflow for Python projects."
          useFor={["Dependency management", "Packaging", "Lock files"]}
        />
        <ToolCard
          title="Conda"
          href="https://docs.conda.io/"
          install="Useful for scientific computing and environments that need non-Python packages."
          useFor={["Data science", "Environment management", "Cross-language stacks"]}
        />
      </div>
    </StepWrap>
  );
}

export function Step13() {
  return (
    <StepWrap id="step-13">
      <StepHeading
        n={13}
        title="Pick the libraries you will actually use"
        desc="Choose packages based on the kind of Python project you plan to build."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            Web development
          </div>
          <div className="mt-3 space-y-3 text-sm text-vscode-text">
            <div>
              <div className="font-semibold text-white">Django</div>
              <a className="text-vscode-blue hover:underline" href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                https://www.djangoproject.com/
              </a>
              <p className="mt-1 text-xs">Install: pip install django</p>
            </div>
            <div>
              <div className="font-semibold text-white">Flask</div>
              <a className="text-vscode-blue hover:underline" href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
                https://flask.palletsprojects.com/
              </a>
              <p className="mt-1 text-xs">Install: pip install flask</p>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            Data science
          </div>
          <div className="mt-3 space-y-3 text-sm text-vscode-text">
            <div>
              <div className="font-semibold text-white">NumPy</div>
              <a className="text-vscode-blue hover:underline" href="https://numpy.org/" target="_blank" rel="noreferrer">
                https://numpy.org/
              </a>
              <p className="mt-1 text-xs">Install: pip install numpy</p>
            </div>
            <div>
              <div className="font-semibold text-white">Pandas</div>
              <a className="text-vscode-blue hover:underline" href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
                https://pandas.pydata.org/
              </a>
              <p className="mt-1 text-xs">Install: pip install pandas</p>
            </div>
            <div>
              <div className="font-semibold text-white">Matplotlib</div>
              <a className="text-vscode-blue hover:underline" href="https://matplotlib.org/" target="_blank" rel="noreferrer">
                https://matplotlib.org/
              </a>
              <p className="mt-1 text-xs">Install: pip install matplotlib</p>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            AI / Machine learning
          </div>
          <div className="mt-3 space-y-3 text-sm text-vscode-text">
            <div>
              <div className="font-semibold text-white">PyTorch</div>
              <a className="text-vscode-blue hover:underline" href="https://pytorch.org/" target="_blank" rel="noreferrer">
                https://pytorch.org/
              </a>
            </div>
            <div>
              <div className="font-semibold text-white">TensorFlow</div>
              <a className="text-vscode-blue hover:underline" href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">
                https://www.tensorflow.org/
              </a>
            </div>
          </div>
        </div>
      </div>
    </StepWrap>
  );
}

export function Step14() {
  return (
    <StepWrap id="step-14">
      <StepHeading
        n={14}
        title="Use the most common terminal commands"
        desc="These are the commands you will reuse constantly in daily Python work."
      />

      <div className="grid gap-3 lg:grid-cols-2">
        <CodeBlock code="python --version" label="check-python.sh" />
        <CodeBlock code="pip list" label="check-packages.sh" />
        <CodeBlock code="pip install package-name" label="install-package.sh" />
        <CodeBlock code="pip uninstall package-name" label="remove-package.sh" />
        <CodeBlock code="deactivate" label="exit-venv.sh" />
        <CodeBlock code="python -m pip install --upgrade pip" label="upgrade-tooling.sh" />
      </div>
    </StepWrap>
  );
}

export function Step15() {
  return (
    <StepWrap id="step-15">
      <StepHeading
        n={15}
        title="Troubleshoot common setup errors"
        desc="Fix the common issues that usually appear in the first setup session."
      />

      <div className="space-y-3">
        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            python is not recognized
          </div>
          <p className="mt-2 text-sm text-vscode-text">
            Reinstall Python, enable Add Python to PATH, then restart the terminal.
          </p>
        </div>

        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            pip is not recognized
          </div>
          <p className="mt-2 text-sm text-vscode-text">
            Run <Chip>python -m ensurepip</Chip> and then upgrade pip again.
          </p>
        </div>

        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            ModuleNotFoundError
          </div>
          <p className="mt-2 text-sm text-vscode-text">
            Install the missing package with pip, or make sure the virtual environment is activated.
          </p>
        </div>

        <div className="rounded-md border border-vscode-border bg-vscode-panel p-4">
          <div className="font-mono text-sm font-semibold text-vscode-teal">
            Permission denied
          </div>
          <p className="mt-2 text-sm text-vscode-text">
            Use the virtual environment and prefer python -m pip install instead of plain pip when needed.
          </p>
        </div>
      </div>
    </StepWrap>
  );
}

export function Checklist() {
  return (
    <StepWrap id="checklist">
      <StepHeading
        n={16}
        title="Final verification checklist"
        desc="Use this before you start building projects."
      />

      <ul className="space-y-2.5">
        <ChecklistItem>Python installed and detected by the terminal.</ChecklistItem>
        <ChecklistItem>pip works and shows a version number.</ChecklistItem>
        <ChecklistItem>VS Code installed and the code command works.</ChecklistItem>
        <ChecklistItem>Python extension, Pylance, and Jupyter are installed.</ChecklistItem>
        <ChecklistItem>Interpreter selected inside VS Code.</ChecklistItem>
        <ChecklistItem>Virtual environment created and activated.</ChecklistItem>
        <ChecklistItem>Packages installed successfully with pip.</ChecklistItem>
        <ChecklistItem>Test project runs from the terminal.</ChecklistItem>
      </ul>
    </StepWrap>
  );
}

export function NextSteps() {
  return (
    <StepWrap id="next-steps">
      <StepHeading
        n={17}
        title="Next steps"
        desc="Continue with the stack that matches your goals."
      />

      <div className="grid gap-3 md:grid-cols-2">
        <TopicCard title="Git setup" description="Add version control early so your Python projects stay reproducible." />
        <TopicCard title="Node.js setup" description="Useful if you plan to build full-stack tools or web frontends alongside Python." />
        <TopicCard title="Docker setup" description="Good for packaging services and making environments portable." />
        <TopicCard title="Database setup" description="Start with SQLite, then move to PostgreSQL or MySQL when needed." />
      </div>
    </StepWrap>
  );
}