"use client";

import { useEffect } from "react";

export function MediaProtection() {
  useEffect(() => {
    // 1. Bloqueia o menu de contexto (botão direito) em imagens, vídeos, áudios e áreas do acervo
    function handleContextMenu(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "VIDEO" ||
          target.tagName === "AUDIO" ||
          target.closest("img") ||
          target.closest("video") ||
          target.closest("audio") ||
          target.closest(".protected-media"))
      ) {
        e.preventDefault();
        return false;
      }
    }

    // 2. Bloqueia arrastar imagens para a área de trabalho ou outra aba
    function handleDragStart(e: DragEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "IMG" ||
          target.tagName === "VIDEO" ||
          target.closest("img") ||
          target.closest(".protected-media"))
      ) {
        e.preventDefault();
        return false;
      }
    }

    // 3. Bloqueia atalhos comuns de teclado (Ctrl+S / Cmd+S para salvar e Ctrl+P para imprimir)
    function handleKeyDown(e: KeyboardEvent) {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" ||
          e.key === "S" ||
          e.key === "p" ||
          e.key === "P" ||
          e.key === "u" ||
          e.key === "U")
      ) {
        e.preventDefault();
        return false;
      }
    }

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}

