import { Leaf } from "lucide-react";
import { memorialInfo } from "@/data/memorial";
export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[#fbfaf7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#465247]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e4e9df]">
            <Leaf className="h-4 w-4" aria-hidden="true" />
          </span>
          {memorialInfo.name}
        </a>
        <span className="hidden text-xs text-[var(--warm-gray)] sm:block">
          Memorial Digital
        </span>
      </div>
    </header>
  );
}
