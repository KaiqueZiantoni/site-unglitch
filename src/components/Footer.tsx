import { linksMenu, site } from "../data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-borda">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 font-mono text-xs text-texto-suave md:flex-row md:items-center md:justify-between md:px-8">
        <Logo />
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 uppercase tracking-widest">
            {linksMenu.map((l) => (
              <li key={l.ancora}>
                <a href={`#${l.ancora}`} className="transition-colors hover:text-texto">
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {new Date().getFullYear()} {site.nome}</p>
      </div>
    </footer>
  );
}
