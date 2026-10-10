import { useRef, useState } from "react";
import { projetos, rotuloStatus } from "../data/projetos";
import type { Projeto } from "../types";
import Cantos from "./Cantos";
import CaseSoulMove from "./CaseSoulMove";
import Revelar from "./Revelar";
import Secao from "./Secao";

const corSinal: Record<Projeto["status"], string> = {
  finalista: "bg-vermelho",
  "em-andamento": "bg-azul",
  "em-breve": "bg-texto-suave",
};

/** Estudos de caso disponíveis, indexados pela âncora do projeto. */
const cases: Record<string, (props: { aoFechar: () => void }) => JSX.Element> = {
  soulmove: CaseSoulMove,
};

function Visual({ projeto }: { projeto: Projeto }) {
  if (projeto.imagem) {
    return (
      <div className="relative h-full min-h-[220px] overflow-hidden">
        <img
          src={projeto.imagem}
          alt=""
          className="foto-pb absolute inset-0 h-full w-full object-cover object-left-top opacity-70 transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fundo via-fundo/30 to-transparent" aria-hidden="true" />
        {projeto.logo && (
          <img src={projeto.logo} alt={`Logo ${projeto.nome}`} className="absolute bottom-5 left-5 h-9 rounded-md" loading="lazy" />
        )}
        <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-widest text-texto-suave">
          fig. arquitetura
        </span>
      </div>
    );
  }
  return (
    <div className="grade-pontos flex h-full min-h-[220px] flex-col justify-between p-5 font-mono text-xs text-texto-suave">
      <span className="uppercase tracking-widest">slot reservado</span>
      <p>
        <span className="text-texto">&gt;</span> aguardando próximo challenge<span className="cursor" />
      </p>
    </div>
  );
}

interface PropsCartao {
  projeto: Projeto;
  indice: number;
  aberto: boolean;
  aoAlternar: () => void;
}

function CartaoProjeto({ projeto, indice, aberto, aoAlternar }: PropsCartao) {
  const ref = useRef<HTMLDivElement>(null);
  const Case = projeto.ancoraCase ? cases[projeto.ancoraCase] : undefined;
  const Tag = Case ? "button" : "div";

  const alternar = () => {
    aoAlternar();
    // Mantém o card no topo da tela enquanto o painel se expande ou recolhe
    requestAnimationFrame(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <li>
      <Revelar atraso={indice * 80}>
        <div ref={ref} className="cantos border border-borda">
          <Cantos />
          <Tag
            type={Case ? "button" : undefined}
            onClick={Case ? alternar : undefined}
            aria-expanded={Case ? aberto : undefined}
            aria-controls={Case ? projeto.ancoraCase : undefined}
            className="group grid w-full bg-superficie/40 text-left transition-colors hover:bg-superficie md:grid-cols-[1fr_340px]"
          >
            <div className="flex flex-col p-6 md:p-9">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-texto-suave">
                <span>
                  <span className="text-texto">0{indice + 1}</span> / {projeto.periodo}
                </span>
                <span className="ml-auto flex items-center gap-2">
                  <span className={`sinal h-1.5 w-1.5 rounded-full ${corSinal[projeto.status]}`} aria-hidden="true" />
                  {rotuloStatus[projeto.status]}
                </span>
              </div>

              <h3 className={`mt-8 text-4xl md:text-5xl ${projeto.status === "em-breve" ? "text-texto-suave" : ""}`}>
                <span className={Case ? "aberracao" : ""}>{projeto.nome}</span>
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-texto-suave">{projeto.resumo}</p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-borda pt-5 font-mono text-xs md:grid-cols-[120px_1fr]">
                <dt className="uppercase tracking-widest text-texto-suave">Parceiro</dt>
                <dd>{projeto.parceiro ?? "—"}</dd>
                <dt className="uppercase tracking-widest text-texto-suave">Stack</dt>
                <dd className="flex flex-wrap gap-x-3 gap-y-1">
                  {projeto.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </dd>
              </dl>

              {Case && (
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                  {aberto ? "Fechar estudo de caso" : "Abrir estudo de caso"}
                  <span
                    className={`inline-block transition-transform duration-500 ${aberto ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </span>
              )}
            </div>

            <div className="border-t border-borda md:border-l md:border-t-0">
              <Visual projeto={projeto} />
            </div>
          </Tag>

          {Case && (
            <div id={projeto.ancoraCase} className={`expansivel ${aberto ? "aberto" : ""}`}>
              <div className="expansivel-caixa">
                <div className="expansivel-conteudo" {...({ inert: aberto ? undefined : "" } as object)}>
                  <Case aoFechar={alternar} />
                </div>
              </div>
            </div>
          )}
        </div>
      </Revelar>
    </li>
  );
}

export default function Projetos() {
  const [abertoId, setAbertoId] = useState<string | null>(null);
  const finalistas = projetos.filter((p) => p.status === "finalista").length;

  return (
    <Secao
      id="projetos"
      numero="02"
      rotulo="Projetos"
      titulo="Projetos que saem do papel."
      descricao="Cada Challenge vira um produto real, com parceiro de mercado, arquitetura definida e código publicado."
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-texto-suave">
        {String(projetos.length).padStart(2, "0")} projetos · {String(finalistas).padStart(2, "0")} finalista
      </p>
      <ul className="grid gap-4">
        {projetos.map((p, i) => (
          <CartaoProjeto
            key={p.id}
            projeto={p}
            indice={i}
            aberto={abertoId === p.id}
            aoAlternar={() => setAbertoId((atual) => (atual === p.id ? null : p.id))}
          />
        ))}
      </ul>
    </Secao>
  );
}
