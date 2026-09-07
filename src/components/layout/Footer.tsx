import { memorialInfo } from "@/data/memorial";
export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#ece7dc]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg text-[#3e443d]">
              {memorialInfo.name}
            </p>
            <p className="mt-1 text-sm text-[var(--warm-gray)]">
              Memorial criado com carinho.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[#596057]">
            <a href="#sobre">Sobre</a>
            <a href="#galeria">Galeria</a>
            <a href="#historias">Histórias</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
