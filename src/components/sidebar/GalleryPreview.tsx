"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { galleryItems } from "@/data/memorial";

export function GalleryPreview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  // Remove itens com ID ou URL de imagem duplicados
  const uniqueGalleryItems = galleryItems.filter(
    (item, index, items) =>
      index ===
      items.findIndex(
        (other) =>
          other.id === item.id ||
          (item.imageUrl && other.imageUrl === item.imageUrl),
      ),
  );

  // Mantém somente imagens válidas para o visualizador
  const previewItems = uniqueGalleryItems
    .filter((item) => Boolean(item.imageUrl))
    .slice(0, 6);

  const lightboxImages = previewItems.map((item) => item.imageUrl!);

  return (
    <>
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl">Galeria</h3>

          <a
            href="#galeria"
            className="text-xs font-semibold text-[var(--sage-dark)]"
          >
            Ver tudo
          </a>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {previewItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              className="relative aspect-square cursor-zoom-in overflow-hidden rounded-xl bg-[#ded9cc]"
              aria-label={`Ampliar imagem: ${item.title}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Card>

      <ImageLightbox
        open={selectedImageIndex !== null}
        images={lightboxImages}
        currentIndex={selectedImageIndex ?? 0}
        title="Galeria"
        onClose={() => setSelectedImageIndex(null)}
        onIndexChange={setSelectedImageIndex}
      />
    </>
  );
}