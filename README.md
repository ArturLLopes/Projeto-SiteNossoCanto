# Memorial Digital

Memorial digital elegante, responsivo e preparado para evolução para uma plataforma com banco de dados, API e painel administrativo.

## Tecnologias
- Next.js 16.3.3
- React 19.2.8
- TypeScript
- Tailwind CSS 4.3.3
- Lucide React
- ESLint
- Git/GitHub
- Vercel

## Pré-requisitos
Node.js 20.9+ e npm.

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Lint
```bash
npm run lint
```

## Estrutura
```text
src/
├── app/              # rotas e metadata
├── components/       # componentes reutilizáveis
│   ├── layout/
│   ├── memorial/
│   ├── sidebar/
│   └── ui/
├── config/            # configuração do site
├── data/              # conteúdo demonstrativo centralizado
├── lib/               # utilitários
└── types/             # contratos TypeScript
```

## Variáveis de ambiente
Copie `.env.example` para `.env.local` e ajuste `NEXT_PUBLIC_SITE_URL` quando necessário.

## Conteúdo
Os dados fictícios de Eleanor Hart ficam centralizados em `src/data/memorial.ts`, evitando textos e nomes espalhados pelos componentes.

## Imagens
Nenhuma fotografia real é utilizada. A interface contém placeholders com proporções responsivas para que as imagens reais possam ser inseridas sem reconstruir o layout.

## Git
Sugestão de fluxo:
- `main`: produção
- `development`: desenvolvimento
- Commits: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`

## Vercel
Conecte o repositório GitHub à Vercel. O fluxo padrão gera deploy de produção para pushes em `main` e previews para Pull Requests.

## Evolução futura
A estrutura foi organizada para permitir PostgreSQL, API REST, autenticação, upload de imagens, moderação de tributos e painel `/admin` sem reescrever o núcleo visual.
