# Font Guide — VS Code C/C++ Setup Landing Page

## Font Families Used

| Family | Role | Weights Loaded | Fallback Stack |
|--------|------|---------------|----------------|
| **JetBrains Mono** | Monospace / headings / code | 400, 500, 700 | `ui-monospace, monospace` |
| **Work Sans** | Sans-serif / body text | 400, 500, 600 | `ui-sans-serif, system-ui, sans-serif` |

## Where Each Font Is Applied

### JetBrains Mono (`font-mono`)
Used for anything that should feel like an editor / IDE:
- **Page title** (`h1`) — e.g. "VS Code Setup for C / C++"
- **Section headings** (`h2`) — e.g. "Download required software"
- **Step numbers & labels** — "Step 1", "Step 2", etc.
- **Statistics / counters** — large numbers like "6", "4", "2"
- **Code blocks** (`<pre>`, `<code>`) — terminal & settings.json snippets
- **Keyboard shortcuts** (`<kbd>`) — e.g. `Win + S`
- **Inline code chips** (`<code className="font-mono">`) — `C:\`, `bin`, `gcc --version`
- **Sidebar navigation** — labels like "Explorer", "Download Software", "Environment Path"
- **Top bar breadcrumb** — "VS Code Setup › C / C++"
- **File-name badges** — "guide.md · updated 2026"
- **Extension card metadata** — version strings like "v1.21.6 · by Microsoft"
- **Link labels** — e.g. "code.visualstudio.com/download"
- **Error / warning labels** — "If you get", "error"

### Work Sans (`font-sans`)
Used for readable body copy and UI descriptions:
- **Body paragraphs** — intro text, step descriptions, card descriptions
- **Tool descriptions** — e.g. "Provides gcc / g++ on Windows..."
- **Settings tab labels** — "Windows", "Linux"
- **Button text** — "Get Started", "Jump to settings.json"
- **Error message body** — "Then PATH isn't set correctly..."
- **Competitive programming section** — tool descriptions
- **Footer text** — git path info
- **404 / error pages** — fallback page copy (`__root.tsx`)

## Font Source Imports

Located in `src/styles.css`:

```css
@import "@fontsource/jetbrains-mono/400.css";
@import "@fontsource/jetbrains-mono/500.css";
@import "@fontsource/jetbrains-mono/700.css";

@import "@fontsource/work-sans/400.css";
@import "@fontsource/work-sans/500.css";
@import "@fontsource/work-sans/600.css";
```

## CSS Custom Properties

```css
--font-mono: "JetBrains Mono", ui-monospace, monospace;
--font-sans: "Work Sans", ui-sans-serif, system-ui, sans-serif;
```

## Base Styles

```css
body {
  font-family: var(--font-sans);   /* Work Sans */
}

code, pre, kbd {
  font-family: var(--font-mono);   /* JetBrains Mono */
}
```

## Quick Reference by Element

| Element / Component | Font Family | Weight | Size (typical) |
|---------------------|-------------|--------|----------------|
| `h1` (hero title) | JetBrains Mono | bold (700) | 40–48 px |
| `h2` (section title) | JetBrains Mono | bold (700) | 24–30 px |
| Step number badge | JetBrains Mono | bold (700) | 14 px |
| `p` (body) | Work Sans | 400 | 14–16 px |
| Code block | JetBrains Mono | 400 | 13–14 px |
| `<Chip>` (inline code) | JetBrains Mono | 400 | 12 px |
| `<Kbd>` (keyboard) | JetBrains Mono | 400 | 11 px |
| Sidebar nav item | Work Sans | 400 | 14 px |
| Sidebar header ("Explorer") | Work Sans | 600 | 11 px |
| Stat number | JetBrains Mono | bold (700) | 24 px |
| Stat label | Work Sans | 400 | 12 px |
| Button | Work Sans | 500 | 14 px |
| Extension name | JetBrains Mono | 600 | 14 px |
| Extension meta | JetBrains Mono | 400 | 11 px |
| Link label | JetBrains Mono | 400 | 11 px |
