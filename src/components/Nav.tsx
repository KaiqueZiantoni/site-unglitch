import { useEffect, useState } from "react";
import { linksMenu } from "../data/site";
import { useSecaoAtiva } from "../hooks/useSecaoAtiva";

const ids = linksMenu.map((l) => l.ancora);

/** Barra mínima: marca à esquerda, botão de menu à direita, menu em tela cheia. */
export default function Nav() {
  const [aberto, setAberto] = useState(false);
  const ativa = useSecaoAtiva(ids);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex h-16 items-center justify-between px-5 md:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Un-Glitch, voltar ao início"
          >
            <img src="/logo.svg" alt="" className="h-7 w-7" />
            <span className="aberracao font-mono text-xs uppercase tracking-[0.25em] text-texto">
              un-glitch
            </span>
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-principal"
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-texto"
          >
            {aberto ? "fechar" : "menu"}
            <span
              className="flex h-4 w-5 flex-col justify-between"
              aria-hidden="true"
            >
              <span
                className={`h-px w-full bg-texto transition-transform ${aberto ? "translate-y-[7.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-texto transition-opacity ${aberto ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-texto transition-transform ${aberto ? "-translate-y-[7.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Painel do menu: fora do cabeçalho para não herdar a mesclagem */}
      <nav
        id="menu-principal"
        aria-label="Seções do site"
        className={`fixed inset-0 z-40 bg-fundo pt-16 transition-opacity duration-300 ${
          aberto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="mx-auto flex h-full max-w-6xl flex-col justify-center px-5 md:px-8">
          {linksMenu.map((link, i) => (
            <li key={link.ancora} className="border-b border-borda">
              <a
                href={`#${link.ancora}`}
                onClick={() => setAberto(false)}
                aria-current={ativa === link.ancora ? "true" : undefined}
                className={`group flex items-baseline justify-between py-5 font-display text-4xl tracking-tight transition-colors md:py-7 md:text-6xl ${
                  ativa === link.ancora
                    ? "text-texto"
                    : "text-texto-suave hover:text-texto"
                }`}
              >
                <span className="aberracao">{link.rotulo}</span>
                <span className="font-mono text-xs text-texto-suave">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
