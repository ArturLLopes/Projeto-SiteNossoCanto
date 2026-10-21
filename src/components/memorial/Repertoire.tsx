"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Images,
  ListMusic,
  Music,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { repertoireItems } from "@/data/memorial";

export function Repertoire() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof repertoireItems)[number] | null
  >(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function getItemImages(item: (typeof repertoireItems)[number]): string[] {
    const list: string[] = [];
    if (item.images && item.images.length > 0) {
      list.push(...item.images);
    }
    if (item.imageUrl && !list.includes(item.imageUrl)) {
      list.push(item.imageUrl);
    }
    return list;
  }

  function handleOpenItem(item: (typeof repertoireItems)[number]) {
    setSelectedItem(item);
    setActiveImageIndex(0);
  }

  const modalImages = selectedItem ? getItemImages(selectedItem) : [];

  return (
    <section id="repertorio" className="scroll-mt-24 space-y-6">
      <SectionTitle
        eyebrow="Acervo Musical"
        title="Repertório apresentado e catalogado"
        description="Registro visual do levantamento de partituras catalogadas no acervo reunido por Solange ao longo de sua carreira."
      />

      {/* Lista de itens do repertório (sem sub-menu) */}
      {repertoireItems.length > 0 ? (
        <Card className="p-5 sm:p-6">
          <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#edf0e9] text-[var(--sage-dark)]">
              <Music className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl text-[#393f36]">
                Repertório apresentado
              </h3>
              <p className="mt-1 text-xs leading-5 text-[var(--warm-gray)] sm:text-sm">
                Registro visual do repertório desenvolvido e catalogado por Solange ao longo de sua carreira.
              </p>
            </div>
          </div>

          {/* Grid de imagens — adaptado para mobile */}
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3">
            {repertoireItems.map((item) => {
              const itemImages = getItemImages(item);
              const coverImage = itemImages[0];

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleOpenItem(item)}
                  className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition group-hover:shadow-md">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e4db]">
                      <Image
                        src={coverImage}
                        alt={item.title}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />

                      {itemImages.length > 1 && (
                        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                          <Images className="h-3 w-3" />
                          {itemImages.length} fotos
                        </span>
                      )}
                    </div>

                    {/* Texto informativo */}
                    <div className="p-3">
                      <h4 className="line-clamp-1 font-display text-sm font-semibold text-[#383e35]">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--warm-gray)]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      ) : (
        <Card className="p-8 text-center sm:p-10">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#edf0e9] text-[var(--sage-dark)]">
            <Music className="h-7 w-7" />
          </span>
          <h3 className="mt-4 font-display text-lg text-[#393f36]">
            Acervo em preparação
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--warm-gray)]">
            As imagens do repertório serão disponibilizadas neste espaço em
            breve. A relação de obras já está documentada na seção de
            documentos.
          </p>
        </Card>
      )}

      {/* Modal de imagem com suporte a ampliação */}
      <Modal
        open={Boolean(selectedItem)}
        title={selectedItem?.title ?? ""}
        onClose={() => {
          setSelectedItem(null);
          setIsLightboxOpen(false);
        }}
      >
        {selectedItem && (
          <div className="space-y-4">
            {modalImages.length > 0 ? (
              <div className="space-y-2">
                <div
                  className="group/img relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-black transition"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Clique na foto para ampliar em tela cheia com zoom"
                >
                  <Image
                    src={modalImages[activeImageIndex]}
                    alt={`${selectedItem.title} - Foto ${activeImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    loading="eager"
                    className="pointer-events-none select-none object-contain transition duration-200 group-hover/img:scale-[1.02]"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />

                  {/* Indicador de clique para ampliar */}
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur transition group-hover/img:bg-black/90">
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>Ampliar</span>
                  </div>

                  {/* Navegação entre fotos */}
                  {modalImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) =>
                            prev > 0 ? prev - 1 : modalImages.length - 1,
                          );
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90 focus:outline-none"
                        aria-label="Foto anterior"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) =>
                            prev < modalImages.length - 1 ? prev + 1 : 0,
                          );
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90 focus:outline-none"
                        aria-label="Próxima foto"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
                        {activeImageIndex + 1} / {modalImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Miniaturas */}
                {modalImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {modalImages.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                          activeImageIndex === idx
                            ? "border-[#A4B494] ring-2 ring-[#A4B494]/40"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Miniatura ${idx + 1}`}
                          fill
                          sizes="56px"
                          loading="lazy"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            {/* Metadados */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-2 text-xs text-[var(--warm-gray)]">
                <span className="inline-flex items-center gap-1.5 font-medium text-[var(--sage-dark)]">
                  <ListMusic className="h-3.5 w-3.5" />
                  Repertório
                </span>
                {selectedItem.date && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#f4f1ea] px-2.5 py-0.5 font-medium text-[#444]">
                    <Calendar className="h-3 w-3" />
                    {selectedItem.date}
                  </span>
                )}
              </div>

              {selectedItem.description && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--warm-gray)]">
                    Sobre o Repertório
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-[#4a5247]">
                    {selectedItem.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Lightbox em tela cheia com Zoom */}
      <ImageLightbox
        open={isLightboxOpen}
        images={modalImages}
        currentIndex={activeImageIndex}
        title={selectedItem?.title}
        onClose={() => setIsLightboxOpen(false)}
        onIndexChange={setActiveImageIndex}
      />
    </section>
  );
}
