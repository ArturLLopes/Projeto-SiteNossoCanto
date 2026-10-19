"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface ImageLightboxProps {
  open: boolean;
  images: string[];
  currentIndex?: number;
  title?: string;
  onClose: () => void;
  onIndexChange?: (newIndex: number) => void;
}

// Evita usar setState em um efeito apenas para detectar a montagem.
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ImageLightbox({
  open,
  images,
  currentIndex = 0,
  title,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // null significa que o usuário ainda não alterou a seleção local.
  const [internalIndex, setInternalIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Quando existe onIndexChange, o componente pai controla o índice.
  // Caso contrário, o componente mantém sua própria seleção.
  const selectedIndex =
    onIndexChange != null
      ? currentIndex
      : (internalIndex ?? currentIndex);

  const safeIndex =
    selectedIndex >= 0 && selectedIndex < images.length
      ? selectedIndex
      : 0;

  const currentImg = images[safeIndex];

  // Bloqueia a rolagem da página enquanto o visualizador está aberto.
  useEffect(() => {
    if (!open || !mounted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, mounted]);

  function handleClose() {
    setIsZoomed(false);
    setInternalIndex(null);
    onClose();
  }

  function handleSelect(index: number) {
    setIsZoomed(false);
    setInternalIndex(index);
    onIndexChange?.(index);
  }

  function goToPrev() {
    if (images.length <= 1) return;

    const newIndex =
      safeIndex > 0 ? safeIndex - 1 : images.length - 1;

    handleSelect(newIndex);
  }

  function goToNext() {
    if (images.length <= 1) return;

    const newIndex =
      safeIndex < images.length - 1 ? safeIndex + 1 : 0;

    handleSelect(newIndex);
  }

  // Atalhos de teclado.
  useEffect(() => {
    if (!open || !mounted || images.length === 0) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      } else if (event.key === "ArrowLeft") {
        goToPrev();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, mounted, images.length, safeIndex, onClose]);

  if (!mounted || !open || !currentImg) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] flex flex-col justify-between bg-black/20 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem ampliada"
      onClick={handleClose}
    >
      {/* Barra superior */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/15 pb-3 text-white">
        <div className="min-w-0 flex-1">
          {title && (
            <h3 className="truncate font-display text-base font-semibold sm:text-lg">
              {title}
            </h3>
          )}

          {images.length > 1 && (
            <p className="text-xs text-white/70">
              Foto {safeIndex + 1} de {images.length}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Botão de zoom */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIsZoomed((previous) => !previous);
            }}
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

          {/* Botão de fechar */}
          <button
            type="button"
            onClick={handleClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white transition hover:bg-red-600/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            title="Fechar visualização (ESC)"
            aria-label="Fechar visualização"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Área central da imagem */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto py-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={`flex max-h-full max-w-full items-center justify-center transition-transform duration-300 ${
            isZoomed
              ? "scale-[1.8] cursor-zoom-out"
              : "scale-100 cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed((previous) => !previous)}
        >
          <img
            src={currentImg}
            alt={title ? `${title} ampliada` : "Imagem ampliada"}
            className="max-h-[75vh] max-w-[94vw] rounded-xl object-contain shadow-2xl transition duration-200 select-none pointer-events-none"
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>

        {/* Setas de navegação */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrev();
              }}
              className="absolute left-1 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur transition hover:bg-white hover:text-black focus:outline-none sm:left-4"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              className="absolute right-1 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur transition hover:bg-white hover:text-black focus:outline-none sm:right-4"
              aria-label="Próxima foto"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Barra inferior e miniaturas */}
      <div
        className="flex shrink-0 flex-col items-center gap-2 border-t border-white/15 pt-2"
        onClick={(event) => event.stopPropagation()}
      >
        {images.length > 1 && (
          <div className="flex max-w-full gap-2 overflow-x-auto py-1 scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={`${img}-${index}`}
                type="button"
                onClick={() => handleSelect(index)}
                className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  safeIndex === index
                    ? "scale-105 border-white ring-2 ring-white/50"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
                aria-label={`Selecionar foto ${index + 1}`}
                aria-current={safeIndex === index ? "true" : undefined}
              >
                <img
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-[11px] text-white/60">
          Clique na foto para alternar o zoom • Pressione ESC para fechar
        </p>
      </div>
    </div>,
    document.body,
  );
}