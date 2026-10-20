"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, ZoomIn } from "lucide-react";

import { stories } from "@/data/memorial";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Stories() {
  const [selectedStory, setSelectedStory] = useState<
    (typeof stories)[number] | null
  >(null);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function closeModal() {
    setSelectedStory(null);
    setIsLightboxOpen(false);
  }

  return (
    <section id="historias" className="scroll-mt-24">
      <SectionTitle
        eyebrow="Trabalhos Acadêmicos"
        title="Celebrando a Arte, a identidade e a tradição viva"
        description=""
      />

      <div className="grid gap-4 md:grid-cols-3">
        {stories.map((story) => (
          <Card key={story.id} className="flex flex-col p-5">
            <div className="text-xs text-[var(--warm-gray)]">{story.date}</div>

            <h3 className="mt-2 font-display text-xl text-[#3c423b]">
              {story.title}
            </h3>

            {/* Imagem do card */}
            <button
              type="button"
              onClick={() => setSelectedStory(story)}
              className="group relative mt-3 block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#e8e4db] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
              aria-label={`Abrir imagem de ${story.title}`}
            >
              {story.image && (
                <Image
                  src={story.image}
                  alt={`Imagem de ${story.title}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              <span className="absolute right-3 top-3 rounded-full bg-black/65 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
            </button>

            <p className="mt-3 flex-1 text-justify indent-8 text-sm leading-6 text-[#4a5247]">
              {story.summary}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <span className="text-xs font-medium text-[#545a51]">
                Por {story.author}
              </span>
            </div>

            {/* Link para abrir os detalhes */}
            {story.url && (
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-10 w-fit items-center gap-1 text-sm font-semibold text-[var(--sage-dark)] transition-colors hover:text-[#3c423b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
              >
                Saiba mais...
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </Card>
        ))}
      </div>

      {/* Modal com os detalhes e a imagem */}
      <Modal
        open={selectedStory !== null}
        title={selectedStory?.title ?? ""}
        onClose={closeModal}
      >
        {selectedStory && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[var(--border)] pb-3 text-xs text-[var(--warm-gray)]">
              <Calendar className="h-4 w-4" />
              <span>{selectedStory.date}</span>
            </div>

            {/* Clique na imagem para abrir o visualizador */}
            {selectedStory.image && (
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsLightboxOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setIsLightboxOpen(true);
                  }
                }}
                className="group/img relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
                title="Clique na imagem para ampliar em tela cheia"
                aria-label={`Ampliar imagem de ${selectedStory.title}`}
              >
                <Image
                  src={selectedStory.image}
                  alt={`Imagem de ${selectedStory.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  draggable={false}
                  onContextMenu={(event) => event.preventDefault()}
                  className="pointer-events-none select-none object-contain transition-transform duration-200 group-hover/img:scale-[1.02]"
                />

                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur">
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>Ampliar</span>
                </div>
              </div>
            )}
            {/* Informações do trabalho */}
            <div className="space-y-3">
              <h3 className="font-display text-xl text-[#3c423b]">
                {selectedStory.title}
              </h3>

              <p className="whitespace-pre-line text-justify text-sm leading-7 text-[#4a5247]">
                {selectedStory.summary}
              </p>

              <div className="border-t border-[var(--border)] pt-3">
                <span className="text-xs font-medium text-[#545a51]">
                  Por {selectedStory.author}
                </span>
              </div>
              {selectedStory.url && (
                <a
                  href={selectedStory.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sage-dark)] hover:underline"
                >
                  Acessar conteúdo completo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Visualizador ampliado reutilizando o componente existente */}
      <ImageLightbox
        open={isLightboxOpen && Boolean(selectedStory?.image)}
        images={selectedStory?.image ? [selectedStory.image] : []}
        currentIndex={0}
        title={selectedStory?.title}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}
