import { equipe } from "../data/equipe";
import Cantos from "./Cantos";
import Revelar from "./Revelar";
import Secao from "./Secao";

export default function Equipe() {
  return (
    <Secao
      id="equipe"
      numero="03"
      rotulo="Equipe"
      titulo="As pessoas por trás do código."
      descricao="Cinco estudantes de Análise e Desenvolvimento de Sistemas da FIAP."
    >
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h3 className="text-lg font-medium tracking-tight">{p.nome}</h3>
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
