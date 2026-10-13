"use client";

import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";

interface ImageLightboxProps {
  open: boolean;
  images: string[];
  currentIndex?: number;
  title?: string;
  onClose: () => void;
  onIndexChange?: (newIndex: number) => void;
}

export function ImageLightbox({
  open,
  images,
  currentIndex = 0,
  title,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setInternalIndex(currentIndex);
    setIsZoomed(false);
  }, [currentIndex, open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        goToPrev();
      } else if (e.key === "ArrowRight" && images.length > 1) {
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, images.length, internalIndex]);

  if (!open || images.length === 0) return null;

  const currentImg = images[internalIndex] || images[0];

  function goToPrev() {
    setIsZoomed(false);
    const newIdx = internalIndex > 0 ? internalIndex - 1 : images.length - 1;
    setInternalIndex(newIdx);
    onIndexChange?.(newIdx);
  }

  function goToNext() {
    setIsZoomed(false);
    const newIdx = internalIndex < images.length - 1 ? internalIndex + 1 : 0;
    setInternalIndex(newIdx);
    onIndexChange?.(newIdx);
  }

  function handleSelect(idx: number) {
    setIsZoomed(false);
    setInternalIndex(idx);
    onIndexChange?.(idx);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem ampliada"
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-3 text-white">
        <div className="min-w-0 flex-1">
          {title && (
            <h3 className="truncate font-display text-base font-semibold sm:text-lg">
              {title}
            </h3>
          )}
          {images.length > 1 && (
            <p className="text-xs text-white/70">
              Foto {internalIndex + 1} de {images.length}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Botão de Zoom */}
          <button
            type="button"
            onClick={() => setIsZoomed((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            title={isZoomed ? "Diminuir zoom" : "Ampliar zoom (1.8x)"}
            aria-label={isZoomed ? "Diminuir zoom" : "Ampliar zoom"}
          >
            {isZoomed ? (
              <ZoomOut className="h-5 w-5" />
            ) : (
              <ZoomIn className="h-5 w-5" />
            )}
          </button>

          {/* Botão de Fechar */}
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white transition hover:bg-red-600/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            title="Fechar visualização (ESC)"
            aria-label="Fechar visualização"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Área central da imagem */}
      <div className="relative flex flex-1 items-center justify-center overflow-auto py-2">
        {/* Imagem ampliada */}
        <div
          className={`flex items-center justify-center transition-transform duration-300 ${
            isZoomed
              ? "cursor-zoom-out scale-[1.8]"
              : "cursor-zoom-in scale-100"
          }`}
          onClick={() => setIsZoomed((prev) => !prev)}
        >
          <img
            src={currentImg}
            alt={title ? `${title} ampliada` : "Imagem ampliada"}
            className="max-h-[75vh] max-w-[94vw] rounded-xl object-contain shadow-2xl transition duration-200 select-none"
          />
        </div>

        {/* Setas de navegação */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur transition hover:bg-white hover:text-black focus:outline-none"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur transition hover:bg-white hover:text-black focus:outline-none"
              aria-label="Próxima foto"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Barra inferior com miniaturas e dica */}
      <div className="flex flex-col items-center gap-2 border-t border-white/15 pt-2">
        {images.length > 1 && (
          <div className="flex max-w-full gap-2 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  internalIndex === idx
                    ? "border-white ring-2 ring-white/50 scale-105"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
        <p className="text-center text-[11px] text-white/60">
          Clique na foto para alternar o zoom • Pressione ESC para fechar
        </p>
      </div>
    </div>
  );
}
