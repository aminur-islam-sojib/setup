 export default function StepHeading({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-vscode-blue font-mono text-sm font-bold text-white">
          {n}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-vscode-muted">
          Step {n}
        </span>
      </div>
      <h2 className="font-mono text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>
      {desc && <p className="mt-2 text-sm text-vscode-text">{desc}</p>}
    </div>
  );
}
