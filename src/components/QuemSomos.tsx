import { equipe, frentes } from "../data/equipe";
import Cantos from "./Cantos";
import Revelar from "./Revelar";
import Secao from "./Secao";

const numeros = [
  { valor: "05", rotulo: "integrantes" },
  { valor: "Top 6", rotulo: "FIAP NEXT 2026" },
  { valor: "100+", rotulo: "testes automatizados" },
] as const;

/** Visão geral da Un-Glitch: números, frentes de atuação e os desenvolvedores. */
export default function QuemSomos() {
  return (
    <Secao
      id="quem-somos"
      numero="01"
      rotulo="Quem somos"
      titulo="Um time que entrega ponta a ponta."
      descricao="A Un-Glitch nasceu na FIAP e trabalha como uma empresa: cada integrante assume uma frente e o resultado é um produto completo, testado e publicado."
    >
      {/* Números */}
      <Revelar>
        <dl className="flex flex-wrap gap-x-12 gap-y-6 border-y border-borda py-6">
          {numeros.map((n) => (
            <div key={n.rotulo}>
              <dd className="text-3xl tracking-tight md:text-4xl">{n.valor}</dd>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-texto-suave">{n.rotulo}</dt>
            </div>
          ))}
        </dl>
      </Revelar>

      {/* Frentes */}
      <ul className="mt-16">
        {frentes.map((f, i) => (
          <li key={f.titulo} className="border-b border-borda">
            <Revelar atraso={i * 60}>
              <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr_1fr] md:gap-6 md:py-8">
                <span className="font-mono text-xs text-texto-suave">0{i + 1}</span>
                <h3 className="text-xl">{f.titulo}</h3>
                <p className="leading-relaxed text-texto-suave">{f.descricao}</p>
              </div>
            </Revelar>
          </li>
        ))}
      </ul>

      {/* Desenvolvedores */}
      <Revelar className="mt-24">
        <div className="grid gap-6 md:grid-cols-[200px_1fr]">
          <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">Os desenvolvedores</p>
          <div>
            <h3 className="text-3xl md:text-4xl">As pessoas por trás do código.</h3>
            <p className="mt-3 text-texto-suave">Cinco estudantes de Análise e Desenvolvimento de Sistemas da FIAP.</p>
          </div>
        </div>
      </Revelar>
      <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {equipe.map((p, i) => (
          <li key={p.id}>
            <Revelar atraso={i * 60}>
              <article className="group">
                <div className="cantos">
                  <Cantos />
                  <img
                    src={p.foto}
                    alt={`Foto de ${p.nome}`}
                    className="foto-pb aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-texto/80">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4 border-t border-borda pt-4">
                  <div>
                    <h4 className="text-lg">{p.nome}</h4>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-texto-suave">{p.papel}</p>
                  </div>
                  <div className="flex gap-3 font-mono text-xs uppercase tracking-widest text-texto-suave">
                    <a href={p.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-texto">
                      GitHub
                    </a>
                    <a href={p.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-texto">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </article>
            </Revelar>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
