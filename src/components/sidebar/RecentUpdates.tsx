import { Video, Music, Globe, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function SocialLinks() {
  const socialLinks = [
    {
      title: "Inscreva-se no nosso canal do YouTube",
      type: "youtube",
      url: "https://www.youtube.com/@SolangePintoMendon%C3%A7a-Legado",
      label: "YouTube",
    },
    {
      title: "Ouça nossas gravações no SoundCloud",
      type: "soundcloud",
      url: "https://on.soundcloud.com/hijpSOspLwHAtI8ZTI",
      label: "SoundCloud",
    },
    {
      title: "Siga o Projeto Legado no Instagram",
      type: "instagram",
      url: "https://www.instagram.com/projetolegado_solangepmendonca/",
      label: "Instagram",
    },
    {
      title: "Entre em contato por E-mail",
      type: "email",
      url: "mailto:contato@memorialdocantocoralspm.com.br",
      label: "contato@memorialdocantocoralspm.com.br",
    },
  ];

  return (
    <Card className="p-5">
      <h3 className="font-display text-xl">Redes Sociais & Contato</h3>
      <div className="mt-4 space-y-4">
        {socialLinks.map((item) => (
          <a
            key={item.type}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 transition-opacity hover:opacity-85"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#F7EEE8] text-[var(--sage-dark)]">
              {item.type === "youtube" ? (
                <Video className="h-4 w-4" />
              ) : item.type === "soundcloud" ? (
                <Music className="h-4 w-4" />
              ) : item.type === "instagram" ? (
                <Globe className="h-4 w-4" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
            </span>
            <div>
              <p className="text-sm leading-5 text-[#4f554d]">{item.title}</p>
              <p className="mt-1 text-xs text-[var(--warm-gray)]">
                {item.label}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}