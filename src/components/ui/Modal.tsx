"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

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
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[94vh] w-full max-w-2xl overflow-auto rounded-3xl bg-white p-4 shadow-2xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="modal-title" className="font-display text-2xl">
            {title}
          </h2>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-[#666] hover:bg-[#f2efe8] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
            onClick={onClose}
            aria-label="Fechar (ESC)"
            title="Fechar (ESC)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
