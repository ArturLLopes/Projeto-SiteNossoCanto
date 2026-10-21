"use client";

import { useState } from "react";
import { BookOpen, Archive, Music4, Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import {
  memorialInfo,
  memorialInfo2,
  memorialInfo3,
  memorialInfo4,
} from "@/data/memorial";

// const introPhotos = [
//   {
//     src: "/images/galeria/_programas/A1.jpg",
//     alt: "Programa de concerto",
//     caption: "Programas de concerto — registros dos repertórios apresentados.",
//   },
//   {
//     src: "/images/galeria/_cartazes/A1.jpg",
//     alt: "Cartaz de concerto",
//     caption: "Cartazes que anunciaram os concertos do coral.",
//   },
//   {
//     src: "/images/galeria/_certificados/A1.jpg",
//     alt: "Certificado",
//     caption: "Certificados e reconhecimentos ao longo da trajetória.",
//   },
// ];

// const references = [
//   {
//     icon: <Music4 className="h-4 w-4" />,
//     label: "Programas de concerto",
//     description: "Documentos com repertórios, solistas e formações dos coros.",
//   },
//   {
//     icon: <Archive className="h-4 w-4" />,
//     label: "Acervo documental",
//     description:
//       "Correspondências, convites e cartazes reunidos pela família e amigos.",
//   },
//   {
//     icon: <BookOpen className="h-4 w-4" />,
//     label: "Histórias e depoimentos",
//     description:
//       "Relatos de quem cantou, ensaiou e conviveu com Solange ao longo dos anos.",
//   },
// ];

export function HomeIntro() {
  // const [lightboxOpen, setLightboxOpen] = useState(false);
  // const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Texto de apresentação */}
      <SectionTitle
        eyebrow="Boas-vindas"
        title="Apresentação"
        description="Este espaço digital foi criado para reunir e preservar a trajetória de Solange Pinto Mendonça e a memória do Canto Coral no Rio de Janeiro."
      />
      <Card className="p-5 sm:p-7">
        <div className="flex items-start gap-3 rounded-2xl mb-4 bg-[#edf0e9] p-4">
          <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage-dark)]" />
          <p className="text-base italic leading-6 text-[#3f443e]">
            “{memorialInfo4.quote}”
          </p>
        </div>

        <div className="space-y-5 text-[18px] leading-7 text-[#555a53]">
          <div className="block ">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/foto_1.jpg",
                  alt: "Registro histórico de Solange",
                })
              }
              className="mb-4 mx-auto block w-full max-w-[300px] cursor-zoom-in rounded-xl sm:float-left sm:ml-6 sm:mr-4 sm:mb-4 sm:mx-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)]"
              aria-label="Ampliar foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/foto_1.jpg"
                alt="Registro histórico de Solange"
                width={300}
                height={250}
                sizes="(max-width: 639px) 100vw, 300px"
                className="h-auto w-full rounded-xl object-contain transition duration-200 hover:opacity-90"
              />
            </button>
            <div className="flex-1">
              <p className="text-justify indent-8">
                A trajetória de Solange Pinto Mendonça como regente e
                professora, ao longo de 45 anos de atividade ininterrupta,
                constitui um capítulo importante da história do canto coral no
                Rio de Janeiro. Este site nasce com o propósito de preservar e
                compartilhar sua memória, documentar sua atuação profissional e
                dar visibilidade às suas realizações e contribuições. Por meio
                da organização e da divulgação de seu acervo pessoal, busca-se
                não apenas registrar uma trajetória individual, mas também
                contribuir para a preservação da memória do canto coral,
                reconhecendo a importância de seus protagonistas, de suas
                práticas e de suas experiências na construção dessa história.
              </p>

              <p className="mt-4 text-justify indent-8">
                Reunimos, assim, passado, presente e futuro. Conhecer as
                experiências e realizações de Solange nos permite compreender os
                caminhos percorridos pelo canto coral, refletir sobre o presente
                e projetar o futuro que desejamos construir. Essa perspectiva
                encontra eco nas reflexões de Artières (1998, p. 32), para quem
                o arquivamento de si, embora constitua uma prática íntima, pode
                assumir uma dimensão pública:
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-[#edf0e9] p-4">
            <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage-dark)]" />
            <p className="text-base italic leading-6 text-[#3f443e]">
              “{memorialInfo.quote}”
            </p>
          </div>

          <div className="block">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/foto_2.png",
                  alt: "Registro histórico de Solange",
                })
              }
              className="mb-4 mx-auto block w-full max-w-[300px] cursor-zoom-in rounded-xl sm:float-right sm:ml-6 sm:mr-4 sm:mb-4 sm:mx-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)]"
              aria-label="Ampliar foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/foto_2.png"
                alt="Registro histórico de Solange"
                width={300}
                height={250}
                sizes="(max-width: 639px) 100vw, 300px"
                className="h-auto w-full rounded-xl object-contain transition duration-200 hover:opacity-90"
              />
            </button>
            <div className="flex-1">
              <p className="text-justify indent-8">
                Solange deixou parte de sua história registrada em seu acervo e
                em suas realizações. Sua memória permanece viva nas lembranças
                daqueles que cantaram sob sua regência, compartilharam
                experiências musicais e acompanharam sua trajetória. Agora, por
                meio deste site, essa memória ganha novas possibilidades de
                circulação, alcançando também aqueles que não tiveram a
                oportunidade de conhecê-la pessoalmente. A internet amplia o
                alcance desses registros, permitindo que sua história ultrapasse
                fronteiras geográficas e temporais e se torne acessível a
                diferentes públicos. <br></br>
              </p>
              <p className="text-justify indent-8">
                O acervo disponibilizado neste espaço reúne fotografias, vídeos
                e gravações de áudio relacionados à atividade coral de Solange
                Pinto Mendonça, além de certificados de participação em eventos,
                correspondências profissionais, recortes de jornais sobre suas
                apresentações, convites recebidos e enviados, programas de
                concertos, documentos de registro de atividades e cartazes de
                divulgação. Integra também o conjunto documental uma relação do
                repertório desenvolvido por Solange ao longo de sua carreira,
                bem como das obras presentes em seu acervo. A esses registros
                somam-se trabalhos acadêmicos e outras produções relacionadas à
                sua trajetória, estabelecendo um diálogo entre a memória
                preservada, a reflexão crítica sobre o passado e a produção de
                novos conhecimentos.<br></br>A relevância dessa iniciativa
                ultrapassa, portanto, a dimensão afetiva da recordação. Como
                observa Cunha (2016, p. 205),
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-[#edf0e9] p-4">
            <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage-dark)]" />
            <p className="text-base italic leading-6 text-[#3f443e]">
              “{memorialInfo2.quote}”
            </p>
          </div>

          <div className="block">
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: "/images/perfil/fotos_texto/foto_3.png",
                  alt: "Registro histórico de Solange",
                })
              }
              className="mb-4 mx-auto block w-full max-w-[300px] cursor-zoom-in rounded-xl sm:float-left sm:ml-6 sm:mr-4 sm:mb-4 sm:mx-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage-dark)]"
              aria-label="Ampliar foto histórica de Solange"
            >
              <Image
                src="/images/perfil/fotos_texto/foto_3.png"
                alt="Registro histórico de Solange"
                width={300}
                height={250}
                sizes="(max-width: 639px) 100vw, 300px"
                className="h-auto w-full rounded-xl object-contain transition duration-200 hover:opacity-90"
              />
            </button>
            <div className="flex-1">
              <p className="text-justify indent-8">
                Nessa perspectiva, o acervo de Solange constitui um patrimônio
                documental de grande riqueza, capaz de oferecer fontes para a
                investigação de sua trajetória e para o estudo mais amplo da
                atividade coral no Rio de Janeiro.<br></br>
              </p>
              <p className="text-justify indent-8">
                Este site se constitui, assim, tanto em um espaço de memória e
                reencontro para aqueles que conviveram musicalmente com Solange
                quanto em uma fonte de pesquisa para pesquisadores, musicólogos,
                historiadores e demais interessados. Ao disponibilizar
                documentos escritos, registros iconográficos e materiais
                sonoros, pretende contribuir para a recuperação e a compreensão
                da intensa atividade coral desenvolvida no Rio de Janeiro na
                segunda metade do século XX e no início do século XXI.<br></br>
              </p>
              <p className="text-justify indent-8">
                Mais do que reunir documentos sobre o passado, este projeto
                busca conferir novos sentidos a esses registros, tornando-os
                acessíveis, estimulando pesquisas e favorecendo a circulação do
                conhecimento. Ao preservar e compartilhar a história de Solange
                Pinto Mendonça, contribuímos para que seu legado permaneça vivo
                e para que a memória do canto coral seja reconhecida como parte
                significativa da história cultural e musical de nossa sociedade.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-[#edf0e9] p-4">
            <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage-dark)]" />
            <p className="text-base italic leading-6 text-[#3f443e]">
              “{memorialInfo3.quote}”
            </p>
          </div>

          <SectionTitle
            title="Referências"
            description={
              <>
                ARTIÈRES, Philippe. Arquivar a própria vida.{" "}
                <span className="font-bold underline">Estudos Históricos</span>,
                Rio de Janeiro, v. 11, n. 21, p. 9-34, 1998.
                <br />
                Disponível em:{" "}
                <a
                  href="https://periodicos.fgv.br/reh/article/view/2061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--sage-dark)] underline hover:opacity-80"
                >
                  https://periodicos.fgv.br/reh/article/view/2061
                </a>
                . Acesso em: 16 out. 2026.
                <br />
                <br />
                CUNHA, Maria Teresa Santos. Testemunhos de outros tempos: um
                estudo sobre acervos pessoais de educadores (Santa Catarina - 1ª
                metade do século XX). In: BRAGANÇA, Inês Ferreira de Sousa;
                ABRAHÃO, Maria Helena Menna Barreto; FERREIRA, Márcia Santos
                (org.).
                <span className="font-bold underline">
                  Perspectivas epistêmico-metodológicas da pesquisa
                  (auto)biográfica.
                </span>{" "}
                Curitiba: CRV, 2016.
                <p className="text-justify ">
                  <br />
                  LE GOFF, Jacques.<span className="font-bold underline"> História e Memória.</span> Campinas, SP: Editora da Unicamp, 2013
                </p>
              </>
            }
          />
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
    </div>
  );
}
