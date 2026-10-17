
"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BiographySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="biografia" className="scroll-mt-24">
      <SectionTitle
        eyebrow=""
        title="Trajetória e Conquistas no Canto Coral"
      />

      <Card className="p-5 sm:p-7">
        <div className="space-y-5 text-[16px] leading-7 text-[#555a53] sm:text-[18px]">
          {/* Primeira imagem: direita */}
          <div className="flow-root">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/2foto2.jpg",
                  alt: "Registro histórico de Solange",
                })
              }
              className="mb-4 ml-0 block w-full cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)] sm:float-right sm:mb-3 sm:ml-6 sm:w-[45%] sm:max-w-[400px]"
              aria-label="Ampliar foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/2foto2.jpg"
                alt="Registro histórico de Solange"
                width={400}
                height={350}
                sizes="(max-width: 639px) calc(100vw - 64px), 400px"
                className="h-auto max-h-[350px] w-full rounded-xl object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </button>

            <p className="text-justify indent-8 [text-indent:2rem]">
              Paralelamente ao trabalho na rede pública de ensino, Solange
              construiu uma expressiva trajetória à frente de corais
              independentes, contribuindo para o cenário musical carioca.
              Em 1971, fundou o Coral Harmonia, grupo com o qual conquistou
              o primeiro prêmio no II e no III Concurso de Corais Escolares
              da Guanabara, em 1971 e 1972, respectivamente. Em 1974, após
              duas vitórias consecutivas, o coral foi convidado a participar
              como hors concours da etapa final do concurso. Essas conquistas
              deram projeção nacional ao trabalho desenvolvido por Solange
              Pinto Mendonça. À frente do Coral do Colégio Estadual
              Brigadeiro Schorcht, também obteve importantes reconhecimentos:
              o primeiro prêmio no VII e no IX Concurso de Corais do Jornal
              do Brasil, em 1980 e 1984, respectivamente, e o segundo prêmio
              no V e no VIII concursos da mesma iniciativa.
            </p>
          </div>

          <p className="text-justify indent-8 [text-indent:2rem]">
            Em 1987, Solange encerrou as atividades do Coral Harmonia e, no
            ano seguinte, fundou o Coral Harte Vocal. Ainda em 1988, o grupo
            dividiu o primeiro lugar na categoria Corais Juvenis de Vozes
            Mistas com o Coral do Centro Educacional de Niterói, regido por
            Ermano de Sá, na última edição do Concurso de Corais do Jornal
            do Brasil. Em 1986, assumiu a regência do Orfeão Carlos Gomes,
            tradicional coral do Instituto Superior de Educação do Rio de
            Janeiro (ISERJ), função que exerceu até 2003, quando se
            aposentou compulsoriamente aos 70 anos. Ao sair do ISERJ, fundou
            o Coro Feminino José Vieira Brandão, que se manteve por alguns
            anos e realizou belas apresentações. Sua atuação como regente
            também se estendeu ao Coral da Universidade Santa Úrsula, ao
            Coral do IBEU, ao Coral Reencontro com a Harte, ao Coral
            Entrecanto e ao Coro de Câmara Vocalis. No Conservatório
            Brasileiro de Música (CBM), fundou o Coral Lorenzo Fernandes.
          </p>

          {/* Segunda imagem: esquerda */}
          <div className="flow-root">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/2foto4.jpg",
                  alt: "Registro histórico de Solange",
                })
              }
              className="mb-4 ml-0 block w-full cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)] sm:float-left sm:mb-3 sm:mr-6 sm:w-[45%] sm:max-w-[400px]"
              aria-label="Ampliar segunda foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/2foto4.jpg"
                alt="Registro histórico de Solange"
                width={400}
                height={350}
                sizes="(max-width: 639px) calc(100vw - 64px), 400px"
                className="h-auto max-h-[350px] w-full rounded-xl object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </button>

            <p className="text-justify indent-8 [text-indent:2rem]">
              Solange foi ainda presidente da Associação Artística Harmonia
              (HARTE), entidade sediada no Rio de Janeiro por meio da qual
              realizou inúmeros projetos artísticos, ampliando as
              possibilidades de atuação e difusão do canto coral.
            </p>
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
              className="h-auto max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
