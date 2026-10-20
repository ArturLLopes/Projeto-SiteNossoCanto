"use client";

import { useState, useSyncExternalStore } from "react";
import { Music2, Disc3, Shuffle, ExternalLink, ListMusic } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { memorialAlbums } from "@/data/memorial";

const allTracks = memorialAlbums.flatMap((album) =>
  album.tracks.map((track) => ({
    ...track,
    albumId: album.id,
    albumTitle: album.title,
    speaker: album.speaker,
    coverImage: album.coverImage,
  })),
);

type Track = (typeof allTracks)[number];

function getRandomTrack(currentTrack: Track | null): Track | null {
  if (allTracks.length === 0) return null;

  const alternatives = allTracks.filter(
    (track) => track.id !== currentTrack?.id,
  );

  const options = alternatives.length > 0 ? alternatives : allTracks;

  return options[Math.floor(Math.random() * options.length)];
}

// Helpers para detectar montagem no cliente sem useEffect
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // No cliente
    () => false  // No servidor (SSR)
  );
}

interface MusicPreviewProps {
  onOpenGallery?: () => void;
}

export function MusicPreview({ onOpenGallery }: MusicPreviewProps) {
  const isClient = useIsClient();
  
  // Sorteia a faixa inicial diretamente no estado
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(() =>
    getRandomTrack(null),
  );

  function changeTrack() {
    setSelectedTrack((currentTrack) => getRandomTrack(currentTrack));
  }

  function handleOpenMusicGallery() {
    if (typeof window !== "undefined") {
      localStorage.setItem("gallery_initial_tab", "audios");
    }

    window.dispatchEvent(new CustomEvent("nosso-canto:open-albums"));

    if (onOpenGallery) {
      onOpenGallery();
    }
  }

  return (
    <Card className="overflow-hidden p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf0e9] text-[var(--sage-dark)]">
            <Music2 className="h-5 w-5" />
          </span>

          <div>
            <h3 className="font-display text-xl">Memórias musicais</h3>
          </div>
        </div>

        <Disc3 className="h-5 w-5 shrink-0 text-[#A4B494]" />
      </div>

      {/* Renderiza somente no cliente para garantir zero erros de hidratação */}
      {isClient && selectedTrack ? (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-[var(--border)] bg-[#faf8f3] p-3">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e7ebdf] text-[var(--sage-dark)]">
                <Music2 className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--sage-dark)]">
                  Música em destaque
                </p>

                <h4 className="mt-1 break-words font-display text-base leading-snug text-[#383e35]">
                  {selectedTrack.title}
                </h4>

                <p className="mt-1 text-xs text-[var(--warm-gray)]">
                  {selectedTrack.albumTitle}
                </p>

                <p className="mt-1 text-xs text-[var(--warm-gray)]">
                  {selectedTrack.speaker}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
            <iframe
              key={selectedTrack.id}
              title={`Tocar ${selectedTrack.title} no SoundCloud`}
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                selectedTrack.url,
              )}&color=%23A4B494&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
              width="100%"
              height="166"
              loading="lazy"
              allow="autoplay"
              className="block w-full border-0"
            />
          </div>

          <button
            type="button"
            onClick={changeTrack}
            disabled={allTracks.length < 2}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#A4B494] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#8d9e7d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Shuffle className="h-4 w-4" />
            Outra música aleatória
          </button>

          <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-3">
            <a
              href={selectedTrack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-medium text-[var(--sage-dark)] hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Abrir música no SoundCloud
            </a>

            <button
              type="button"
              onClick={handleOpenMusicGallery}
              className="flex w-full items-center justify-center gap-2 text-xs text-[var(--warm-gray)] transition hover:text-[var(--sage-dark)]"
            >
              <ListMusic className="h-3.5 w-3.5" />
              Explorar todos os álbuns
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-xl bg-[#faf8f3] p-5 text-center">
          <Music2 className="mx-auto h-8 w-8 text-[#A4B494] animate-pulse" />
        </div>
      )}
    </Card>
  );
}