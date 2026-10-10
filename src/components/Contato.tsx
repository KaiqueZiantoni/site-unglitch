import { equipe } from "../data/equipe";
import { site } from "../data/site";
import Revelar from "./Revelar";

export default function Contato() {
  return (
    <section id="contato" className="border-t border-borda" aria-labelledby="contato-titulo">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Revelar>
          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">
              <span className="text-texto">03</span> / Contato
            </p>
            <div>
              <h2 id="contato-titulo" className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Gostou do que viu?
                <br />
                <span className="text-texto-suave">Vamos conversar.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-texto-suave">
                Estamos abertos a parcerias, feedback sobre o SoulMove e novos desafios.
                Fale com qualquer integrante.
              </p>

              {(site.email || site.githubOrg) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {site.email && (
                    <a href={`mailto:${site.email}`} className="bg-texto px-6 py-3 text-sm font-medium text-fundo transition-opacity hover:opacity-80">
                      {site.email}
                    </a>
                  )}
                  {site.githubOrg && (
                    <a href={site.githubOrg} target="_blank" rel="noreferrer" className="border border-borda px-6 py-3 text-sm font-medium transition-colors hover:border-texto">
                      GitHub do time
                    </a>
                  )}
                </div>
              )}

              <ul className="mt-10 border-t border-borda">
                {equipe.map((p) => (
                  <li key={p.id} className="border-b border-borda">
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between py-4 transition-colors hover:text-texto"
                    >
                      <span className="text-lg font-medium tracking-tight">{p.nome}</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-texto-suave transition-transform group-hover:translate-x-1">
                        LinkedIn →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
