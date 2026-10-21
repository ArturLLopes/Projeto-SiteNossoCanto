
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="mb-5">
      {eyebrow && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage-dark)]">
          {eyebrow}
        </div>
      )}

      <h2 className="font-display text-3xl font-medium text-[#343932] sm:text-3xl">
        {title}
      </h2>

      {description && (
        <div className="mt-2 max-w-2xl break-words text-base leading-6 text-[var(--warm-gray)]">
          {description}
        </div>
      )}
    </header>
  );
}
