"use client";
import { X } from "lucide-react";
import type { KeyboardEvent } from "react";
export function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div className="relative max-h-[94vh] w-full max-w-2xl overflow-auto rounded-3xl bg-white p-4 shadow-2xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="modal-title" className="font-display text-2xl">
            {title}
          </h2>
          <button
            className="grid h-11 w-11 place-items-center rounded-full hover:bg-[#f2efe8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
