export default function Footer() {
  return (
    <footer className="mt-20 border-t border-vscode-border pt-8 pb-4">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-vscode-muted">
        <div className="font-mono">
          <span className="text-vscode-teal">~/</span>vs-code-cpp-setup ·{" "}
          <span className="text-vscode-text">main</span>
        </div>
        <div>Crafted for developers learning C/C++ on Windows & Linux.</div>
      </div>
    </footer>
  );
}
