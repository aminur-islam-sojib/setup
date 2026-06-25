import { ReactNode } from "react";

export default function StepWrap({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-vscode-border pt-14 mt-16"
    >
      {children}
    </section>
  );
}
