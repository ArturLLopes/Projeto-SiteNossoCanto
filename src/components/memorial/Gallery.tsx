"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Camera,
  FolderHeart,
  Image as ImageIcon,
  Images,
  Music,
  Play,
  Video,
  Calendar,
  MessageSquare,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Quote,
  Disc3,
  ListMusic,
  ExternalLink,
  X,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  galleryFolders,
  memorialAlbums,
  memorialVideos,
} from "@/data/memorial";
import type { GalleryItem, VideoItem } from "@/types/memorial";

type GalleryCategory = "imagens" | "audios" | "videos";

export function Gallery() {
  const videoPlayerRef = useRef<HTMLDivElement>(null);

  // Inicializa o estado lendo o localStorage de forma segura (sem usar useEffect para setState)
  const [category, setCategory] = useState<GalleryCategory>(() => {
    if (typeof window !== "undefined") {
      const savedTab = localStorage.getItem("gallery_initial_tab") as GalleryCategory;
      if (savedTab) {
        localStorage.removeItem("gallery_initial_tab");
        return savedTab;
      }
    }
    return "imagens";
  });

  const [selectedPhoto, setSelectedPhoto] = useState<{
    item: GalleryItem;
    folderTitle: string;
    folderDate: string;
  } | null>(null);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const [selectedAlbum, setSelectedAlbum] = useState<
    (typeof memorialAlbums)[number] | null
  >(null);

  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(
    memorialVideos[0],
  );

  const totalPhotos = galleryFolders.reduce(
    (total, folder) => total + folder.items.length,
    0,
  );

  // Se abriu via localStorage (veio do preview), faz o scroll até a galeria logo após montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Se a categoria inicial for álbuns (porque leu do localStorage), faz o scroll
      const initialTab = category;
      if (initialTab === "audios") {
        requestAnimationFrame(() => {
          document.getElementById("galeria")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }

    // Evento customizado para quando a galeria já está na tela
    const handleOpenAlbums = () => {
      setCategory("audios");

      requestAnimationFrame(() => {
        document.getElementById("galeria")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    window.addEventListener("nosso-canto:open-albums", handleOpenAlbums);

    return () => {
      window.removeEventListener("nosso-canto:open-albums", handleOpenAlbums);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const closePhoto = () => {
    setSelectedPhoto(null);
    setIsLightboxOpen(false);
    setActivePhotoIndex(0);
  };

  const selectVideo = (video: VideoItem) => {
    setSelectedVideo(video);

    requestAnimationFrame(() => {
      if (!videoPlayerRef.current) return;

      const top =
        videoPlayerRef.current.getBoundingClientRect().top +
        window.scrollY -
        150;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  };

  return (
    <section id="galeria" className="scroll-mt-24 space-y-6">
      <SectionTitle
        eyebrow="Galeria Memorial"
        title="Fotografias, Áudios e Vídeos"
        description="Um acervo especial de memórias preservadas em imagens, registros sonoros e apresentações que marcaram a trajetória musical."
      />

      {/* Navegação entre as categorias */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--border)] bg-[#f8f5ee] p-1.5 shadow-sm sm:gap-3">
        <button
          type="button"
          onClick={() => setCategory("imagens")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            category === "imagens"
              ? "bg-[#A4B494] text-white shadow-sm"
              : "text-[#4b5447] hover:bg-white/60"
          }`}
        >
          <ImageIcon className="h-4 w-4" />
          <span>Imagens</span>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">
            {totalPhotos}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setCategory("audios")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            category === "audios"
              ? "bg-[#A4B494] text-white shadow-sm"
              : "text-[#4b5447] hover:bg-white/60"
          }`}
        >
          <Music className="h-4 w-4" />
          <span>Álbuns musicais</span>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">
            {memorialAlbums.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setCategory("videos")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            category === "videos"
              ? "bg-[#A4B494] text-white shadow-sm"
              : "text-[#4b5447] hover:bg-white/60"
          }`}
        >
          <Video className="h-4 w-4" />
          <span>Vídeos</span>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs">
            {memorialVideos.length}
          </span>
        </button>
      </div>

      {/* IMAGENS */}
      {category === "imagens" && (
        <div className="space-y-6">
          {galleryFolders.map((folder) => (
            <Card key={folder.id} className="p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#edf0e9] text-[var(--sage-dark)]">
                  <FolderHeart className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-display text-xl text-[#393f36]">
                    {folder.title}
                  </h3>

                  {folder.comment && (
                    <p className="mt-1 text-sm text-[var(--warm-gray)]">
                      {folder.comment}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {folder.items.map((item) => {
                  const images = item.images?.length
                    ? item.images
                    : item.imageUrl
                      ? [item.imageUrl]
                      : [];

                  const coverImage = images[0];

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActivePhotoIndex(0);
                        setSelectedPhoto({
                          item,
                          folderTitle: folder.title,
                          folderDate: folder.date,
                        });
                      }}
                      className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B494]"
                      aria-label={`Abrir fotografia: ${item.title}`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition group-hover:shadow-md">
                        {coverImage ? (
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e4db]">
                            <Image
                              src={coverImage}
                              alt={item.title}
                              fill
                              sizes="(max-width: 639px) 50vw, 33vw"
                              loading="lazy"
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />

                            {images.length > 1 && (
                              <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/65 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
                                <Images className="h-3 w-3" />
                                {images.length} fotos
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="flex aspect-[4/3] flex-col justify-between bg-[#f2efe8] p-3.5 text-xs text-[#6d716a]">
                            <div className="flex justify-between">
                              <span className="rounded-md border border-[var(--border)] bg-white/70 px-2 py-1 font-mono text-[10px]">
                                FOTOGRAFIA
                              </span>
                              <Camera className="h-4 w-4" />
                            </div>
                            <span className="line-clamp-2 font-medium">
                              {item.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ÁLBUNS E PLAYLISTS DO SOUNDCLOUD */}
      {category === "audios" && (
        <div className="space-y-5">
          <div className="flex items-start gap-3 rounded-2xl bg-[#FFFFFF] p-4 sm:p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/80 text-[var(--sage-dark)]">
              <Music className="h-5 w-5" />
            </span>

            <div>
              <h3 className="font-display text-lg text-[#3d443a]">
                Acervo musical
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#596052]">
                Cada álbum reúne gravações e apresentações que preservam a
                memória musical. Selecione uma coleção para abrir sua playlist e
                ouvir as faixas.
              </p>
            </div>
          </div>

          {memorialAlbums.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {memorialAlbums.map((album) => (
                <button
                  key={album.id}
                  type="button"
                  onClick={() => setSelectedAlbum(album)}
                  className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#A4B494] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B494]"
                  aria-label={`Abrir álbum ${album.title}`}
                >
                  <div className="relative aspect-square overflow-hidden bg-[#e8e4db]">
                    {album.coverImage ? (
                      <Image
                        src={album.coverImage}
                        alt={`Capa do álbum ${album.title}`}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#edf0e9] to-[#ded9cc] text-[var(--sage-dark)]">
                        <Disc3 className="h-16 w-16" />
                        <span className="px-4 text-center font-display text-lg">
                          {album.title}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/25">
                      <span className="grid h-14 w-14 scale-90 place-items-center rounded-full bg-[#A4B494] text-white opacity-0 shadow-xl transition group-hover:scale-100 group-hover:opacity-100">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                    </div>

                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#A4B494]/50 text-white px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur">
                      <ListMusic className="h-3.5 w-3.5" />
                      Playlist
                    </span>
                  </div>

                  <div className="space-y-2 p-4">
                    <h3 className="font-display text-lg leading-snug text-[#383e35]">
                      {album.title}
                    </h3>
                    <p className="text-sm font-medium text-[var(--sage-dark)]">
                      {album.speaker}
                    </p>

                    {album.comment && (
                      <p className="line-clamp-3 text-sm leading-6 text-[var(--warm-gray)]">
                        {album.comment}
                      </p>
                    )}

                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-3">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--warm-gray)]">
                        <Calendar className="h-3.5 w-3.5" />
                        {album.date || "Acervo memorial"}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sage-dark)]">
                        Ouvir álbum
                        <Play className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <Disc3 className="mx-auto h-10 w-10 text-[var(--sage-dark)]" />
              <h3 className="mt-3 font-display text-lg text-[#393f36]">
                Álbuns em preparação
              </h3>
              <p className="mt-2 text-sm text-[var(--warm-gray)]">
                As playlists serão disponibilizadas neste espaço.
              </p>
            </Card>
          )}
        </div>
      )}

      {/* Modal da playlist */}
      <Modal
        open={Boolean(selectedAlbum)}
        title={selectedAlbum?.title ?? "Playlist musical"}
        onClose={() => setSelectedAlbum(null)}
      >
        {selectedAlbum && (
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-2xl bg-[#faf8f3] p-3 sm:p-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg text-[#393f36]">
                  {selectedAlbum.title}
                </h3>
                {selectedAlbum.date && (
                  <p className="mt-1 text-xs text-[var(--warm-gray)]">
                    {selectedAlbum.date}
                  </p>
                )}
                {selectedAlbum.comment && (
                  <p className="mt-2 text-sm leading-5 text-[#596052]">
                    {selectedAlbum.comment}
                  </p>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
              <iframe
                key={selectedAlbum.id}
                title={`Playlist do SoundCloud: ${selectedAlbum.title}`}
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                  selectedAlbum.playlistUrl,
                )}&color=%23A4B494&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
                width="100%"
                height="450"
                loading="lazy"
                allow="autoplay"
                className="block w-full border-0"
              />
            </div>

            <a
              href={selectedAlbum.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[#faf8f3] px-4 py-3 text-sm font-medium text-[#4b5447] transition hover:bg-[#edf0e9]"
            >
              <ExternalLink className="h-4 w-4" />
              Abrir playlist no SoundCloud
            </a>
          </div>
        )}
      </Modal>

      {/* VÍDEOS */}
      {category === "videos" && selectedVideo && (
        <div ref={videoPlayerRef} className="space-y-5">
          <Card className="overflow-hidden p-5 sm:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3">
              <h3 className="font-display text-xl text-[#383e35]">
                {selectedVideo.title}
              </h3>
              <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs text-[var(--warm-gray)]">
                {selectedVideo.date}
              </span>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-black shadow-inner">
              <iframe
                key={selectedVideo.id}
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?rel=0`}
                title={selectedVideo.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 rounded-2xl bg-[#faf8f3] p-4 text-sm text-[#545b50]">
              <div className="flex items-start gap-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage-dark)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--warm-gray)]">
                    Sobre este registro
                  </p>
                  <p className="mt-1 leading-6 text-[#555d51]">
                    {selectedVideo.comment}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <h4 className="font-display text-lg text-[#3d443a]">
              Vídeos disponíveis do memorial
            </h4>

            <div className="grid gap-3 sm:grid-cols-2">
              {memorialVideos.map((video) => {
                const isCurrent = selectedVideo.id === video.id;

                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => selectVideo(video)}
                    className={`rounded-2xl p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A4B494] ${
                      isCurrent
                        ? "border-2 border-[#A4B494] bg-[#fbf9f4] shadow-sm"
                        : "border border-[var(--border)] bg-white hover:border-[#ccd4c3]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 shrink-0 text-[var(--sage-dark)]" />
                      <h5 className="font-display text-base text-[#383e35]">
                        {video.title}
                      </h5>
                    </div>
                    <p className="mt-1 text-xs text-[var(--sage-dark)]">
                      {video.date}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--warm-gray)]">
                      {video.comment}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Fotografias */}
      <Modal
        open={Boolean(selectedPhoto)}
        title={selectedPhoto?.item.title ?? ""}
        onClose={closePhoto}
      >
        {selectedPhoto &&
          (() => {
            const modalImages = selectedPhoto.item.images?.length
              ? selectedPhoto.item.images
              : selectedPhoto.item.imageUrl
                ? [selectedPhoto.item.imageUrl]
                : [];

            const safeIndex =
              activePhotoIndex >= 0 && activePhotoIndex < modalImages.length
                ? activePhotoIndex
                : 0;

             return (
              <div className="space-y-4">
                {modalImages.length > 0 ? (
                  <div className="space-y-2">
                    <div
                      className="group/img relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-black"
                      onClick={() => setIsLightboxOpen(true)}
                      title="Clique para ampliar em tela cheia"
                    >
                      <Image
                        src={modalImages[safeIndex]}
                        alt={`${selectedPhoto.item.title} - Foto ${safeIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="pointer-events-none select-none object-contain"
                        draggable={false}
                        onContextMenu={(event) => event.preventDefault()}
                      />

                      <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                        <ZoomIn className="h-3.5 w-3.5" />
                        Ampliar
                      </span>

                      {modalImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              setActivePhotoIndex(
                                safeIndex > 0
                                  ? safeIndex - 1
                                  : modalImages.length - 1,
                              );
                            }}
                            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white"
                            aria-label="Fotografia anterior"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              setActivePhotoIndex(
                                safeIndex < modalImages.length - 1
                                  ? safeIndex + 1
                                  : 0,
                              );
                            }}
                            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white"
                            aria-label="Próxima fotografia"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-xs text-white">
                            {safeIndex + 1} / {modalImages.length}
                          </span>
                        </>
                      )}
                    </div>

                    {modalImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {modalImages.map((image, index) => (
                          <button
                            key={`${selectedPhoto.item.id}-${index}`}
                            type="button"
                            onClick={() => setActivePhotoIndex(index)}
                            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                              safeIndex === index
                                ? "border-[#A4B494] ring-2 ring-[#A4B494]/40"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                            aria-label={`Selecionar fotografia ${index + 1}`}
                          >
                            <Image
                              src={image}
                              alt={`Miniatura ${index + 1}`}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-[#f2efe8] text-sm text-[#6d716a]">
                    Fotografia memorial
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--warm-gray)]">
                    <span className="font-medium text-[var(--sage-dark)]">
                      {selectedPhoto.folderTitle}
                    </span>

                    <span>{selectedPhoto.item.date}</span>
                  </div>

                  <p className="text-sm leading-6 text-[#535950]">
                    {selectedPhoto.item.description}
                  </p>
                </div>
              </div>
            );
          })()}
      </Modal>

      <ImageLightbox
        open={isLightboxOpen}
        images={
          selectedPhoto
            ? selectedPhoto.item.images?.length
              ? selectedPhoto.item.images
              : selectedPhoto.item.imageUrl
                ? [selectedPhoto.item.imageUrl]
                : []
            : []
        }
        currentIndex={activePhotoIndex}
        onIndexChange={setActivePhotoIndex}
        title={selectedPhoto?.item.title}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}