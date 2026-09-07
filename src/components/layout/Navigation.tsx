"use client";

const links = [
  ["sobre", "Sobre"],
  ["linha-do-tempo", "Linha do Tempo"],
  ["galeria", "Galeria"],
  ["historias", "Histórias"],
];

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function Navigation({
  activeTab = "sobre",
  onTabChange,
}: NavigationProps) {
  return (
    <div className="sticky top-0 z-30 mx-auto max-w-7xl px-4 sm:px-6">
      <nav
        aria-label="Navegação do memorial"
        className="overflow-hidden rounded-b-[2rem] border-x border-b border-[var(--border)] bg-[#A4B494] shadow-[var(--shadow-soft)]"
      >
        <div className="overflow-x-auto px-4 py-2.5 sm:px-6">
          <div className="flex min-w-max items-center gap-1.5 sm:gap-2">
            {links.map(([id, label]) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    onTabChange?.(id);
                    if (typeof window !== "undefined") {
                      window.location.hash = id;
                    }
                  }}
                  className={
                    isActive
                      ? "cursor-pointer rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#2f382a] shadow-sm transition"
                      : "cursor-pointer rounded-xl px-4 py-2 text-sm font-medium text-white/95 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
