import { useEffect, useState } from "react";
import { linksMenu } from "../data/site";
import { useSecaoAtiva } from "../hooks/useSecaoAtiva";
import Logo from "./Logo";

const ids = linksMenu.map((l) => l.ancora);

export default function Nav() {
  const [aberto, setAberto] = useState(false);
  const ativa = useSecaoAtiva(ids);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-borda bg-fundo/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Seções do site">
          {linksMenu.map((link) => (
            <a
              key={link.ancora}
              href={`#${link.ancora}`}
              aria-current={ativa === link.ancora ? "true" : undefined}
              className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                ativa === link.ancora ? "text-texto" : "text-texto-suave hover:text-texto"
              }`}
            >
              {link.rotulo}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="font-mono text-xs uppercase tracking-widest md:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? "fechar" : "menu"}
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Seções do site"
        className={`md:hidden ${aberto ? "block" : "hidden"} h-[calc(100svh-3.5rem)] border-t border-borda bg-fundo`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
          {linksMenu.map((link, i) => (
            <li key={link.ancora} className="border-b border-borda">
              <a
                href={`#${link.ancora}`}
                onClick={() => setAberto(false)}
                aria-current={ativa === link.ancora ? "true" : undefined}
                className="flex items-baseline justify-between py-4 text-2xl font-medium tracking-tight"
              >
                {link.rotulo}
                <span className="font-mono text-xs text-texto-suave">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
