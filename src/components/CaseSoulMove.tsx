import { useState } from "react";
import { diferenciais, etapas, soulmove, tecnologias } from "../data/soulmove";
import Faq from "./Faq";
import Revelar from "./Revelar";
import SoulUpMarca from "./SoulUpMarca";

const cartao = "border border-borda bg-superficie";

function Titulo({ children }: { children: string }) {
  return (
    <h3 className="text-2xl md:text-3xl">
      <span className="soul-linha mb-3 block h-px w-10" aria-hidden="true" />
      {children}
    </h3>
  );
}

/** Título principal com o trecho de destaque em gradiente */
function TituloPrincipal() {
  const [antes, depois] = soulmove.slogan.split(soulmove.sloganDestaque);
  return (
    <h2 id="soulmove-titulo" className="mt-6 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
      {antes}
      <span className="soul-destaque">{soulmove.sloganDestaque}</span>
      {depois}
    </h2>
  );
}

export default function CaseSoulMove({ aoFechar }: { aoFechar: () => void }) {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const etapa = etapas[etapaAtiva];

  return (
    <article className="soul-fundo border-t border-borda" aria-labelledby="soulmove-titulo">
      <div className="soul-linha h-px w-full" aria-hidden="true" />
      <div className="px-5 py-12 md:px-9 md:py-16">
        {/* Cabeçalho: numeração do site + marca do parceiro */}
        <Revelar>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-borda pb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">
              <span className="text-texto">03</span> / Estudo de caso
            </p>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-texto-suave">
                Em parceria com
                <SoulUpMarca />
              </p>
              <button
                type="button"
                onClick={aoFechar}
                className="font-mono text-xs uppercase tracking-widest text-texto-suave transition-colors hover:text-texto"
              >
                Fechar ×
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest">
                <span className="rounded-full bg-soul-amarelo px-3 py-1 text-fundo">Finalista FIAP NEXT 2026</span>
                <span className="rounded-full border border-borda px-3 py-1 text-texto-suave">Challenge FIAP · 1º sem. 2026</span>
              </div>
              <TituloPrincipal />
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-texto-suave">{soulmove.contexto}</p>
            </div>
            <img src="/img/soulmove-logo.jpeg" alt="Logo SoulMove" className="h-14 w-auto rounded-lg md:h-16" loading="lazy" />
          </div>
        </Revelar>

        {/* Métricas */}
        <Revelar className="mt-14">
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {soulmove.metricas.map((m) => (
              <div key={m.rotulo} className={`${cartao} p-5 md:p-6`}>
                <dd className="text-4xl md:text-5xl">{m.valor}</dd>
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-widest text-texto-suave">{m.rotulo}</dt>
              </div>
            ))}
          </dl>
        </Revelar>

        {/* Desafio / Solução */}
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Revelar className="h-full">
            <div className={`${cartao} h-full p-7 md:p-9`}>
              <p className="font-mono text-xs uppercase tracking-widest text-soul-rosa">O problema</p>
              <h3 className="mt-2 text-2xl md:text-3xl">O desafio</h3>
              <div className="mt-4 space-y-4 leading-relaxed text-texto-suave">
                {soulmove.desafio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Revelar>
          <Revelar atraso={80} className="h-full">
            <div className={`${cartao} h-full border-l-2 border-l-soul-azul p-7 md:p-9`}>
              <p className="font-mono text-xs uppercase tracking-widest text-soul-azul-claro">A proposta</p>
              <h3 className="mt-2 text-2xl md:text-3xl">A solução</h3>
              <div className="mt-4 space-y-4 leading-relaxed text-texto-suave">
                {soulmove.solucao.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Revelar>
        </div>

        {/* Como funciona */}
        <Revelar className="mt-20">
          <Titulo>Como funciona</Titulo>
          <p className="mt-3 text-texto-suave">Da jornada ao reconhecimento, em cinco etapas.</p>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="tablist" aria-label="Etapas">
            {etapas.map((e, i) => {
              const ativa = i === etapaAtiva;
              return (
                <button
                  key={e.titulo}
                  type="button"
                  role="tab"
                  aria-selected={ativa}
                  onClick={() => setEtapaAtiva(i)}
                  className={`shrink-0 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                    ativa ? "border-soul-azul bg-soul-azul text-white" : "border-borda text-texto-suave hover:border-texto-suave hover:text-texto"
                  }`}
                >
                  {e.titulo}
                </button>
              );
            })}
          </div>
          <div className={`${cartao} mt-4 grid gap-6 p-7 md:grid-cols-[auto_1fr] md:items-start md:gap-10 md:p-10`} aria-live="polite">
            <span className="font-mono text-5xl text-soul-amarelo md:text-6xl" aria-hidden="true">
              0{etapaAtiva + 1}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">
                Etapa {etapaAtiva + 1} de {etapas.length}
              </p>
              <h4 className="mt-2 text-3xl md:text-4xl">{etapa.titulo}</h4>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-texto-suave">{etapa.descricao}</p>
            </div>
          </div>
        </Revelar>

        {/* Diferenciais */}
        <Revelar className="mt-20">
          <Titulo>Diferenciais</Titulo>
        </Revelar>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => (
            <li key={d.titulo}>
              <Revelar atraso={i * 60} className="h-full">
                <article className={`${cartao} h-full p-6`}>
                  <span className="font-mono text-xs text-soul-rosa" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h4 className="mt-3 text-lg">{d.titulo}</h4>
                  <p className="mt-2 leading-relaxed text-texto-suave">{d.descricao}</p>
                </article>
              </Revelar>
            </li>
          ))}
        </ul>

        {/* Arquitetura + tecnologia */}
        <div className="mt-20 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <Revelar>
            <figure className={`${cartao} overflow-hidden`}>
              <img
                src={soulmove.imagemArquitetura}
                alt="Diagrama da arquitetura do SoulMove: app, API, fila, motor de validação, banco de dados e painel SoulBusiness"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-borda p-6 leading-relaxed text-texto-suave">
                <strong className="text-texto">Arquitetura.</strong> {soulmove.arquitetura}
              </figcaption>
            </figure>
          </Revelar>
          <Revelar atraso={80}>
            <div className={`${cartao} h-full p-7`}>
              <h3 className="text-2xl md:text-3xl">Tecnologia</h3>
              <dl className="mt-5 divide-y divide-borda">
                {tecnologias.map((t) => (
                  <div key={t.camada} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
                    <dt className="font-mono text-xs uppercase tracking-widest text-texto-suave">{t.camada}</dt>
                    <dd>{t.stack}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Revelar>
        </div>

        {/* Próximos passos */}
        <Revelar className="mt-20">
          <div className={`${cartao} relative overflow-hidden p-7 md:p-10`}>
            <span className="soul-linha absolute inset-x-0 top-0 h-px" aria-hidden="true" />
            <h3 className="text-2xl md:text-3xl">Próximos passos</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {soulmove.proximosPassos.map((p, i) => (
                <li key={p} className="flex items-start gap-3 text-texto-suave">
                  <span className="font-mono text-xs leading-6 text-soul-azul-claro">0{i + 1}</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Revelar>

        {/* FAQ */}
        <Revelar className="mt-20">
          <Titulo>Perguntas frequentes</Titulo>
          <p className="mt-3 max-w-2xl text-texto-suave">As dúvidas mais comuns sobre a solução, respondidas de forma direta.</p>
          <div className="mt-8">
            <Faq />
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={aoFechar}
              className="border border-borda px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-texto"
            >
              Fechar estudo de caso ↑
            </button>
            <p className="text-center text-xs text-texto-suave/70">
              SoulMove é um projeto acadêmico desenvolvido pela Un-Glitch no Challenge FIAP, em parceria com a SoulUP.
            </p>
          </div>
        </Revelar>
      </div>
    </article>
  );
}
