"use client";

import { Home } from "lucide-react";

const links: Array<{ id: string; label: string; isHome?: boolean }> = [
  { id: "inicio", label: "Início", isHome: true },
  { id: "sobre", label: "Sobre" },
  { id: "linha-do-tempo", label: "Linha do Tempo" },
  { id: "galeria", label: "Galeria" },
  { id: "documentos", label: "Documentos" },
  { id: "historias", label: "Trabalhos Acadêmicos" },
];

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function Navigation({
  activeTab = "inicio",
  onTabChange,
}: NavigationProps) {
  return (
    <div className="sticky top-0 z-30 mx-auto max-w-7xl px-3 sm:px-6">
      <nav
        aria-label="Navegação do memorial"
        className="overflow-hidden rounded-b-[1.5rem] border-x border-b border-[var(--border)] bg-[#A4B494] shadow-[var(--shadow-soft)] sm:rounded-b-[2rem]"
      >
        <div className="px-2.5 py-2 sm:px-6 sm:py-2.5">
          {/* Layout em 3 colunas no mobile (2 linhas perfeitas de 3 itens) e flex no desktop, eliminando barra de rolagem */}
          <div className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap sm:items-center sm:gap-2">
            {links.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => {
                    onTabChange?.(link.id);
                    if (typeof window !== "undefined") {
                      window.location.hash = link.id;
                      if (link.isHome) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }
                  }}
                  className={
                    isActive
                      ? "flex cursor-pointer items-center justify-center gap-1 rounded-xl bg-white px-2 py-2 text-center text-xs font-semibold text-[#2f382a] shadow-sm transition sm:px-4 sm:py-2 sm:text-sm"
                      : "flex cursor-pointer items-center justify-center gap-1 rounded-xl px-2 py-2 text-center text-xs font-medium text-white/95 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-4 sm:py-2 sm:text-sm"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.isHome && (
                    <Home className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  )}
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
