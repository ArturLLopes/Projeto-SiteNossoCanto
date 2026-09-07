import { Avatar } from "@/components/ui/Avatar";
import { memorialInfo } from "@/data/memorial";
export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-7">
      <div className="overflow-hidden rounded-t-[2rem] border-x border-t border-[var(--border)] bg-[#ded9cc] shadow-[var(--shadow-soft)]">
        <div className="placeholder-sheen relative aspect-[16/10] min-h-[300px] sm:aspect-[16/7]">
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#293127]/80 via-[#293127]/25 to-transparent p-5 sm:p-10">
            <div className="flex w-full items-end gap-4 sm:gap-7">
              <Avatar />
              <div className="pb-1 text-white">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                  Em memória
                </p>
                <h1 className="font-display text-3xl leading-tight sm:text-5xl">
                  {memorialInfo.name}
                </h1>
                <p className="mt-2 text-sm text-white/85 sm:text-base">
                  {memorialInfo.birthDate.slice(-4)} —{" "}
                  {memorialInfo.deathDate.slice(-4)}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
                  {memorialInfo.quote}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/25 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
            FOTO DE CAPA RESERVADA
          </div>
        </div>
      </div>
    </section>
  );
}
