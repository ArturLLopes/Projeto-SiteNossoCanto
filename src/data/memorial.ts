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
  quote: "Pois arquivar a própria vida é definitivamente uma maneira de publicar a própria vida, é escrever o livro da própria vida que sobreviverá ao tempo e à morte”.",
  biography: [
    
  ],
  familyCredit: "",
};
export const memorialInfo2: Memorial = {
  name: "Canto Coral",
  birthDate: "",
  deathDate: "",
  birthPlace: "",
  deathPlace: "",
  quote: "[...] a arte de guardar que compõe a essência da existência dos acervos torna-se necessária no intuito de não apenas preservar memórias, mas também de servir de fonte/documentos à produção historiográfica",
  biography: [
    
  ],
  familyCredit: "",
};
export const memorialInfo3: Memorial = {
  name: "Canto Coral",
  birthDate: "",
  deathDate: "",
  birthPlace: "",
  deathPlace: "",
  quote: "Vanessa Weber de Castro  Rio de Janeiro, outubro de 2026",
  biography: [
    
  ],
  familyCredit: "",
};
export const memorialInfo4: Memorial = {
  name: "Canto Coral",
  birthDate: "",
  deathDate: "",
  birthPlace: "",
  deathPlace: "",
  quote: "Toda história é contemporânea, na medida em que o passado é            apreendido no presente e reponde, portanto, a seus interesses, o que            não só é inevitável como legítimo. Pois que a história é duração, o            passado é ao mesmo tempo passado e presente (Le Goff, 2013,p. 53).",
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
    title: "Certificados",
    description:
      "Convites solenes, celebrações em família e marcos acadêmicos guardados com afeto.",
    dateRange: "",
    items: [
      {
        id: "doc-convite-1",
        title: "Participação do Coral Harmonia no Projeto Corais ",
        description:
          "Participação do Coral Harmonia no Projeto Corais promovido pelo Departamento de Assuntos Culturais da Secretaria de Educação e Cultura do Governo do Estado do Rio de Janeiro .",
        date: "11/11/1972",
        category: "certificados",
        notes:
          "",
          imageUrl: "/images/galeria/_certificados/A1.jpg",
      },
      {
        id: "doc-convite-9",
        title: "Harmonia no Carmela Dutra",
        description:
          "Participação do Conjunto Harmonia na Semana de Aniversário da Escola Normal Carmela Dutra .",
        date: "18/6/1975",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A1a.jpg",
      },
      {
        id: "doc-convite-10",
        title: "Harmonia na Semana da Música",
        description:
          "Participação do Conjunto de Flauta Doce “Harmonia” na XXVIII Semana da Música.",
        date: "23/10/1975",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A1b.jpg",
      },
      {
        id: "doc-convite-11",
        title: "Coral Harmonia em Encontro de Corais",
        description:
          "Participação do Coral Harmonia no Primeiro Encontro de Corais do Rio de Janeiro.",
        date: "13/4/1976",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A1c.jpg",
      },
      {
        id: "doc-convite-2",
        title: "Participação do Coral do C. E. Brigadeiro Schorcht",
        description:
          "Participação do Coral do C. E. Brigadeiro Schorcht no II Encontro de Corais promovido pelo Colégio Estadual Gomes Freire de Andrade.",
        date: " em 30/5/1981",
        category: "certificados",
        notes: "",
        imageUrl: "/images/galeria/_certificados/A2.jpg",
      },
      {
        id: "doc-convite-3",
        title: "Participação no II Painel Funarte de Regência Coral",
        description:
          "Participação de Solange Pinto Mendonça no II Painel Funarte de Regência Coral, promovido pelo Projeto Villa-Lobos do Instituto Nacional de Música e realizado em Brasília (DF).  ",
        date: "7 e 12/6/1982",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A3.jpg",
      },
      {
        id: "doc-convite-4",
        title: "Moção recebida pelo Coral",
        description:
          "Moção recebida pelo Coral do C. E. Brigadeiro Schorcht proposta pelo Vereador Moacyr Bastos e aprovada pela mesa diretora da Câmara Municipal do Rio de Janeiro. ",
        date: "27/8/1982",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A4.jpg",
      },
      {
        id: "doc-convite-5",
        title: "Certificado atribuído a Solange",
        description:
          "Certificado atribuído a Solange Pinto Mendonça por sua atuação no “Treinamento para Regentes” promovido pelo Orfeão de Santa Cecília – Centro de Cultura de Campos e pela Prefeitura Municipal de Campos entre os dias .",
        date: "11, 12 e 13/11/1982",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A5.jpg",
      },
      {
        id: "doc-convite-6",
        title: "Participação do Coral Harte Vocal",
        description:
          "Participação do Coral Harte Vocal no III Encontro de Corais promovido pelo SESC – Três Rios.",
        date: "13/9/1992",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A6.jpg",
      },
      {
        id: "doc-convite-7",
        title: "Participação de Solange na condição de regente",
        description:
          "Participação de Solange Pinto Mendonça, na condição de regente do Coral Harte Vocal, no Encontro de Corais promovido pelo SESC – Tijuca .",
        date: "16/10/1993",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A7.jpg",
      },
      {
        id: "doc-convite-8",
        title: "Participação de Solange",
        description:
          "Participação de Solange Pinto Mendonça, membro do Coral Harte Vocal, no 5º Encontro Nacional de Corais realizado durante a II Semana de Arte e Folclore de Santa Teresa-ES.",
        date: "29/4/1995",
        category: "convites",
        notes:
          "",
        imageUrl: "/images/galeria/_certificados/A8.jpg",
      },
      
    ],
  },
  {
    id: "correspondencias",
    title: "Convites",
    description:
      "Cartas manuscritas, cartões postais de viagens e bilhetes de carinho trocados ao longo das décadas.",
    dateRange: "",
    items: [
      {
        id: "doc-corr-1",
        title: "Convite realizado pelos Corais Julia Pardini e Harmonia",
        description:
          "Convite para concerto realizado pelos Corais Julia Pardini e Harmonia na Igreja de São Francisco de Assis em Ouro Preto (MG) .",
        date: "30/3/1975",
        category: "correspondencias",
        notes:
          "",
          imageUrl: "/images/galeria/_convites/A1.jpg",
      },
      {
        id: "doc-corr-2",
        title: "Convite para o coquetel comemorativo",
        description:
          "Convite para o coquetel comemorativo pelo 6º Aniversário do Coral Harmonia .",
        date: "27/5/1977",
        category: "correspondencias",
        notes:
          "",
        imageUrl: "/images/galeria/_convites/A2.jpg",
      },
      {
        id: "doc-corr-3",
        title: "Convite do Conservatório Brasileiro de Música",
        description:
          "Convite do Conservatório Brasileiro de Música para lançamento do CD “A obra de José Vieira Brandão”.",
        date: "29/9/1995",
        category: "correspondencias",
        notes:
          "Do qual o Coral Harte Vocal fez parte",
        imageUrl: "/images/galeria/_convites/A3.jpg",  
      },
      {
        id: "doc-corr-4",
        title: "Convite para o coquetel de comemoração",
        description:
          "Convite para o coquetel de comemoração dos 25 anos de regência coral de Solange Pinto Mendonça .",
        date: "26/10/1996",
        category: "correspondencias",
        notes:
          "",
        imageUrl: "/images/galeria/_convites/A4.jpg",  
      },
    ],
  },
  {
    id: "correspondencias_cartas",
    title: "Correspondências",
    description:
      "Cartas, ofícios e correspondências trocadas ao longo da trajetória do coral.",
    dateRange: "",
    items: [
      {
        id: "doc-carta-1",
        title: "Ofício ao Coral Harmonia",
        description: "Ofício da Diretora do Departamento de Difusão Cultural da Universidade Federal Fluminense ao Coral Harmonia por ocasião do fim do ano de 1975.",
        date: "08/12/1975 ",
        category: "correspondencias",
        notes: "",
        imageUrl: "/images/galeria/_correspondencias/A1.jpg",
      },
      {
        id: "doc-carta-2",
        title: "Carta ao Orfeão Carlos Gomes",
        description: "Carta do Orfeão Carlos Gomes a Solange Pinto Mendonça por ocasião de seu aniversário ",
        date: "",
        category: "correspondencias",
        notes: "",
        imageUrl: "/images/galeria/_correspondencias/A2.jpg",
      },
      {
        id: "doc-carta-3",
        title: "Cartão de Natal",
        description: "Cartão de Natal assinado por José Vieira Brandão.",
        date: "17/12/1994",
        category: "correspondencias",
        notes: "",
        images: [
          "/images/galeria/_correspondencias/A3a.jpg",
          "/images/galeria/_correspondencias/A3b.jpg",          
        ],
      },
      {
        id: "doc-carta-4",
        title: "Carta de José Vieira Brandão",
        description: "Carta de José Vieira Brandão a Solange Pinto Mendonça por ocasião do concerto do Coral Harte Vocal em 12/8/1995.",
        date: "14/8/1995 ",
        category: "correspondencias",
        notes: "",
        imageUrl: "/images/galeria/_correspondencias/A4.jpg",
      },
      {
        id: "doc-carta-5",
        title: "Carta a Solange Pinto Mendonça",
        description: "Carta de Antonio Carlos a Solange Pinto Mendonça por ocasião da apresentação do Coral Harte Vocal no Rio Jazz Club, com demonstração de carinho e admiração.",
        date: "02/10/1995",
        category: "correspondencias",
        notes: "",
        images: [
          "/images/galeria/_correspondencias/A5a.jpg",
          "/images/galeria/_correspondencias/A5b.jpg",          
        ],      
      },
      {
        id: "doc-carta-6",
        title: "Carta de José Vieira Brandão (CD)",
        description: "Carta",
        date: "13/11/1995 José Vieira Brandão a Solange Pinto Mendonça por ocasião da gravação de suas obras em CD produzido pelo Conservatório Brasileira de Música.",
        category: "correspondencias",
        notes: "",
        imageUrl: "/images/galeria/_correspondencias/A4.jpg",
      },
      {
        id: "doc-carta-7",
        title: "Cartão de agradecimento",
        description: "Cartão de agradecimento da Instituição Legionários de Maria ao Coral Lorenzo Fernandes, sob regência de Solange Pinto Mendonça.",
        date: "",
        category: "correspondencias",
        notes: "",
        images: [
          "/images/galeria/_correspondencias/A7a.jpg",
          "/images/galeria/_correspondencias/A7b.jpg", 
          "/images/galeria/_correspondencias/A7c.jpg",          
        ],      
      },
    ],
  },
  {
    id: "programas",
    title: "Programas de concerto",
    description:
      "Programas distribuídos nos concertos e apresentações do Coral Harte Vocal ao longo dos anos.",
    dateRange: "",
    items: [
      {
        id: "doc-prog-1",
        title: "Concerto do Coral do Colégio Estadual Brigadeiro Schorcht ",
        description: "Programa do Concerto do Coral do Colégio Estadual Brigadeiro Schorcht no Concerto Didático na Sala Cecília Meireles em 07/10/1980.",
        date: "1980",
        category: "programas",
        notes: "",
        imageUrl: "/images/galeria/_programas/A1.jpg",
      },
      {
        id: "doc-prog-2",
        title: "Concerto do Coral do Colégio Estadual Brigadeiro Schorcht ",
        description: "Programa do Concerto do Coral do Colégio Estadual Brigadeiro Schorcht no Concerto Didático na Sala Cecília Meireles em 09/6/1981.",
        date: "1981",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/A2a1.jpg",
          "/images/galeria/_programas/A2a2.jpg", 
          "/images/galeria/_programas/A2a3.jpg",          
        ], 
      },
      {
        id: "doc-prog-3",
        title: "Coral Harmonia nos Sessenta Anos da Semana de Arte Moderna",
        description: "Programa das atividades comemorativas dos Sessenta Anos da Semana de Arte Moderna, com participação do Coral Harmonia em 05/4/1982.",
        date: "1982",
        category: "programas",
        notes: "vozes femininas em coro oculto",
        images: [
          "/images/galeria/_programas/A3a1.jpg",
          "/images/galeria/_programas/A3a2.jpg", 
          "/images/galeria/_programas/A3a3.jpg",
          "/images/galeria/_programas/A3a4.jpg",
          "/images/galeria/_programas/A3a5.jpg", 
          "/images/galeria/_programas/A3a6.jpg",            
        ],
      },
      {
        id: "doc-prog-4",
        title: "Coral Harmonia na Igreja São José",
        description: "Programa do concerto do Coral Harmonia na Igreja São José na série “Música no Corredor Cultural” em 14/4/1982",
        date: "1982",
        category: "programas",
        notes: "",
        imageUrl: "/images/galeria/_programas/A4.jpg",
      },
      {
        id: "doc-prog-5",
        title: "Coral Harmonia no Salão Leopoldo Miguez",
        description: "Programa do concerto do Coral Harmonia no Salão Leopoldo Miguez, na “Temporada Oficial de 1986” em 11/11/1986.",
        date: "1986",
        category: "programas",
        notes: "",
        imageUrl: "/images/galeria/_programas/A5.jpg",
      },
      {
        id: "doc-prog-6",
        title: "4º Encontro de Coros no Teatro Nacional de Brasília",
        description: "Programa do 4º Encontro de Coros realizado no Teatro Nacional de Brasília com participação do Coral Harte Vocal na “Noite dos convidados especiais” em 03/6/1989.",
        date: "1989",
        category: "programas",
        notes: "Sala Martins Penna",
        images: [
          "/images/galeria/_programas/A6a1.jpg",
          "/images/galeria/_programas/A6a2.jpg", 
          "/images/galeria/_programas/A6a3.jpg",                     
        ],
      },
      {
        id: "doc-prog-7",
        title: "Encontro com a Harte 1989",
        description: "Programa do Encontro com a Harte 1989, com a partipação do Orfeão Carlos Gomes, do Coral Harte Vocal, realizado na Casa Rosa (SESC Tijuca) em 30/8/1989",
        date: "1989",
        category: "programas",
        notes: "apresentações independentes piano, violão e vozes",
        imageUrl: "/images/galeria/_programas/A7.jpg",
      },
      {
        id: "doc-prog-8",
        title: " I Encontro de Corais da Escola Naval",
        description: "Programa do I Encontro de Corais da Escola Naval com participação do Coral Harte Vocal em 03/5/1990.",
        date: "1990",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/A8a1.jpg",
          "/images/galeria/_programas/A8a2.jpg", 
          "/images/galeria/_programas/A8a3.jpg",  
          "/images/galeria/_programas/A8a4.jpg",                    
        ],
      },
      {
        id: "doc-prog-9",
        title: "I Encontro com a Harte e a Uni-Rio",
        description: "Programa do I Encontro com a Harte e a Uni-Rio com participação do Coral Harte Vocal em 18/10/1990.",
        date: "1990",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/A9a1.jpg",
          "/images/galeria/_programas/A9a2.jpg", 
          "/images/galeria/_programas/A9a3.jpg",
          "/images/galeria/_programas/A9a4.jpg",
          "/images/galeria/_programas/A9a5.jpg", 
          "/images/galeria/_programas/A9a6.jpg",            
        ],
      },
      {
        id: "doc-prog-10",
        title: "Coral Harte Vocal no Projeto MontrealBank",
        description: "Programa do concerto do Coral Harte Vocal no Paço Imperial promovido pelo Projeto MontrealBank em 28/5/1992.",
        date: "1992",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B1a1.jpg",
          "/images/galeria/_programas/B1a2.jpg", 
          "/images/galeria/_programas/B1a3.jpg",
          "/images/galeria/_programas/B1a4.jpg",                   
        ],
      },
      {
        id: "doc-prog-11",
        title: "30º Aniversário do Coral do Centro Educacional de Niterói",
        description: "Programa do Encontro de Corais comemorativo do 30º Aniversário do Coral do Centro Educacional de Niterói, com participação do Coral Harte Vocal em 22/10/1992",
        date: "1992",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B2a1.jpg",
          "/images/galeria/_programas/B2a2.jpg", 
          "/images/galeria/_programas/B2a3.jpg",
          "/images/galeria/_programas/B2a4.jpg",  
          "/images/galeria/_programas/B2a5.jpg",
          "/images/galeria/_programas/B2a6.jpg",                  
        ],
      },
      {
        id: "doc-prog-12",
        title: "Encontro de Corais da Escola Naval",
        description: "Programa do Encontro de Corais da Escola Naval com participação do Coral Harte Vocal em 13/5/1993.",
        date: "1993",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B3a1.jpg",
          "/images/galeria/_programas/B3a2.jpg", 
          "/images/galeria/_programas/B3a3.jpg",                          
        ],
      },
      {
        id: "doc-prog-13",
        title: "Série Sábados Musicais",
        description: "Programa do concerto do Coral Harte Vocal na Série Sábados Musicais do Museu Villa-Lobos em 23/9/1993.",
        date: "1993",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B4a1.jpg",
          "/images/galeria/_programas/B4a2.jpg", 
          "/images/galeria/_programas/B4a3.jpg",
          "/images/galeria/_programas/B4a4.jpg",                   
        ],
      },
      {
        id: "doc-prog-14",
        title: "Encontro de Corais da Casa Rosa (SESC Tijuca)",
        description: "Programa do Encontro de Corais da Casa Rosa (SESC Tijuca) com participação do Coral Harte Vocal em 16/10/1993.",
        date: "1993",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B5a1.jpg",
          "/images/galeria/_programas/B5a2.jpg", 
          "/images/galeria/_programas/B5a3.jpg",
          "/images/galeria/_programas/B5a4.jpg",                   
        ],
      },
      {
        id: "doc-prog-15",
        title: "Coral Harte Vocal no Projeto MontrealBank ",
        description: "Programa do concerto do Coral Harte Vocal no Paço Imperial promovido pelo Projeto MontrealBank em 16/12/1993.",
        date: "1993",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B6a1.jpg",
          "/images/galeria/_programas/B6a2.jpg", 
          "/images/galeria/_programas/B6a3.jpg",
          "/images/galeria/_programas/B6a4.jpg",                   
        ],
      },
      {
        id: "doc-prog-16",
        title: "I Encontro de Corais do Museu Villa-Lobos",
        description: "Programa do I Encontro de Corais do Museu Villa-Lobos, com participação do Coral Entrecanto e do Coral Harte Vocal em 13/4/1994.",
        date: "1994",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B7a1.jpg",
          "/images/galeria/_programas/B7a2.jpg", 
          "/images/galeria/_programas/B7a3.jpg",
          "/images/galeria/_programas/B7a4.jpg", 
          "/images/galeria/_programas/B7a5.jpg",                   
        ],
      },
      {
        id: "doc-prog-17",
        title: "Movimento Artístico Lúcia Branco",
        description: "Programa do concerto do Coral Harte Vocal na Apresentação do Movimento Artístico Lúcia Branco em 15/4/1994, realizado na Sala da Congregação da Escola de Música da UFRJ.",
        date: "1994",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/B8a1.jpg",
          "/images/galeria/_programas/B8a2.jpg", 
          "/images/galeria/_programas/B8a3.jpg",                             
        ],
      },
      {
        id: "doc-prog-18",
        title: "Coral Harte Vocal no Paço Imperial",
        description: "Programa do concerto do Coral Harte Vocal no Paço Imperial em 28/4/1994.",
        date: "1994",
        category: "programas",
        notes: "",
        imageUrl: "/images/galeria/_programas/B9.jpg",
      },
      {
        id: "doc-prog-20",
        title: "Quintas feiras musicais” no Projeto Cultural CCF Brasil",
        description: "Programa da apresentação do Coral CBM-Centro na série “Quintas feiras musicais” no Projeto Cultural CCF Brasil em 22/12/1994 no Paço Imperial.",
        date: "1994",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/C1a1.jpg",
          "/images/galeria/_programas/C1a2.jpg",                                     
        ],
      },
      {
        id: "doc-prog-21",
        title: "Rio Jazz Club",
        description: "Programa do concerto do Coral Harte Vocal no Rio Jazz Club em 01/10/1995.",
        date: "1995",
        category: "programas",
        notes: "",
       imageUrl: "/images/galeria/_programas/C3.jpg",
      },
      {
        id: "doc-prog-22",
        title: "Série Vesperal",
        description: "Programa do concerto do Coral Harte Vocal na Série Vesperal em 04/8/1995 na Sala Cecília Meireles.",
        date: "1995",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/C4a1.jpg",
          "/images/galeria/_programas/C4a2.jpg",
          "/images/galeria/_programas/C4a3.jpg",
          "/images/galeria/_programas/C4a4.jpg",                                     
        ],
      },
      {
        id: "doc-prog-23",
        title: "Série “Humaitá Canta”",
        description: "Programa do concerto do Coral Harte Vocal no Rio Jazz Club em 01/10/1995.",
        date: "1995",
        category: "programas",
        notes: "",
       imageUrl: "/images/galeria/_programas/C5.jpg",
      },
      {
        id: "doc-prog-24",
        title: "“Pérolas e Corais” no CCBB",
        description: "Programa da série “Pérolas e Corais” promovido pelo Centro Cultural Banco do Brasil com participação do Coral Harte Vocal em 26/3/1996.",
        date: "1996",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/C6a1.jpg",
          "/images/galeria/_programas/C6a2.jpg",
          "/images/galeria/_programas/C6a3.jpg",
          "/images/galeria/_programas/C6a4.jpg", 
          "/images/galeria/_programas/C6a5.jpg",
          "/images/galeria/_programas/C6a6.jpg",
          "/images/galeria/_programas/C6a7.jpg",
          "/images/galeria/_programas/C6a8.jpg",
          "/images/galeria/_programas/C6a9.jpg",
          "/images/galeria/_programas/C6a10.jpg",
          "/images/galeria/_programas/C6a11.jpg",
          "/images/galeria/_programas/C6a12.jpg",
          "/images/galeria/_programas/C6a13.jpg",
          "/images/galeria/_programas/C6a14.jpg",                                              
        ],
      },
      {
        id: "doc-prog-25",
        title: "10 anos do Coral Harte Vocal",
        description: "Programa do concerto comemorativo dos 10 anos do Coral Harte Vocal realizado na Sala Cecília Meires em 29/11/1998.",
        date: "1998",
        category: "programas",
        notes: "",
       imageUrl: "/images/galeria/_programas/C7.jpg",
      },
      {
        id: "doc-prog-26",
        title: "Festival de Música Internacional de Inverno de Campos-R",
        description: "Programa do Festival de Música Internacional de Inverno de Campos-RJ com participação do Coral Harte Vocal no Encontro Nacional de Coros realizado em 28/7/2001 no Teatro do Censa (p. 23)",
        date: "2001",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/C8a1.jpg",
          "/images/galeria/_programas/C8a2.jpg",
          "/images/galeria/_programas/C8a3.jpg",
          "/images/galeria/_programas/C8a4.jpg", 
          "/images/galeria/_programas/C8a5.jpg",
          "/images/galeria/_programas/C8a6.jpg",
          "/images/galeria/_programas/C8a7.jpg",
          "/images/galeria/_programas/C8a8.jpg", 
          "/images/galeria/_programas/C8a9.jpg",
          "/images/galeria/_programas/C8a10.jpg",
          "/images/galeria/_programas/C8a11.jpg",
          "/images/galeria/_programas/C8a12.jpg", 
          "/images/galeria/_programas/C8a13.jpg",
          "/images/galeria/_programas/C8a14.jpg",
          "/images/galeria/_programas/C8a15.jpg",
          "/images/galeria/_programas/C8a16.jpg", 
          "/images/galeria/_programas/C8a17.jpg",
          "/images/galeria/_programas/C8a18.jpg",
          "/images/galeria/_programas/C8a19.jpg",
          "/images/galeria/_programas/C8a20.jpg", 
          "/images/galeria/_programas/C8a21.jpg",
          "/images/galeria/_programas/C8a22.jpg",
          "/images/galeria/_programas/C8a23.jpg",
          "/images/galeria/_programas/C8a24.jpg",
          "/images/galeria/_programas/C8a25.jpg",
          "/images/galeria/_programas/C8a26.jpg",
          "/images/galeria/_programas/C8a27.jpg",
          "/images/galeria/_programas/C8a28.jpg",                                      
        ],
      },
      {
        id: "doc-prog-27",
        title: "30 anos de regência de Solange Pinto Mendonça",
        description: "Programa do concerto comemorativo dos 30 anos de regência de Solange Pinto Mendonça com participação do Coro de Câmara Vocalis – CBM Tijuca e do Coral Harte Vocal em 07/11/2001 no Outeiro da Glória.",
        date: "2001",
        category: "programas",
        notes: "",
       imageUrl: "/images/galeria/_programas/C9.jpg",
      },
       {
        id: "doc-prog-28",
        title: "I Mostra Arte Nacional de Canto Coral",
        description: "Programa da I Mostra Arte Nacional de Canto Coral com participação do Coral Harte Vocal em 04/11 ",
        date: "",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/D1a1.jpg",
          "/images/galeria/_programas/D1a2.jpg",
          "/images/galeria/_programas/D1a3.jpg",
          "/images/galeria/_programas/D1a4.jpg",
          "/images/galeria/_programas/D1a5.jpg",                                        
        ],
      },
       {
        id: "doc-prog-29",
        title: "VI Encontro de Corais do Grajaú Country Club",
        description: "Programa do VI Encontro de Corais do Grajaú Country Club, com participação do Coral Harte Vocal em 04/11 ",
        date: "",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/D2a1.jpg",
          "/images/galeria/_programas/D2a2.jpg",
          "/images/galeria/_programas/D2a3.jpg",
          "/images/galeria/_programas/D2a4.jpg",
          "/images/galeria/_programas/D2a5.jpg",
          "/images/galeria/_programas/D2a6.jpg",                                        
        ],
      },
      {
        id: "doc-prog-30",
        title: "Projeto Som Vocal",
        description: "Programa do concerto do Coral Harte Vocal no projeto Som Vocal ",
        date: "",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/D3a1.jpg",
          "/images/galeria/_programas/D3a2.jpg",
          "/images/galeria/_programas/D3a3.jpg",
          "/images/galeria/_programas/D3a4.jpg",                                                 
        ],
      },
      {
        id: "doc-prog-31",
        title: "2º Encontro de Corais da Associação de Canto Coral",
        description: "Programação do 2º Encontro de Corais da Associação de Canto Coral com participação do Coral Harte Vocal ",
        date: "",
        category: "programas",
        notes: "",
       imageUrl: "/images/galeria/_programas/D4.jpg",
      },
      {
        id: "doc-prog-32",
        title: "“Ciclo de apresentações de Orfeões Escolares” do CEPAM",
        description: "Programa da apresentação do Orfeão do Ginásio Estadual Tobias Monteiro no “Ciclo de apresentações de Orfeões Escolares” do CEPAM em 28/8 no Auditório do Instituto de Educação.",
        date: "",
        category: "programas",
        notes: "",
        images: [
          "/images/galeria/_programas/D5a1.jpg",
          "/images/galeria/_programas/D5a2.jpg",                                                          
        ],
      },
    ],
  },
];

