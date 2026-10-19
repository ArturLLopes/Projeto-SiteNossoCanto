"use client";

import { useState } from "react";
import {
  FileText,
  Mail,
  Calendar,
  Tag,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Images,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { documentDivisions } from "@/data/memorial";
import type {
  DocumentCategoryType,
  DocumentDivision,
  DocumentItem,
} from "@/types/memorial";

export function Documents() {
  const [selectedCategory, setSelectedCategory] = useState<
    DocumentCategoryType | "todos"
  >("todos");

  const [selectedDoc, setSelectedDoc] = useState<{
    item: DocumentItem;
    divisionTitle: string;
    dateRange: string;
  } | null>(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const displayedDivisions =
    selectedCategory === "todos"
      ? documentDivisions
      : documentDivisions.filter((div) => div.id === selectedCategory);

  function getDivisionIcon(id: DocumentCategoryType) {
    switch (id) {
      case "cartazes":
        return <FileText className="h-5 w-5" />;
      case "convites":
        return <Tag className="h-5 w-5" />;
      case "correspondencias":
        return <Mail className="h-5 w-5" />;
      case "correspondencias_cartas":
        return <Mail className="h-5 w-5" />;
      case "certificados":
        return <BookOpen className="h-5 w-5" />;
      case "programas":
        return <Calendar className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  }

  function getItemImages(item: DocumentItem): string[] {
    const list: string[] = [];
    if (item.images && item.images.length > 0) {
      list.push(...item.images);
    }
    if (item.imageUrl && !list.includes(item.imageUrl)) {
      list.push(item.imageUrl);
    }
    return list;
  }

  function handleOpenDoc(
    item: DocumentItem,
    divisionTitle: string,
    dateRange: string,
  ) {
    setSelectedDoc({ item, divisionTitle, dateRange });
    setActiveImageIndex(0);
  }

  const modalImages = selectedDoc ? getItemImages(selectedDoc.item) : [];

  return (
    <section id="documentos" className="scroll-mt-24 space-y-6">
      <SectionTitle
        eyebrow="Acervo Histórico"
        title="Documentos & Registros"
        description="Preservação de registros originais, cartazes de concertos, convites comemorativos e correspondências que contam a história do Canto Coral e de Solange Pinto Mendonça."
      />

      {/* Sub-menu das 3 divisões */}
      <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-[var(--border)] bg-[#f8f5ee] p-1.5 shadow-sm sm:gap-2.5">
        <button
          type="button"
          onClick={() => setSelectedCategory("todos")}
          className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm ${
            selectedCategory === "todos"
              ? "bg-[#A4B494] text-white shadow-sm"
              : "text-[#4b5447] hover:bg-white/60"
          }`}
        >
          <span>Todos</span>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold">
            {documentDivisions.reduce((acc, d) => acc + d.items.length, 0)}
          </span>
        </button>

        {documentDivisions.map((division) => {
          const isActive = selectedCategory === division.id;
          return (
            <button
              key={division.id}
              type="button"
              onClick={() => setSelectedCategory(division.id)}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm ${
                isActive
                  ? "bg-[#A4B494] text-white shadow-sm"
                  : "text-[#4b5447] hover:bg-white/60"
              }`}
            >
              {getDivisionIcon(division.id)}
              <span>{division.title}</span>
              <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold">
                {division.items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Lista de divisões de documentos */}
      <div className="space-y-6">
        {displayedDivisions.map((division: DocumentDivision) => (
          <Card key={division.id} className="p-5 sm:p-6">
            {/* Cabeçalho da divisão */}
            <div className="flex flex-col gap-2 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#edf0e9] text-[var(--sage-dark)]">
                  {getDivisionIcon(division.id)}
                </span>
                <div>
                  <h3 className="font-display text-xl text-[#393f36]">
                    {division.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--warm-gray)] sm:text-sm">
                    {division.description}
                  </p>
                </div>
              </div>
              {division.dateRange && (
                <span className="inline-flex w-fit items-center gap-1 rounded-full border border-[var(--border)] bg-[#faf8f4] px-3 py-1 text-xs font-semibold text-[var(--sage-dark)]">
                  <Calendar className="h-3 w-3" />
                  {division.dateRange}
                </span>
              )}
            </div>

            {/* Grid de documentos */}
            <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3">
              {division.items.map((item: DocumentItem) => {
                const itemImages = getItemImages(item);
                const coverImage = itemImages[0];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleOpenDoc(item, division.title, division.dateRange)
                    }
                    className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var--sage)]"
                  >
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition group-hover:shadow-md">
                      {/* Visualização / miniatura */}
                      {coverImage ? (
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
                      ) : (
                        <div className="placeholder-sheen flex aspect-[4/3] flex-col justify-between p-3.5 text-xs text-[#6d716a]">
                          <div className="flex items-center justify-between">
                            <span className="rounded-md border border-[var(--border)] bg-white/70 px-2 py-0.5 font-mono text-[10px] text-[#555]">
                              DOCUMENTO
                            </span>

                            {getDivisionIcon(item.category)}
                          </div>

                          <span className="line-clamp-2 font-medium text-[#4f564b]">
                            {item.title}
                          </span>
                        </div>
                      )}
                      {/* Texto informativo */}
                      <div className="p-3">
                        <h4 className="line-clamp-1 font-display text-sm font-semibold text-[#383e35]">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      {/* Modal de documento com suporte a ampliação */}
      <Modal
        open={Boolean(selectedDoc)}
        title={selectedDoc?.item.title ?? ""}
        onClose={() => {
          setSelectedDoc(null);
          setIsLightboxOpen(false);
        }}
      >
        {selectedDoc && (
          <div className="space-y-4">
            {/* Visualização de imagem com carrossel e clique para zoom */}
            {modalImages.length > 0 ? (
              <div className="space-y-2">
                <div
                  className="group/img relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-black transition"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Clique na foto para ampliar em tela cheia com zoom"
                >
                  <Image
                    src={modalImages[activeImageIndex]}
                    alt={`${selectedDoc.item.title} - Foto ${activeImageIndex + 1}`}
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

                  {/* Botões de navegação se houver mais de uma foto */}
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

                {/* Miniaturas se houver mais de uma foto */}
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
            ) : (
              <div className="placeholder-sheen flex aspect-[16/10] flex-col items-center justify-center rounded-2xl p-6 text-center text-sm font-medium text-[#6d716a]">
                <div className="mb-2 grid h-12 w-12 place-items-center rounded-full bg-white/60 text-[var(--sage-dark)]">
                  {getDivisionIcon(selectedDoc.item.category)}
                </div>
                <span className="font-display text-base text-[#393f36]">
                  {selectedDoc.item.title}
                </span>
                <span className="mt-1 text-xs text-[var(--warm-gray)]">
                  Registro documental preservado no acervo
                </span>
              </div>
            )}

            {/* Metadados e conteúdo */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-2 text-xs text-[var(--warm-gray)]">
                <span className="font-medium text-[var(--sage-dark)]">
                  Divisão: {selectedDoc.divisionTitle}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f4f1ea] px-2.5 py-0.5 font-medium text-[#444]">
                  <Calendar className="h-3 w-3" />
                  {selectedDoc.item.date}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--warm-gray)]">
                  Descrição do Documento
                </h4>
                <p className="mt-1 text-sm leading-6 text-[#4a5247]">
                  {selectedDoc.item.description}
                </p>
              </div>

              {selectedDoc.item.notes && (
                <div className="rounded-xl bg-[#f8f6f0] p-3 text-xs leading-5 text-[#5a6256]">
                  <span className="font-semibold text-[#3b4237]">
                    Observação do acervo:{" "}
                  </span>
                  {selectedDoc.item.notes}
                </div>
              )}

              {/* <p className="border-t border-[var(--border)] pt-2 text-xs text-[#777b73]">
                Acervo documental preservado e digitalizado com carinho.
              </p> */}
            </div>
          </div>
        )}
      </Modal>

      {/* Visualizador Lightbox em tela cheia com Zoom */}
      <ImageLightbox
        open={isLightboxOpen}
        images={modalImages}
        currentIndex={activeImageIndex}
        title={selectedDoc?.item.title}
        onClose={() => setIsLightboxOpen(false)}
        onIndexChange={setActiveImageIndex}
      />
    </section>
  );
}
