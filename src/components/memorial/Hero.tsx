import { memorialInfo } from "@/data/memorial";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-7">
      <div className="overflow-hidden rounded-t-[2rem] border-x border-t border-[var(--border)] bg-[#ded9cc] shadow-[var(--shadow-soft)]">
        <div className="relative aspect-[16/10] min-h-[300px] sm:aspect-[16/7]">
          {
            /* Imagem de capa cobrindo todo o espaço */
            <img
              src="/images/capa/capa_.png" 
              alt="Capa de fundo"
              className="absolute top-0 right-0 h-full w-9/11 left-auto object-cover object-center [mask-image:linear-gradient(to_right,transparent_0%,black_40%)]"
            />
          }
          <img
            src="/images/capa/solange_logo.png"
            alt={`Capa em memória de ${memorialInfo.name}`}
            className="absolute inset-0 h-full  object-cover"
          />
          {/* Gradiente e texto sobre a imagem */}
          <div className="absolute inset-0 flex justify-end p-0  bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          
            <div className=" flex flex-col items-center justify-center  text-center -translate-y-20">
              <img
                src="/images/capa/solange_ASSINATURA.png"
                alt={memorialInfo.name}
                className="h-24 w-auto object-contain sm:h-34 lg:h-56"
              />
              <p className="max-w-[280px] sm:max-w-[350px] lg:max-w-[1400px] text-xs font-semibold uppercase tracking-[0.24em] text-black lg:text-2xl lg:tracking-[0.3em] sm:-translate-y-10">
                e a memória do canto coral 
              </p>
              <p className="max-w-[280px] sm:max-w-[350px] lg:max-w-[1400px] text-xs font-semibold uppercase tracking-[0.24em] text-black lg:text-2xl lg:tracking-[0.3em] sm:-translate-y-10">
                no Rio de
                Janeiro
              </p>      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
