"use client";

import { useState, useRef, useEffect } from "react";
import {
  Camera,
  FolderHeart,
  ImageIcon,
  Images,
  Music,
  Pause,
  Play,
  Video,
  Volume2,
  VolumeX,
  Calendar,
  MessageSquare,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

function YoutubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  galleryFolders,
  memorialAudios,
  memorialVideos,
} from "@/data/memorial";
import type { AudioItem, GalleryItem, VideoItem } from "@/types/memorial";

type GalleryCategory = "imagens" | "audios" | "videos";

export function Gallery() {
  const videoPlayerRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<GalleryCategory>("imagens");
  const [selectedPhoto, setSelectedPhoto] = useState<{
    item: GalleryItem;
    folderTitle: string;
    folderDate: string;
  } | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Audio Player State
  const [selectedAudio, setSelectedAudio] = useState<AudioItem>(
    memorialAudios[0],
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [realDuration, setRealDuration] = useState<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);

  // Video State
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(
    memorialVideos[0],
  );

  // Audio Playback simulation using gentle ambient synthesis
  // (apenas para áudios sem arquivo real)
  useEffect(() => {
    if (selectedAudio.audioUrl) return;
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 102) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, selectedAudio.audioUrl]);

  function togglePlay() {
    // Se o áudio selecionado tem arquivo real, toca o elemento <audio>.
    if (selectedAudio.audioUrl) {
      const el = audioElRef.current;
      if (!el) return;
      if (isPlaying) {
        el.pause();
      } else {
        el.play().catch(() => {});
      }
      return;
    }
    if (isPlaying) {
      setIsPlaying(false);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
      if (oscillatorIntervalRef.current) {
        clearInterval(oscillatorIntervalRef.current);
      }
    } else {
      setIsPlaying(true);
      // Gentle memorial chime using Web Audio API so real peaceful audio plays
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const playNote = (freq: number) => {
          if (ctx.state === "closed") return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(isMuted ? 0 : 0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 3);
        };

        playNote(432);
        oscillatorIntervalRef.current = setInterval(() => {
          if (ctx.state === "running") {
            const notes = [432, 540, 648];
            const randomNote = notes[Math.floor(Math.random() * notes.length)];
            playNote(randomNote);
          }
        }, 3500);
      } catch {
        // Fallback gracefully if Web Audio is restricted
      }
    }
  }

  function selectNewAudio(audio: AudioItem) {
    if (selectedAudio.id !== audio.id) {
      setIsPlaying(false);
      setCurrentTime(0);
      // Encerra a síntese ambiente ao trocar de áudio.
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
      if (oscillatorIntervalRef.current) {
        clearInterval(oscillatorIntervalRef.current);
      }
      setSelectedAudio(audio);
      setRealDuration(null);
    }
  }

  function formatSeconds(secs: number) {
    const totalSeconds = Math.floor(secs);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;

    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <section id="galeria" className="scroll-mt-24 space-y-6">
      <SectionTitle
        eyebrow="Galeria Memorial"
        title="Fotografias, Áudios e Vídeos"
        description="Um acervo especial de memórias preservadas em imagens datadas, registros sonoros e vídeos que marcam a trajetória de Eleanor."
      />

      {/* Sub-menu de navegação da galeria */}
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
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold">
            {galleryFolders.reduce((acc, f) => acc + f.items.length, 0)}
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
          <span>Áudios</span>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold">
            {memorialAudios.length}
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
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold">
            {memorialVideos.length}
          </span>
        </button>
      </div>

      {/* 1. SEÇÃO DE IMAGENS EM PASTAS DATADAS COM COMENTÁRIOS */}
      {category === "imagens" && (
        <div className="space-y-6">
          {galleryFolders.map((folder) => (
            <Card key={folder.id} className="p-5 sm:p-6">
              {/* Cabeçalho da pasta */}
              <div className="flex flex-col gap-2 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#edf0e9] text-[var(--sage-dark)]">
                    <FolderHeart className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="font-display text-xl text-[#393f36]">
                      {folder.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[var(--warm-gray)] sm:text-sm">
                      {folder.comment}
                    </p>
                  </div>
                </div>

                {/* <span className="inline-flex w-fit items-center gap-1 rounded-full border border-[var(--border)] bg-[#faf8f4] px-3 py-1 text-xs font-semibold text-[var(--sage-dark)]">
                  <Calendar className="h-3 w-3" />
                  {folder.date}
                </span> */}
              </div>

              {/* Grid de fotografias da pasta */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {folder.items.map((item) => {
                  // Aceita várias imagens ou a imagem antiga
                  const images = item.images?.length
                    ? item.images
                    : item.imageUrl
                      ? [item.imageUrl]
                      : [];

                  // Define a imagem principal do cartão
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
                      className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
                    >
                      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition group-hover:shadow-md">
                        {/* Visualização / miniatura */}
                        {coverImage ? (
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e4db]">
                            <img
                              src={coverImage}
                              alt={item.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />

                            {/* Indicador de quantidade de fotografias */}
                            {images.length > 1 && (
                              <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                                <Images className="h-3 w-3" />
                                {images.length} fotos
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="placeholder-sheen flex aspect-[4/3] flex-col justify-between p-3.5 text-xs text-[#6d716a]">
                            <div className="flex items-center justify-between">
                              <span className="rounded-md border border-[var(--border)] bg-white/70 px-2 py-0.5 font-mono text-[10px] text-[#555]">
                                FOTOGRAFIA
                              </span>

                              <Camera className="h-4 w-4" aria-hidden="true" />
                            </div>

                            <span className="line-clamp-2 font-medium text-[#4f564b]">
                              {item.title}
                            </span>
                          </div>
                        )}

                        {/* Texto informativo */}
                        {/* <div className="flex-1 p-3">
                          <h4 className="line-clamp-1 font-display text-sm font-semibold text-[#383e35]">
                            {item.title}
                          </h4>

                          {images.length > 1 && (
                            <p className="mt-1 text-xs text-[var(--warm-gray)]">
                              {images.length} fotografias
                            </p>
                          )}
                        </div> */}
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* 2. SEÇÃO DE ÁUDIOS COM PLAYER */}
      {category === "audios" && (
        <div className="space-y-5">
          {/* Card do Player Principal */}
          <Card className="overflow-hidden p-6 sm:p-7">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#A4B494]/20 text-[var(--sage-dark)]">
                  <Music className="h-5 w-5" />
                </span>
                <div>
                  {/* <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sage-dark)]">
                    Player de Áudio Memorial
                  </p> */}
                  <h3 className="font-display text-xl text-[#393f36]">
                    {selectedAudio.title}
                  </h3>
                </div>
              </div>
              <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-medium text-[var(--warm-gray)]">
                {selectedAudio.date}
              </span>
            </div>

            {/* Descrição e orador */}
            <div className="mt-4 rounded-2xl bg-[#faf8f3] p-4 text-sm text-[#545b50]">
              <p className="font-medium text-[#3b4138]">
                {selectedAudio.speaker}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--warm-gray)] sm:text-sm">
                {selectedAudio.comment}
              </p>
            </div>

            {/* Elemento de áudio real (arquivo da pasta _audio) */}
            {selectedAudio.audioUrl && (
              <audio
                ref={audioElRef}
                src={selectedAudio.audioUrl}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                muted={isMuted}
                onTimeUpdate={(e) =>
                  setCurrentTime(e.currentTarget.currentTime)
                }
                onLoadedMetadata={(e) => {
                  const d = e.currentTarget.duration;
                  if (Number.isFinite(d)) {
                    setRealDuration(d);
                    const m = Math.floor(d / 60);
                    const s = Math.round(d % 60);
                    setSelectedAudio((prev) => ({
                      ...prev,
                      duration: `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
                    }));
                  }
                }}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
              />
            )}

            {/* Controles do Player */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#A4B494] text-white shadow-md transition hover:bg-[var(--sage-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)]"
                  aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="ml-0.5 h-6 w-6" />
                  )}
                </button>

                {/* Equalizador animado e barra de progresso */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[var(--warm-gray)]">
                    <span>{formatSeconds(currentTime)}</span>
                    <span className="flex items-center gap-1 font-medium text-[var(--sage-dark)]">
                      {isPlaying && (
                        <span className="flex items-center gap-0.5">
                          <span className="inline-block h-3 w-1 animate-pulse rounded-full bg-[#A4B494]"></span>
                          <span className="inline-block h-4 w-1 animate-pulse rounded-full bg-[#A4B494] delay-75"></span>
                          <span className="inline-block h-2 w-1 animate-pulse rounded-full bg-[#A4B494] delay-150"></span>
                        </span>
                      )}
                      {selectedAudio.duration}
                    </span>
                  </div>

                  {/* Barra de progresso */}
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-[#e8e4db]">
                    <div
                      className="h-full rounded-full bg-[#A4B494] transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          100,
                          (currentTime / (realDuration ?? 102)) * 100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Controle de mudo */}
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded-full p-2.5 text-[#5e6659] transition hover:bg-[#f2efe8]"
                  title={isMuted ? "Ativar som" : "Silenciar"}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-red-500" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-[var(--warm-gray)]">
                {isPlaying
                  ? "Reproduzindo gravação memorial em tom acústico ambiente..."
                  : "Clique no botão de reprodução para ouvir a gravação."}
              </p>
            </div>
          </Card>

          {/* Lista de Áudios Disponíveis */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-[#3d443a]">
              Outras gravações de voz
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {memorialAudios.map((audio) => {
                const isCurrent = selectedAudio.id === audio.id;
                return (
                  <button
                    key={audio.id}
                    type="button"
                    onClick={() => selectNewAudio(audio)}
                    className={`rounded-2xl text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] ${
                      isCurrent
                        ? "border-2 border-[#A4B494] bg-[#fbf9f4] shadow-sm"
                        : "border border-[var(--border)] bg-white hover:border-[#ccd4c3]"
                    } p-4`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-display text-base text-[#383e35]">
                        {audio.title}
                      </h5>
                      <span className="shrink-0 rounded-full bg-[#f2efe8] px-2 py-0.5 text-xs text-[var(--warm-gray)]">
                        {audio.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--sage-dark)] font-medium">
                      {audio.speaker} · {audio.date}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--warm-gray)]">
                      {audio.comment}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. SEÇÃO DE VÍDEOS COM PLAYER DO YOUTUBE */}
      {category === "videos" && (
        <div ref={videoPlayerRef} className="space-y-5">
          {/* Player do YouTube Principal */}
          <Card className="overflow-hidden p-5 sm:p-7">
            <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div className="flex items-center gap-2.5">
                <YoutubeIcon className="h-5 w-5 text-red-600" />
                <h3 className="font-display text-xl text-[#383e35]">
                  {selectedVideo.title}
                </h3>
              </div>
              <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-medium text-[var(--warm-gray)]">
                {selectedVideo.date}
              </span>
            </div>

            {/* Container responsivo 16:9 para o iframe do YouTube */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-black shadow-inner">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?rel=0`}
                title={selectedVideo.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Comentário sobre o vídeo */}
            <div className="mt-4 rounded-2xl bg-[#faf8f3] p-4 text-sm text-[#545b50]">
              <div className="flex items-start gap-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage-dark)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--warm-gray)]">
                    Sobre este registro em vídeo
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#555d51]">
                    {selectedVideo.comment}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Lista de outros vídeos para escolher */}
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
                    onClick={() => {
                      setSelectedVideo(video);

                      requestAnimationFrame(() => {
                        if (videoPlayerRef.current) {
                          const top =
                            videoPlayerRef.current.getBoundingClientRect().top +
                            window.scrollY -
                            150;

                          window.scrollTo({
                            top,
                            behavior: "smooth",
                          });
                        }
                      });
                    }}
                    className={`rounded-2xl text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] ${
                      isCurrent
                        ? "border-2 border-[#A4B494] bg-[#fbf9f4] shadow-sm"
                        : "border border-[var(--border)] bg-white hover:border-[#ccd4c3]"
                    } p-4`}
                  >
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-[var(--sage-dark)]" />
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
            <div className="mb-4 flex items-start gap-3 rounded-2xl bg-[#edf0e9] p-4">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage-dark)]" />
              <div>
                <p className="text-base italic leading-6 text-[#3f443e]">
                  Reviva momentos especiais e apresentações marcantes do coral
                  em nossa seleção de vídeos no YouTube. Cada canção guarda um
                  pouco dessa história e do legado musical que permanece vivo na
                  memória.
                </p>

                <a
                  href="https://www.youtube.com/@SolangePintoMendonça-Legado/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#A4B494] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#8d9e7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)] focus-visible:ring-offset-2"
                >
                  <Play className="h-5 w-5" />
                  Assistir aos vídeos no YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Fotografia Ampliada com Carrossel */}
      <Modal
        open={Boolean(selectedPhoto)}
        title={selectedPhoto?.item.title ?? ""}
        onClose={() => {
          setSelectedPhoto(null);
          setIsLightboxOpen(false);
        }}
      >
        {selectedPhoto &&
          (() => {
            // Compatibilidade com fotografias antigas e listas de imagens.
            const modalImages = selectedPhoto.item.images?.length
              ? selectedPhoto.item.images
              : selectedPhoto.item.imageUrl
                ? [selectedPhoto.item.imageUrl]
                : [];

            return (
              <div className="space-y-4">
                {modalImages.length > 0 ? (
                  <div className="space-y-2">
                    {/* Imagem principal */}
                    <div
                      className="group/img relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-black"
                      onClick={() => setIsLightboxOpen(true)}
                      title="Clique na foto para ampliar em tela cheia com zoom"
                    >
                      <img
                        src={modalImages[0]}
                        alt={selectedPhoto.item.title}
                        className="pointer-events-none h-full w-full select-none object-contain transition duration-200 group-hover/img:scale-[1.02]"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />

                      {/* Indicador de ampliação */}
                      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur transition group-hover/img:bg-black/90">
                        <ZoomIn className="h-3.5 w-3.5" />
                        <span>Ampliar</span>
                      </div>

                      {/* Navegação caso existam várias fotografias */}
                      {modalImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsLightboxOpen(true);
                            }}
                            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90"
                            aria-label="Abrir fotografias ampliadas"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsLightboxOpen(true);
                            }}
                            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90"
                            aria-label="Abrir fotografias ampliadas"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
                            {modalImages.length} fotos
                          </div>
                        </>
                      )}
                    </div>

                    {/* Miniaturas */}
                    {modalImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto py-1">
                        {modalImages.map((img, idx) => (
                          <button
                            key={`${selectedPhoto.item.id}-${idx}`}
                            type="button"
                            onClick={() => {
                              // A seleção individual pode ser feita no lightbox.
                              setIsLightboxOpen(true);
                            }}
                            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 border-transparent opacity-75 transition hover:border-[#A4B494] hover:opacity-100"
                            aria-label={`Abrir fotografia ${idx + 1}`}
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
                  </div>
                ) : (
                  <div className="placeholder-sheen flex aspect-[4/3] items-center justify-center rounded-2xl text-sm font-medium text-[#6d716a]">
                    FOTOGRAFIA MEMORIAL
                  </div>
                )}

                {/* Informações da fotografia */}
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

                  <p className="border-t border-[var(--border)] pt-2 text-xs text-[#777b73]">
                    Acervo fotografico preservado e digitalizado com carinho.
                  </p>
                </div>
              </div>
            );
          })()}
      </Modal>

      {/* Lightbox em tela cheia */}

      {/* Modal de fotografia com carrossel */}
      <Modal
        open={Boolean(selectedPhoto)}
        title={selectedPhoto?.item.title ?? ""}
        onClose={() => {
          setSelectedPhoto(null);
          setIsLightboxOpen(false);
          setActivePhotoIndex(0);
        }}
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

            const changePhoto = (index: number) => {
              setActivePhotoIndex(index);
            };

            return (
              <div className="space-y-4">
                {modalImages.length > 0 ? (
                  <div className="space-y-2">
                    {/* Imagem principal */}
                    <div
                      className="group/img relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-black"
                      onClick={() => setIsLightboxOpen(true)}
                      title="Clique para ampliar em tela cheia"
                    >
                      <img
                        src={modalImages[safeIndex]}
                        alt={`${selectedPhoto.item.title} - Foto ${safeIndex + 1}`}
                        className="pointer-events-none h-full w-full select-none object-contain transition duration-200 group-hover/img:scale-[1.02]"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />

                      {/* Indicador de zoom */}
                      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur transition group-hover/img:bg-black/90">
                        <ZoomIn className="h-3.5 w-3.5" />
                        <span>Ampliar</span>
                      </div>

                      {/* Navegação entre imagens */}
                      {modalImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              changePhoto(
                                safeIndex > 0
                                  ? safeIndex - 1
                                  : modalImages.length - 1,
                              );
                            }}
                            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Fotografia anterior"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              changePhoto(
                                safeIndex < modalImages.length - 1
                                  ? safeIndex + 1
                                  : 0,
                              );
                            }}
                            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Próxima fotografia"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          {/* Contador */}
                          <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                            {safeIndex + 1} / {modalImages.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Miniaturas sincronizadas */}
                    {modalImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {modalImages.map((img, idx) => (
                          <button
                            key={`${selectedPhoto.item.id}-${idx}`}
                            type="button"
                            onClick={() => changePhoto(idx)}
                            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                              safeIndex === idx
                                ? "border-[#A4B494] ring-2 ring-[#A4B494]/40"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                            aria-label={`Selecionar fotografia ${idx + 1}`}
                            aria-current={
                              safeIndex === idx ? "true" : undefined
                            }
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
                  </div>
                ) : (
                  <div className="placeholder-sheen flex aspect-[4/3] items-center justify-center rounded-2xl text-sm font-medium text-[#6d716a]">
                    FOTOGRAFIA MEMORIAL
                  </div>
                )}

                {/* Informações da fotografia */}
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

                  <p className="border-t border-[var(--border)] pt-2 text-xs text-[#777b73]">
                    Acervo fotografico preservado e digitalizado com carinho.
                  </p>
                </div>
              </div>
            );
          })()}
      </Modal>

      {/* Lightbox em tela cheia sincronizado com o modal */}
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
