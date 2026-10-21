# 🕊️ Memorial Digital — Solange Pinto Mendonça & Canto Coral

> Espaço digital dedicado a preservar a trajetória, o legado musical e a memória de Solange Pinto Mendonça e a história do canto coral no Rio de Janeiro.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 📖 Sobre o projeto

O Memorial Digital reúne, em um único espaço, a biografia de Solange Pinto Mendonça (1933–2016), educadora musical e regente coral, além de fotografias, documentos históricos, gravações de áudio (SoundCloud), vídeos (YouTube), trabalhos acadêmicos e uma linha do tempo de sua carreira de 45 anos.

O conteúdo é centralizado em arquivos de dados TypeScript, sem necessidade de banco de dados ou backend — o que torna o projeto leve, rápido e fácil de hospedar.

## ✨ Funcionalidades

- **Navegação por abas** — Início, Sobre, Linha do Tempo, Galeria, Documentos e Trabalhos Acadêmicos, com menu fixo (sticky) ao rolar.
- **Galeria de fotografias** — organizada em pastas temáticas, com modal de visualização e lightbox em tela cheia com zoom e navegação por teclado (setas/ESC).
- **Álbuns musicais** — playlists do SoundCloud incorporadas por álbum.
- **Vídeos** — player incorporado do YouTube (nocookie) com lista de vídeos.
- **Acervo documental** — divisões por categoria (cartazes, convites, correspondências, certificados, programas, dedicatórias) com carrossel de imagens e zoom.
- **Trabalhos acadêmicos** — cards com resumo, autor e link para o conteúdo completo.
- **Sidebar em telas grandes** — redes sociais, prévia da galeria e player de música aleatória ("Memórias musicais"), acompanhando a rolagem.
- **Responsividade completa** — layouts adaptados de 320px até desktop.
- **Proteção de mídia** — bloqueio de arrastar/selecionar imagens, menu de contexto e impressão.
- **SEO** — metadata, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt` e favicon completo.

## 🚀 Tecnologias

| Tecnologia                                             | Versão | Uso                  |
| ------------------------------------------------------ | ------ | -------------------- |
| [Next.js](https://nextjs.org) (App Router + Turbopack) | 16.3.3 | Framework full-stack |
| [React](https://react.dev)                             | 19.2.8 | UI                   |
| [TypeScript](https://www.typescriptlang.org)           | 5.x    | Tipagem estática     |
| [Tailwind CSS](https://tailwindcss.com)                | 4.3.3  | Estilização          |
| [lucide-react](https://lucide.dev)                     | —      | Ícones               |

## 📋 Pré-requisitos

- **Node.js** 20.9 ou superior
- **npm** 10+

## ⚙️ Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd memorial-digital

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de ambiente

| Variável               | Descrição                                    | Padrão                  |
| ---------------------- | -------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (usada em SEO/canonical) | `http://localhost:3000` |

## 🧑‍💻 Scripts

```bash
npm run dev      # Servidor de desenvolvimento (Turbopack) em http://localhost:3000
npm run build    # Build de produção
npm run start    # Serve o build de produção
npm run lint     # Executa o ESLint
```

## 📁 Estrutura do projeto

```text
src/
├── app/                 # Rotas (App Router), layout raiz, SEO e estilos globais
│   ├── layout.tsx       # Metadata, favicon e proteção de mídia
│   ├── page.tsx         # Página principal com abas + sidebar
│   ├── globals.css      # Design tokens (cores, sombras) e utilitários
│   ├── sitemap.ts / robots.ts
│   └── <rota>/page.tsx  # Rotas diretas para cada seção (sobre, galeria, ...)
├── components/
│   ├── layout/          # Navigation (menu sticky) e Footer
│   ├── memorial/        # Hero, HomeIntro, AboutSection, Biography, Timeline,
│   │                    # Gallery, Documents, Stories (conteúdo principal)
│   ├── sidebar/         # SocialLinks, GalleryPreview, MusicPreview
│   └── ui/              # Card, Modal, ImageLightbox, SectionTitle, etc.
├── config/
│   └── site.ts          # Configuração global do site (nome, URL, descrição)
├── data/
│   └── memorial.ts      # TODO o conteúdo: biografia, galeria, álbuns, vídeos,
│                        # documentos, timeline e trabalhos acadêmicos
├── lib/                 # Utilitários
└── types/               # Contratos TypeScript do conteúdo
```

## 📝 Gerenciamento de conteúdo

Todo o conteúdo do memorial é editado em **`src/data/memorial.ts`**:

- `memorialInfo*` — citações e informações gerais
- `timelineEvents` — linha do tempo da carreira
- `galleryFolders` — pastas e fotos da galeria
- `memorialAlbums` — álbuns/playlists do SoundCloud (`playlistUrl`, `tracks`)
- `memorialVideos` — vídeos do YouTube (`youtubeId`, `title`, `comment`)
- `documentDivisions` — documentos organizados por categoria
- `stories` — trabalhos acadêmicos (autor, resumo, URL)

Para adicionar uma foto, álbum ou documento, basta editar esse arquivo e fazer deploy — nenhuma alteração de componente é necessária.

### Imagens

As imagens ficam em `public/images/`:

```text
public/images/
├── capa/          # Capa do hero e logo
├── perfil/        # Fotos históricas dos textos
├── galeria/       # Fotografias e documentos do acervo
└── favicon/       # Favicon, webmanifest e ícones
```

## 🎨 Identidade visual

As cores do tema são definidas como variáveis CSS em `src/app/globals.css`:

| Token                    | Valor                 | Uso                     |
| ------------------------ | --------------------- | ----------------------- |
| `--background`           | `#F7EEE8`             | Fundo geral             |
| `--foreground`           | `#3d413b`             | Texto principal         |
| `--sage` / `--sage-dark` | `#71816f` / `#556452` | Destaques e acentos     |
| `--beige`                | `#e9e1d1`             | Superfícies secundárias |
| `--border`               | `#e3ddd0`             | Bordas e divisórias     |
| `--card`                 | `#ffffff`             | Cartões                 |

A cor de destaque do menu e dos botões é o verde-sálvia `#A4B494`, com tipografia display serifada (Georgia).

## ☁️ Deploy

O projeto é estático e pode ser hospedado em qualquer plataforma que suporte Next.js:

**Vercel (recomendado)**

1. Conecte o repositório na [Vercel](https://vercel.com).
2. Configure `NEXT_PUBLIC_SITE_URL` com a URL de produção.
3. Pushes em `main` geram deploy de produção; PRs geram previews automáticos.

Também funciona em Netlify, Cloudflare Pages ou qualquer servidor Node.js (`npm run build && npm run start`).

## 🤝 Fluxo de contribuição

- `main` — produção
- `development` — desenvolvimento
- Commits semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`

## 📄 Licença

Projeto privado — todos os direitos reservados à família e ao Projeto Legado Solange Pinto Mendonça.
