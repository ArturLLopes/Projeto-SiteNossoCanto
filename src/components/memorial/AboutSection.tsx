"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import {
  memorialInfo,
  memorialInfo2,
  memorialInfo3,
  memorialInfo5,
} from "@/data/memorial";

export function AboutSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="sobre" className="scroll-mt-24">
      <SectionTitle
        eyebrow="Sobre"
        title="Um pouco de sua história"
        description="Informações essenciais para apresentar a pessoa por trás das memórias."
      />

      <Card className="p-5 sm:p-7">
        <div className="flex items-start gap-3 rounded-2xl mb-4 bg-[#edf0e9] p-4">
          <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage-dark)]" />
          <p className="text-base italic leading-6 text-[#3f443e]">
            “{memorialInfo5.quote}”
          </p>
        </div>

        <div className="space-y-5 text-[18px] leading-7 text-[#555a53] sm:text-[18px]">
          <div className="block ">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/2foto1.jpg",
                  alt: "Registro histórico de Solange",
                })
              }
              className="mb-4 mx-auto block w-full max-w-[300px] cursor-zoom-in rounded-xl sm:float-left sm:ml-6 sm:mr-4 sm:mb-4 sm:mx-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)]"
              aria-label="Ampliar foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/2foto1.jpg"
                alt="Registro histórico de Solange"
                width={300}
                height={250}
                sizes="(max-width: 639px) 100vw, 300px"
                className="h-auto w-full rounded-xl object-contain transition duration-200 hover:opacity-90"
              />
            </button>
            <div className="flex-1">
              <p className="text-justify indent-8">
                Solange Pinto Mendonça nasceu em 29 de outubro de 1933. Formada em Piano pela Escola Nacional de Música e em Pedagogia pela Sociedade Unificada de Ensino Augosto Motta (SUAM), ingressou, por concurso público, no magistério do Estado da Guanabara, em 1965, na cadeira de Educação Musical. Cursou também pós-graduação em Orientação Educacional pela Universidade Estácio de Sá.
              </p>

              <p className="mt-4 text-justify indent-8">
                Dotada de grande musicalidade e de voz naturalmente afinada, Solange fez do canto seu principal instrumento de musicalização desde o início de sua trajetória docente. Embora não tivesse formação específica em regência coral nem em Canto Orfeônico, desenvolveu, de maneira autodidata, uma sólida atuação à frente de corais escolares e independentes.
              </p>
              <p className="mt-4 text-justify indent-8">
                Solange foi uma educadora-regente que fez da escola e da sala de aula espaços privilegiados para o desenvolvimento musical, artístico e humano de seus alunos. Sua prática com o canto articulava o trabalho regular de musicalização em sala de aula à formação de corais em diferentes instituições de ensino. Atuou nos colégios estaduais Tobias Monteiro, Brigadeiro Schorcht e Visconde de Cairu e, posteriormente, no Instituto Superior de Educação do Rio de Janeiro (ISERJ). Em cada escola por onde passou, deixou uma marca de sua atuação: um coro formado e uma experiência musical compartilhada.
              </p>
            </div>
          </div>
          

        </div>
      </Card>

      
      <Modal
        open={Boolean(selectedImage)}
        title={selectedImage?.alt ?? "Imagem ampliada"}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="flex max-h-[85vh] items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              sizes="(max-width: 768px) 95vw, 80vw"
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
