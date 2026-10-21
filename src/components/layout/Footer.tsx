import { memorialInfo } from "@/data/memorial";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[#ece7dc]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        
        {/* 1. SEÇÃO SUPERIOR: Título do Memorial, Redes Sociais e Navegação */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-3">
            <div>
              <p className="font-display text-2xl font-medium tracking-tight text-[#3e443d]">
                {memorialInfo.name}
              </p>
              <p className="mt-1 text-sm text-[var(--warm-gray)]">
                Um espaço dedicado ao amor, à música e às memórias eternas.
              </p>
            </div>

            {/* Ícones de Redes Sociais e E-mail */}
            <div className="flex flex-wrap items-center gap-2.5 text-[#596057]">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@SolangePintoMendon%C3%A7a-Legado"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube - Legado"
                className="rounded-full bg-[#3e443d]/10 p-2 text-[#596057] transition-all hover:bg-[#3e443d] hover:text-[#ece7dc]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.51 9.376.51 9.376.51s7.505 0 9.377-.51a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* SoundCloud */}
              <a
                href="https://on.soundcloud.com/hijpSOspLwHAtI8ZTI"
                target="_blank"
                rel="noopener noreferrer"
                title="SoundCloud"
                className="rounded-full bg-[#3e443d]/10 p-2 text-[#596057] transition-all hover:bg-[#3e443d] hover:text-[#ece7dc]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.04 0-.075.034-.08.08l-.34 3.935.34 3.91c.01.04.04.07.08.07s.07-.03.08-.07l.385-3.91-.385-3.935c-.01-.046-.045-.08-.08-.08zm2.28-1.07c-.05 0-.09.04-.1.09l-.4 5.015.4 4.985c.01.05.05.09.1.09s.09-.04.1-.09l.45-4.985-.45-5.015c-.01-.05-.05-.09-.1-.09zm2.31-1.1c-.06 0-.11.045-.11.11l-.42 6.125.42 6.095c.01.06.05.11.11.11.06 0 .11-.05.11-.11l.485-6.095-.485-6.125c0-.065-.05-.11-.11-.11zm2.33-.24c-.07 0-.13.05-.13.13l-.405 6.365.405 6.335c0 .07.06.13.13.13s.13-.06.13-.13l.485-6.335-.485-6.365c0-.08-.06-.13-.13-.13zm2.33-.11c-.08 0-.15.06-.15.15l-.33 6.475.33 6.445c0 .08.07.15.15.15s.15-.07.15-.15l.41-6.445-.41-6.475c0-.09-.07-.15-.15-.15zm2.34-.14c-.09 0-.17.07-.17.17l-.235 6.615.235 6.585c0 .09.08.17.17.17s.17-.08.17-.17l.325-6.585-.325-6.615c0-.1-.08-.17-.17-.17zm2.35 1.09c-.05 0-.1.02-.14.05-.05.04-.08.1-.08.16l-.115 5.515.115 6.485c0 .11.09.2.2.2h.02c.11 0 .2-.09.2-.2l.225-6.485-.225-5.515c-.02-.12-.11-.22-.22-.22zm3.32-2.15c-.17 0-.34.02-.5.06-.18-.84-.58-1.59-1.15-2.2-.82-.87-1.95-1.39-3.17-1.39-.77 0-1.51.21-2.15.59v15.21c1.55.05 12.35.84 12.35-6.15 0-3.38-2.39-6.12-5.38-6.12z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/projetolegado_solangepmendonca/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="rounded-full bg-[#3e443d]/10 p-2 text-[#596057] transition-all hover:bg-[#3e443d] hover:text-[#ece7dc]"
              >
                <svg className="h-4 w-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Contato E-mail */}
              <a
                href="mailto:contato@memorialdocantocoralspm.com.br"
                title="E-mail de Contato"
                className="rounded-full bg-[#3e443d]/10 p-2 text-[#596057] transition-all hover:bg-[#3e443d] hover:text-[#ece7dc]"
              >
                <svg className="h-4 w-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <nav 
            aria-label="Navegação do Footer" 
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#596057]"
          >
            <a href="#sobre" className="transition-colors hover:text-[#3e443d]">
              Sobre
            </a>
            <a href="#linha-do-tempo" className="transition-colors hover:text-[#3e443d]">
              Linha do Tempo
            </a>
            <a href="#galeria" className="transition-colors hover:text-[#3e443d]">
              Galeria
            </a>
            <a href="#repertorio" className="transition-colors hover:text-[#3e443d]">
              Repertório
            </a>
            <a href="#documentos" className="transition-colors hover:text-[#3e443d]">
              Documentos
            </a>
            <a href="#historias" className="transition-colors hover:text-[#3e443d]">
              Histórias
            </a>
          </nav>
        </div>

        {/* 2. SEÇÃO CENTRAL EXCLUSIVA: FRASE CRIATIVA DE DEDICAÇÃO À VANESSA WEBER */}
        <div className="relative my-10 overflow-hidden rounded-2xl border border-[#3e443d]/10 bg-[#e4dec2]/40 p-6 text-center sm:p-8">
          <p className="font-serif italic text-[#3e443d] text-base sm:text-lg leading-relaxed">
            &ldquo;Idealizado com sensibilidade e infinito afeto por{" "}
            <a
              href="https://www.instagram.com/vanessa.weber.1984/" // Substitua pelo link da Vanessa
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic font-semibold text-[#2f342e] underline decoration-[#3e443d]/40 underline-offset-4 transition-all hover:decoration-[#3e443d] hover:text-[#000]"
            >
              Vanessa Weber
            </a>
            , para fazer ressoar e perpetuar este lindo legado.&rdquo;
          </p>
        </div>

        {/* 3. SEÇÃO INFERIOR: Direitos Reservados e Desenvolvimento */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[#6e756c] sm:flex-row">
          <p>
            © {currentYear} {memorialInfo.name}. Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido com carinho por{" "}
            <a
              href="https://www.linkedin.com/in/arturlageslopes/" // Substitua pelo link real do Artur
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#3e443d] underline decoration-[#3e443d]/30 underline-offset-2 transition-colors hover:decoration-[#3e443d]"
            >
              Artur Lopes
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}