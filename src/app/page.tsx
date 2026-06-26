"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpenText,
  Code2,
  Command,
  FileCode2,
  GitBranch,
  LayoutGrid,
  Search,
  TerminalSquare,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type GuideCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  tag: string;
  keywords: string[];
};

const guides: GuideCard[] = [
  {
    title: "VS Code Setup",
    description:
      "A complete developer environment setup for Visual Studio Code with extensions, terminal, Git, compiler, and workflow basics.",
    href: "/vs-code",
    icon: Code2,
    accent: "from-[#0e639c] to-[#094771]",
    tag: "Primary guide",
    keywords: ["vscode", "code", "editor", "terminal", "git", "compiler"],
  },
  {
    title: "Python Setup",
    description:
      "Install Python, configure VS Code, create a virtual environment, and prepare a clean development workflow.",
    href: "/python-setup",
    icon: FileCode2,
    accent: "from-[#4ec9b0] to-[#0e639c]",
    tag: "Language guide",
    keywords: ["python", "venv", "pip", "jupyter", "pylance"],
  },
  {
    title: "C/C++ Setup",
    description:
      "Set up a C and C++ environment with compiler tools, PATH configuration, debugging, and sample projects.",
    href: "/c-vscode",
    icon: TerminalSquare,
    accent: "from-[#ce9178] to-[#0e639c]",
    tag: "Compiler guide",
    keywords: ["c", "cpp", "mingw", "gcc", "g++", "debugging"],
  },
];

const highlights = [
  "Instant client-side filtering",
  "Ctrl+E opens quick search",
  "VS Code-inspired dark popup",
  "Recent queries and smart suggestions",
];

const suggestionPhrases = [
  "Open VS Code Setup",
  "Open Python Setup",
  "Open C/C++ Setup",
  "Find terminal setup",
  "Search Git workflow",
  "Search compiler guide",
];

function buildSearchText(item: GuideCard) {
  return [item.title, item.description, item.tag, ...item.keywords]
    .join(" ")
    .toLowerCase();
}

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [recentQueries, setRecentQueries] = useState<string[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("setup-docs-recent-searches");
    if (stored) {
      try {
        setRecentQueries(JSON.parse(stored));
      } catch {
        setRecentQueries([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "setup-docs-recent-searches",
      JSON.stringify(recentQueries.slice(0, 5)),
    );
  }, [recentQueries]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "e") {
        event.preventDefault();
        setIsOpen(true);
        requestAnimationFrame(() => {
          searchRef.current?.focus();
          searchRef.current?.select();
        });
      }

      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const filteredGuides = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return guides;
    }

    return guides.filter((guide) =>
      buildSearchText(guide).includes(normalized),
    );
  }, [query]);

  const filteredSuggestions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return suggestionPhrases;
    }

    return suggestionPhrases.filter((suggestion) =>
      suggestion.toLowerCase().includes(normalized),
    );
  }, [query]);

  const handleAddRecent = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setRecentQueries((current) => {
      const next = [trimmed, ...current.filter((item) => item !== trimmed)];
      return next.slice(0, 5);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    handleAddRecent(trimmed);
    const firstMatch = filteredGuides[0];
    if (firstMatch) {
      setIsOpen(false);
      router.push(firstMatch.href);
    }
  };

  const handleQuickSelect = (value: string) => {
    setQuery(value);
    requestAnimationFrame(() => {
      searchRef.current?.focus();
      searchRef.current?.select();
    });
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,99,156,0.22),transparent_34%),linear-gradient(180deg,#181818_0%,#1e1e1e_35%,#171717_100%)] text-vscode-text">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-12 px-6 py-10 lg:px-10 lg:py-14">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(30,30,30,0.95),transparent)]" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-vscode-border bg-vscode-panel px-3 py-1 text-xs font-mono text-vscode-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-vscode-teal" />
              quick open the guide hub
            </div>
            <h1 className="max-w-3xl font-mono text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Your setup hub,
              <br />
              <span className="text-vscode-blue">built like VS Code</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-vscode-text sm:text-lg">
              Discover VS Code, Python, and C/C++ environment guides with a
              command-palette style interface. Scroll down to explore sections
              for search, guides, and workflow details.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-vscode-blue text-white hover:bg-vscode-blue/90"
              >
                Open quick search
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-vscode-border bg-transparent text-vscode-text hover:bg-vscode-panel hover:text-white"
              >
                <Link href="/vs-code">View VS Code guide</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-vscode-border bg-[#111317]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between gap-3 text-sm text-vscode-muted">
              <span className="font-mono uppercase tracking-[0.22em]">
                Quick open
              </span>
              <span className="rounded border border-vscode-border bg-vscode-panel px-2 py-1 text-[11px] uppercase tracking-[0.28em] text-vscode-muted">
                Ctrl+E
              </span>
            </div>
            <div className="rounded-3xl border border-vscode-border bg-black/20 p-4">
              <div className="mb-3 flex items-center gap-2 text-vscode-muted">
                <Search className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-[0.24em]">
                  search guides
                </span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-vscode-border bg-[#17191d] p-4">
                  <p className="text-sm text-white">VS Code Setup</p>
                  <p className="mt-2 text-xs text-vscode-muted">
                    Open the full Visual Studio Code environment guide.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-vscode-border bg-[#17191d] p-3 text-[13px] text-vscode-text">
                    <div className="font-semibold text-white">Python</div>
                    VS Code + Python dev workflow
                  </div>
                  <div className="rounded-2xl border border-vscode-border bg-[#17191d] p-3 text-[13px] text-vscode-text">
                    <div className="font-semibold text-white">C/C++</div>
                    Compiler, debugging, and terminal setup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full border border-vscode-border bg-black/30 px-4 py-2 text-sm text-vscode-muted shadow-inner shadow-black/30 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-vscode-blue animate-pulse" />
          Scroll to keep exploring
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-8 px-6 pb-20 lg:px-10">
        <div className="rounded-[2.5rem] border border-vscode-border bg-[#131516]/95 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-vscode-border bg-vscode-panel p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <Command className="h-4 w-4 text-vscode-teal" />
                Command palette style
              </div>
              <p className="text-sm leading-7 text-vscode-text">
                The homepage looks and feels like VS Code’s command palette,
                with fast search, inline results, and familiar keyboard cues.
              </p>
            </div>
            <div className="rounded-3xl border border-vscode-border bg-vscode-panel p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <LayoutGrid className="h-4 w-4 text-vscode-teal" />
                Guide sections
              </div>
              <p className="text-sm leading-7 text-vscode-text">
                Scroll down to discover each guide section, so users can digest
                the content as they move through the page.
              </p>
            </div>
            <div className="rounded-3xl border border-vscode-border bg-vscode-panel p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <Workflow className="h-4 w-4 text-vscode-teal" />
                Fast local search
              </div>
              <p className="text-sm leading-7 text-vscode-text">
                Built-in client-side filtering keeps results instant without
                waiting for network requests.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-vscode-border bg-vscode-panel p-6">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
              <BookOpenText className="h-4 w-4 text-vscode-teal" />
              Explore the guides
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="group flex flex-col gap-3 rounded-3xl border border-vscode-border bg-[#181a1e] p-5 transition hover:border-vscode-blue hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-vscode-border bg-vscode-elevated text-vscode-text">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-mono text-base font-semibold text-white">
                          {guide.title}
                        </h2>
                        <p className="text-sm text-vscode-muted">{guide.tag}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-vscode-text">
                      {guide.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          <aside className="rounded-3xl border border-vscode-border bg-vscode-panel p-6">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white">
              <Search className="h-4 w-4 text-vscode-teal" />
              Search behavior
            </div>
            <p className="mb-4 text-sm leading-7 text-vscode-text">
              Use the quick search overlay to type a keyword and jump directly
              to the guide you want. The popup is modeled after VS Code’s
              in-editor search experience.
            </p>
            <div className="space-y-3">
              <div className="rounded-2xl border border-vscode-border bg-[#17191d] p-4 text-sm text-vscode-text">
                <div className="font-semibold text-white">Tip</div>
                Press <span className="font-mono">Ctrl+E</span> to open search,
                then type keywords like{" "}
                <span className="font-mono">Python</span>
                or <span className="font-mono">Git</span>.
              </div>
              <div className="rounded-2xl border border-vscode-border bg-[#17191d] p-4 text-sm text-vscode-text">
                <div className="font-semibold text-white">Quick result</div>
                The first matching guide opens immediately when you submit the
                search.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/70 p-4 backdrop-blur-sm sm:p-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-vscode-border bg-[#0b0d11]/95 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-vscode-border bg-vscode-panel px-4 py-3 shadow-inner shadow-black/20">
                <Search className="h-5 w-5 text-vscode-muted" />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search guides, suggestions, recent history..."
                  aria-label="Quick open search"
                  className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-vscode-muted"
                />
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-vscode-muted">
                  <span className="rounded border border-vscode-border bg-vscode-elevated px-2 py-1">
                    Esc
                  </span>
                  <span className="rounded border border-vscode-border bg-vscode-elevated px-2 py-1">
                    Enter
                  </span>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-3xl border border-vscode-border bg-[#111317] p-4">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-white">
                    Recent searches
                    <button
                      type="button"
                      onClick={() => setRecentQueries([])}
                      className="text-vscode-blue hover:text-white"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-2">
                    {recentQueries.length > 0 ? (
                      recentQueries.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleQuickSelect(item)}
                          className="w-full truncate rounded-2xl border border-vscode-border bg-black/10 px-3 py-2 text-left text-sm text-vscode-text transition hover:bg-white/5 hover:text-white"
                        >
                          {item}
                        </button>
                      ))
                    ) : (
                      <p className="text-sm text-vscode-muted">
                        No recent searches yet. Start typing or use suggestions.
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-3xl border border-vscode-border bg-[#111317] p-4 lg:col-span-2">
                  <div className="mb-3 text-sm font-semibold text-white">
                    Suggestions
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {filteredSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => handleQuickSelect(suggestion)}
                        className="w-full rounded-2xl border border-vscode-border bg-black/10 px-3 py-3 text-left text-sm text-vscode-text transition hover:bg-white/5 hover:text-white"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-vscode-border bg-[#111317] p-4">
                <div className="mb-3 text-sm font-semibold text-white">
                  Guide results
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide) => {
                      const Icon = guide.icon;
                      return (
                        <Link
                          key={guide.title}
                          href={guide.href}
                          onClick={() => handleAddRecent(query)}
                          className="group flex items-start gap-3 rounded-3xl border border-vscode-border bg-[#15171b] p-4 text-left transition hover:border-vscode-blue hover:bg-white/5"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-vscode-border bg-vscode-panel text-vscode-text">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-mono text-sm uppercase tracking-[0.2em] text-vscode-muted">
                              {guide.tag}
                            </div>
                            <h2 className="mt-2 text-base font-semibold text-white">
                              {guide.title}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-vscode-text">
                              {guide.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="rounded-3xl border border-dashed border-vscode-border bg-black/10 p-4 text-sm text-vscode-muted">
                      No guide matches your query yet. Try "VS Code", "Python",
                      or "C/C++".
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
