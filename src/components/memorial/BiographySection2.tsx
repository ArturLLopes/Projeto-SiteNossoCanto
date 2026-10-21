"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { memorialInfo } from "@/data/memorial";

export function BiographySection2() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="biografia" className="scroll-mt-24">
      <SectionTitle eyebrow="" title="Legado e Reconhecimento Musical" />
      <Card className="p-5 sm:p-7">
        <div className="space-y-5 text-[18px] leading-7 text-[#555a53] sm:text-[18px]">
          <div className="block">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/a.png",
                  alt: "Registro histórico de Solange",
                })
              }
              className="float-left mb-4 ml-6 mr-4 block w-full max-w-[400px] cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)]"
              aria-label="Ampliar foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/a.png"
                alt="Registro histórico de Solange"
                width={400}
                height={350}
                sizes="(max-width: 639px) 100vw, 300px"
                className="h-auto w-full rounded-xl object-contain transition duration-200 hover:opacity-90"
              />
            </button>

            <div className="flex-1">
              <p className="text-justify indent-8">
                Em 2000, participou do VIII Festival de Corais de Atenas com o
                Coral Harte Vocal e foi premiada como Melhor Coral Folclórico,
                além de receber Medalha de Bronze na Categoria Corais Mistos e
                Medalhe de Bronze na categoria Coros de Câmara.
              </p>
              <p className="text-justify indent-8">
                Ao longo de sua trajetória, realizou gravações que integram a
                memória do canto coral brasileiro e teve composições dedicadas
                aos grupos que dirigia por importantes nomes da composição coral
                nacional. Essas realizações testemunham o reconhecimento
                conquistado por seu trabalho e a relevância de sua contribuição
                para a prática coral no país. Solange Pinto Mendonça faleceu em
                1º de agosto de 2016, deixando um legado expressivo para a
                história da educação musical e do canto coral no Brasil. Sua
                atuação ultrapassou os limites da formação musical, pois, por
                meio do canto coletivo, promoveu experiências de aprendizagem,
                convivência, sensibilidade artística e desenvolvimento humano
                que marcaram a trajetória de inúmeros estudantes e cantores.
              </p>
              <p className="text-justify indent-8">
                A identidade sonora dos corais regidos por Solange era marcada pela clareza das vozes brancas, sem impostação, sem vibrato, pela afinação cuidadosamente trabalhada e pela execução exclusivamente a cappella. A essas características somava-se uma impressionante paleta de nuances dinâmicas, que conferia expressividade e singularidade às interpretações de seus grupos. Essa sonoridade, fruto de um trabalho musical rigoroso e sensível, permanece como uma das marcas mais significativas de sua contribuição à história do canto coral.
              </p>
            </div>
          </div>
        </div>
        {/* {memorialInfo.familyCredit}         */}
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
