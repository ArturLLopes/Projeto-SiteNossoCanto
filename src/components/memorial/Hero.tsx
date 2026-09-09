import { memorialInfo } from "@/data/memorial";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-7">
      <div className="overflow-hidden rounded-t-[2rem] border-x border-t border-[var(--border)] bg-[#ded9cc] shadow-[var(--shadow-soft)]">
        <div className="relative w-full max-w-full aspect-[16/10] min-h-[300px] sm:aspect-[16/7]">
          <img
            src="/images/capa/capa_.png"
            alt="Capa de fundo"
            className="absolute top-0 right-0 h-full w-9/11 left-auto object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,black_40%)]"
          />

          <img
            src="/images/capa/solange_logo.png"
            alt={`Capa em memória de ${memorialInfo.name}`}
            className="absolute inset-0 h-full  object-cover  w-44 sm:w-50 md:w-64 lg:w-130 xl:w-150"
          />

          {/* Gradiente e texto sobre a imagem */}
          <div className="absolute inset-0 flex justify-end p-4 md:p-8">
            <div className="flex flex-col items-center justify-center text-center -translate-y-5 sm:-translate-y-8  lg:-translate-y-12 xl:-translate-y-18">
              <img
                src="/images/capa/solange_ASSINATURA.png"
                alt={memorialInfo.name}
                className="h-12 w-auto object-contain sm:h-22 md:h-28 lg:h-32 xl:h-42"
              />

              <div className="mt-1 flex flex-col items-center gap-0.5 sm:mt-2 md:gap-1">
                <p className="max-w-[280px] text-[10px] font-semibold uppercase tracking-[0.18em] text-black sm:max-w-[380px] sm:text-xs md:max-w-[480px] md:text-sm lg:max-w-[700px] lg:text-xl lg:tracking-[0.25em]">
                  e a memória do canto coral
                </p>

                <p className="max-w-[280px] text-[10px] font-semibold uppercase tracking-[0.18em] text-black sm:max-w-[380px] sm:text-xs md:max-w-[480px] md:text-sm lg:max-w-[700px] lg:text-xl lg:tracking-[0.25em]">
                  no Rio de Janeiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
