import type {
  AudioItem,
  DocumentDivision,
  DocumentItem,
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
  name: "Canto Coral",
  birthDate: "",
  deathDate: "",
  birthPlace: "",
  deathPlace: "",
  quote: "Uma vida para lembrar, histórias para continuar compartilhando.",
  biography: [
    
  ],
  familyCredit: "",
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

export const documentDivisions: DocumentDivision[] = [
  {
    id: "cartazes",
    title: "Cartazes de concertos",
    description:
      "Cartazes, panfletos e programas originais de apresentações musicais, recitais e concertos marcantes.",
    dateRange: "",
    items: [
      {
        id: "doc-cartaz-1",
        title: "Encontro com a Harte e a Unirio.",
        description: "I Encontro com a Harte e a Unirio em 18/10/1990.",
        date: "18/10/1990",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/A1.jpg",
      },
      {
        id: "doc-cartaz-2",
        title: "Concerto do Coral Harte Vocal no Museu Villa-Lobos ",
        description:
          "Concerto do Coral Harte Vocal no Museu Villa-Lobos em 25/9/1993.",
        date: "25/9/1993",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/A2.jpg",
      },
      {
        id: "doc-cartaz-3",
        title: "Participação do Coral Harte Vocal na série “Pérolas e Corais” do Centro Cultural Banco do Brasil",
        description:
          "A apresentação foi intitulada “Pérolas e Corais: Francis Hime e Coral Harte Vocal – Fantasia Carioca”",
        date: "26/3/1996",
        category: "cartazes",
        notes: "A apresentação aconteceu em dois horários: 12h30 e 18h30.",
        images: [
          "/images/galeria/_cartazes/A3a.jpg",
          "/images/galeria/_cartazes/A3b.jpg",
          "/images/galeria/_cartazes/A3c.jpg",
          "/images/galeria/_cartazes/A3d.jpg",
        ],
      },
      {
        id: "doc-cartaz-4",
        title: "Concerto de 10 anos do Coral Harte Vocal, realizado na Sala Cecília Meireles.",
        description:
          "Concerto de 10 anos do Coral Harte Vocal, realizado na Sala Cecília Meireles, em 29/11/1998.",
        date: "29/11/1998",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/A4.jpg",
      },
      {
        id: "doc-cartaz-5",
        title: "Concerto em comemoração aos 40 anos de regência.",
        description:
          "Realizado em 03/12/2011 no Salão Leopoldo Miguez da Escola de Música da UFRJ.",
        date: "29/11/1998",
        category: "cartazes",
        notes: "40 anos de regência de Solange Pinto Mendonça",
        imageUrl: "/images/galeria/_cartazes/A5.jpg",
      },
      {
        id: "doc-cartaz-6",
        title: "Concerto do Coral Harmonia",
        description:
          "Concerto do Coral Harmonia no Auditório do CT (Bloco A) em 25/4 ",
        date: "25/4 ",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/A6.jpg",
      },
      {
        id: "doc-cartaz-7",
        title: "Concerto do Harte Vocal na Sala Sidney Müller ",
        description:
          "Concerto do Harte Vocal na Sala Sidney Müller na Funarte em 29/8 ",
        date: "29/8  ",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/A7.jpg",
      },
      {
        id: "doc-cartaz-8",
        title: "Apresentação do Coral Harte Vocal no projeto Som Vocal",
        description:
          "Apresentação do Coral Harte Vocal no projeto Som Vocal no Rio Jazz Club em 01/10 ",
        date: "01/10",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/A8.jpg",
      },
      {
        id: "doc-cartaz-9",
        title: "Apresentação do Coral Harte Vocal no projeto Humaitá Canta",
        description:
          "Apresentação do Coral Harte Vocal no projeto Humaitá Canta, no Espaço Cultural Sérgio Porto, em 22/9 ",
        date: "22/9 ",
        category: "cartazes",
        notes: "",
        images: [
          "/images/galeria/_cartazes/A9a.jpg",
          "/images/galeria/_cartazes/A9b.jpg",          
        ],
      },
      {
        id: "doc-cartaz-10",
        title: "Concerto do Coral Harte Vocal",
        description:
          "Concerto do Coral Harte Vocal na Sala Cecília Meireles ",
        date: "04/8",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/B1.jpg",
      },
      {
        id: "doc-cartaz-11",
        title: "Participação do Coral Harte Vocal no Festival Villa-Lobos",
        description:
          "Participação do Coral Harte Vocal no Festival Villa-Lobos em 17/11 na Sala Cecília Meireles",
        date: "17/11",
        category: "cartazes",
        notes: "",
        imageUrl: "/images/galeria/_cartazes/B2.jpg",
      },
    ],
  },
  {
    id: "convites",
    title: "Convites",
    description:
      "Convites solenes, celebrações em família, bodas e marcos acadêmicos guardados com afeto.",
    dateRange: "1960 — 2010",
    items: [
      {
        id: "doc-convite-1",
        title: "Convite de Casamento Cerimonial",
        description:
          "Convite clássico em papel encorpado com caligrafia dourada e fita de cetim preservada.",
        date: "1965",
        category: "convites",
        notes:
          "Guardado junto com uma pétala desidratada do buquê da cerimônia.",
      },
      {
        id: "doc-convite-2",
        title: "Bodas de Prata — 25 Anos de Amor",
        description:
          "Convite da celebração de bodas de prata reunindo amigos de infância e familiares de diversas cidades.",
        date: "1990",
        category: "convites",
        notes: "Missa em ação de graças e recepção comemorativa.",
      },
      {
        id: "doc-convite-3",
        title: "Formatura Solene do Curso de Magistério",
        description:
          "Convite oficial da colação de grau e baile de formatura com dedicatória especial aos pais.",
        date: "1960",
        category: "convites",
        notes:
          "Início oficial de uma longa e dedicada trajetória como educadora.",
      },
    ],
  },
  {
    id: "correspondencias",
    title: "Correspondências",
    description:
      "Cartas manuscritas, cartões postais de viagens e bilhetes de carinho trocados ao longo das décadas.",
    dateRange: "1955 — 2018",
    items: [
      {
        id: "doc-corr-1",
        title: "Carta de Tereza sobre a Viagem de Trem",
        description:
          "Carta manuscrita enviada por correio tradicional narrando as novidades, impressões da capital e saudades.",
        date: "1958",
        category: "correspondencias",
        notes:
          "Contém selo original de época e carimbo postal do correio de Santa Aurora.",
      },
      {
        id: "doc-corr-2",
        title: "Cartão Postal da Serra das Hortênsias",
        description:
          "Postal com fotografia clássica e mensagem carinhosa escrita à mão durante as férias em família.",
        date: "1974",
        category: "correspondencias",
        notes:
          "Enviado com votos de saúde e paz para todos que ficaram na cidade.",
      },
      {
        id: "doc-corr-3",
        title: "Carta de Agradecimento da Escola Comunitária",
        description:
          "Mensagem calorosa assinada por alunos, colegas professoras e direção em homenagem aos anos de dedicação.",
        date: "1998",
        category: "correspondencias",
        notes:
          "Texto emocionante relembrando lições de vida dentro e fora da sala de aula.",
      },
    ],
  },
];
