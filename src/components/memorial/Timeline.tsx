
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { timelineEvents } from "@/data/memorial";

export function Timeline() {
  return (
    <section id="linha-do-tempo" className="scroll-mt-24">
      <SectionTitle
        eyebrow="Linha do Tempo"
        title="Momentos que marcaram sua trajetória"
      />

      <Card className="p-5 sm:p-8">
        <ol className="relative ml-3 space-y-8 border-l border-[#d8d2c6] pl-6 sm:ml-4 sm:pl-8">
          {timelineEvents.map((event) => (
            <li
              key={`${event.date}-${event.title}`}
              className="relative"
            >
              {/* Círculo alinhado ao centro da linha vertical */}
              <span
                className="absolute -left-[34px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#d8d2c6] bg-white text-[var(--sage-dark)] sm:-left-[42px]"
                aria-hidden="true"
              >
                <Check className="h-2.5 w-2.5" />
              </span>

              {/* Data e conteúdo */}
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-5">
                <span className="text-sm font-semibold leading-6 text-[var(--sage-dark)]">
                  {event.date}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-lg leading-6 text-[#423b3f]">
                    {event.title.trim()}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[var(--warm-gray)]">
                    {event.description.trim()}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}
