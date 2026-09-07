import type {
  AudioItem,
  Favorite,
  GalleryFolder,
  GalleryItem,
  Memorial,
  RecentUpdate,
  RemembranceDay,
  Story,
  TimelineEvent,
  Tribute,
  VideoItem,
} from "@/types/memorial";

export const memorialInfo: Memorial = {
  name: "Eleanor Hart",
  birthDate: "14 de maio de 1942",
  deathDate: "18 de março de 2026",
  birthPlace: "Santa Aurora",
  deathPlace: "Vila Serena",
  quote: "Uma vida para lembrar, histórias para continuar compartilhando.",
  biography: [
    "Eleanor foi professora, jardineira e amiga dedicada. Tinha o raro talento de transformar encontros simples em memórias duradouras.",
    "Ao longo dos anos, cultivou uma família unida, amizades sinceras e pequenas tradições que permanecem presentes nas pessoas que tiveram a alegria de conhecê-la.",
    "Este espaço reúne fotografias, histórias e palavras de carinho para que sua trajetória continue viva através de quem a ama.",
  ],
  familyCredit: "Compartilhado pela família Hart",
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "1942",
    title: "Nascimento",
    description:
      "Início de uma história marcada por afeto, curiosidade e generosidade.",
  },
  {
    date: "1965",
    title: "Casamento",
    description: "Começo de uma nova etapa ao lado de seu companheiro de vida.",
  },
  {
    date: "1970",
    title: "Nascimento dos filhos",
    description:
      "A família cresceu e vieram novos capítulos cheios de descobertas.",
  },
  {
    date: "1985",
    title: "Mudança de cidade",
    description:
      "Uma mudança que trouxe novos amigos, novas rotinas e novas lembranças.",
  },
  {
    date: "2001",
    title: "Aposentadoria",
    description: "Mais tempo para jardinagem, leituras, café e caminhadas.",
  },
  {
    date: "2026",
    title: "Despedida",
    description: "Uma despedida serena, deixando um legado de amor e presença.",
  },
];

export const favorites: Favorite[] = [
  {
    label: "Jardinagem",
    description: "Flores, sementes e tardes cuidando do jardim.",
  },
  {
    label: "Literatura",
    description: "Romances, poesia e livros compartilhados.",
  },
  {
    label: "Música",
    description: "Canções que acompanhavam os encontros em família.",
  },
  {
    label: "Café da tarde",
    description: "Um pequeno ritual para conversar e ouvir histórias.",
  },
  {
    label: "Caminhadas",
    description: "Passeios tranquilos por lugares conhecidos.",
  },
  {
    label: "Tradições",
    description: "Receitas e costumes preservados entre gerações.",
  },
];

export const galleryFolders: GalleryFolder[] = [
  {
    id: "folder-1",
    title: "Primeiros Anos & Juventude",
    date: "1945 — 1964",
    comment:
      "Registros da infância em Santa Aurora, tempos de escola e os primeiros passeios inesquecíveis.",
    items: [
      {
        id: "img-1",
        title: "Com os pais no sítio",
        description: "Tarde ensolarada de verão na casa dos avós.",
        date: "1952",
      },
      {
        id: "img-2",
        title: "Formatura do colégio",
        description:
          "O dia em que decidiu seguir com orgulho a carreira de professora.",
        date: "1960",
      },
      {
        id: "img-3",
        title: "Passeio com as amigas",
        description:
          "Primeira viagem de trem até a capital com as companheiras de turma.",
        date: "1963",
      },
    ],
  },
  {
    id: "folder-2",
    title: "Casamento & Vida em Família",
    date: "1965 — 1985",
    comment:
      "O início de uma linda jornada a dois, o nascimento dos filhos e celebrações cheias de afeto.",
    items: [
      {
        id: "img-4",
        title: "O dia do casamento",
        description:
          "Celebração serena e cheia de amor com a família e os amigos mais próximos.",
        date: "1965",
      },
      {
        id: "img-5",
        title: "Primeiro aniversário dos filhos",
        description:
          "Festa no quintal de casa com bolo caseiro e sorrisos sinceros.",
        date: "1971",
      },
      {
        id: "img-6",
        title: "Férias de verão na serra",
        description:
          "Piquenique à beira do lago em um final de semana de sol e descanso.",
        date: "1979",
      },
    ],
  },
  {
    id: "folder-3",
    title: "O Jardim & Tardes Especiais",
    date: "1986 — 2015",
    comment:
      "Flores, café fresquinho, reuniões dominicais e a dedicação única a cada cantinho do lar.",
    items: [
      {
        id: "img-7",
        title: "Cuidando das hortênsias",
        description:
          "O momento favorito da tarde entre as mudas de flores e a terra molhada.",
        date: "1992",
      },
      {
        id: "img-8",
        title: "Café da tarde de domingo",
        description:
          "A mesa posta com carinho para receber todos que chegavam sem pressa.",
        date: "2004",
      },
      {
        id: "img-9",
        title: "Com os netos no jardim",
        description:
          "Contando histórias do passado sob a copa da grande árvore.",
        date: "2012",
      },
    ],
  },
];

export const galleryItems: GalleryItem[] = galleryFolders.flatMap(
  (folder) => folder.items,
);

export const memorialAudios: AudioItem[] = [
  {
    id: "audio-1",
    title: "Mensagem de Fim de Ano em Família",
    speaker: "Eleanor Hart",
    date: "24 de dezembro de 1998",
    duration: "01:42",
    comment:
      "Gravação em fita cassete com uma mensagem carinhosa desejando paz, saúde e união a todos.",
  },
  {
    id: "audio-2",
    title: "Lembranças sobre o Jardim da Infância",
    speaker: "Eleanor contando histórias aos netos",
    date: "14 de maio de 2010",
    duration: "02:15",
    comment:
      "Áudio gravado durante a comemoração do aniversário, relatando como aprendeu a plantar rosas com sua mãe.",
  },
  {
    id: "audio-3",
    title: "Receita Tradicional do Bolo de Fubá",
    speaker: "Eleanor e Margaret",
    date: "18 de outubro de 2018",
    duration: "01:10",
    comment:
      "Uma tarde descontraída na cozinha com muitas risadas e segredos culinários de família.",
  },
];

export const memorialVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "Homenagem em Família — Momentos & Lembranças",
    date: "Maio de 2022",
    youtubeId: "jfKfPfyJRdk",
    comment:
      "Vídeo memorial com fotografias da trajetória de Eleanor, canções favoritas e mensagens carinhosas.",
  },
  {
    id: "video-2",
    title: "Tarde de Primavera no Jardim das Hortênsias",
    date: "Novembro de 2019",
    youtubeId: "5qap5aO4i9A",
    comment:
      "Registro gravado em família mostrando o jardim florido e a paz das tardes de primavera.",
  },
];

export const stories: Story[] = [
  {
    id: "story-1",
    title: "Uma tarde que nunca esqueceremos",
    author: "Margaret",
    date: "22 de março de 2026",
    summary:
      "Uma lembrança simples sobre café, chuva e uma conversa que ficou no coração.",
  },
  {
    id: "story-2",
    title: "O jardim da frente",
    author: "Thomas",
    date: "26 de março de 2026",
    summary:
      "Como uma pequena muda de flores virou parte da história da família.",
  },
  {
    id: "story-3",
    title: "Domingos em família",
    author: "Helen",
    date: "2 de abril de 2026",
    summary:
      "As refeições, as risadas e os costumes que atravessaram gerações.",
  },
];

export const initialTributes: Tribute[] = [
  {
    id: "tribute-1",
    author: "Margaret Hart",
    message:
      "Sua bondade continua presente em cada história que compartilhamos.",
    createdAt: "20 de março de 2026",
  },
  {
    id: "tribute-2",
    author: "Thomas Reed",
    message:
      "Sempre lembraremos do cuidado, da calma e da alegria que Eleanor levava consigo.",
    createdAt: "28 de março de 2026",
  },
];

export const recentUpdates: RecentUpdate[] = [
  {
    type: "tributo",
    title: "Novo tributo publicado por Helen",
    date: "2 de abril de 2026",
  },
  {
    type: "fotografia",
    title: "Nova fotografia adicionada à galeria",
    date: "30 de março de 2026",
  },
  {
    type: "historia",
    title: "Nova história: Domingos em família",
    date: "2 de abril de 2026",
  },
];

export const remembranceDays: RemembranceDay[] = [
  {
    label: "Aniversário",
    date: "14 de maio",
    description: "Um dia para celebrar a vida e as histórias que ficaram.",
  },
  {
    label: "Aniversário de falecimento",
    date: "18 de março",
    description: "Um dia de lembrança e carinho.",
  },
  {
    label: "Dia especial da família",
    date: "12 de outubro",
    description: "Uma tradição importante para os encontros da família.",
  },
];
