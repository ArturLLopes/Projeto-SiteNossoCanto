"use client";

import {
  Home,
  User,
  Clock,
  Image,
  Music,
  FileText,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const links: Array<{
  id: string;
  label: string;
  icon: LucideIcon;
  isHome?: boolean;
}> = [
  { id: "inicio", label: "Início", icon: Home, isHome: true },
  { id: "sobre", label: "Sobre", icon: User },
  { id: "linha-do-tempo", label: "Linha do Tempo", icon: Clock },
  { id: "galeria", label: "Galeria", icon: Image },
  { id: "repertorio", label: "Repertório", icon: Music },
  { id: "documentos", label: "Documentos", icon: FileText },
  { id: "historias", label: "Trabalhos Acadêmicos", icon: GraduationCap },
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
    <div className="sticky top-0 z-30 mx-auto max-w-7xl px-4 sm:px-6">
      <nav
        aria-label="Navegação do memorial"
        className="overflow-hidden rounded-b-[1.5rem] border-x border-b border-[var(--border)] bg-[#A4B494] shadow-[var(--shadow-soft)] sm:rounded-b-[2rem]"
      >
        <div className="px-2 py-2 sm:px-6 sm:py-2.5">
          {/* Mobile: ícones centralizados em linha | Desktop: ícone + texto */}
          <div className="flex items-center justify-around gap-1 sm:flex-wrap sm:justify-start sm:gap-2">
            {links.map((link) => {
              const isActive = activeTab === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  type="button"
                  title={link.label}
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
                      ? "flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white px-2.5 py-2 text-center text-[#2f382a] shadow-sm transition sm:px-4 sm:py-2"
                      : "flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-2.5 py-2 text-center text-white/90 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-4 sm:py-2"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0 sm:h-4 sm:w-4" />
                  {/* Texto visível apenas no desktop */}
                  <span className="hidden text-sm font-medium sm:inline">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
