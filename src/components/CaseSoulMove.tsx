import { useState } from "react";
import { diferenciais, etapas, soulmove, tecnologias } from "../data/soulmove";
import Faq from "./Faq";
import Revelar from "./Revelar";
import SoulUpMarca from "./SoulUpMarca";

const cartao = "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm";

function Titulo({ children }: { children: string }) {
  return (
    <h3 className="soul-titulo text-2xl text-white md:text-[2rem]">
      <span className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-soul-ciano to-soul-azul" aria-hidden="true" />
      {children}
    </h3>
  );
}

/** Título principal com o trecho de destaque em gradiente */
function TituloPrincipal() {
  const [antes, depois] = soulmove.slogan.split(soulmove.sloganDestaque);
  return (
    <h2 id="soulmove-titulo" className="soul-titulo mt-6 max-w-3xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
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
    <article className="soul-fundo border-t border-borda text-white" aria-labelledby="soulmove-titulo">
      <div className="px-5 py-12 md:px-9 md:py-16">
        {/* Cabeçalho: numeração do site + marca do parceiro */}
        <Revelar>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-white/60">
              <span className="text-white">03</span> / Estudo de caso
            </p>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-3 text-sm text-white/60">
                Em parceria com
                <SoulUpMarca />
              </p>
              <button
                type="button"
                onClick={aoFechar}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                Fechar ×
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-soul-amarelo px-3.5 py-1.5 text-xs font-bold text-soul-navy">
                  Finalista FIAP NEXT 2026
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
                  Challenge FIAP · 1º semestre 2026
                </span>
              </div>
              <TituloPrincipal />
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{soulmove.contexto}</p>
            </div>
            <img
              src="/img/soulmove-logo.jpeg"
              alt="Logo SoulMove"
              className="h-16 w-auto rounded-xl md:h-20"
              loading="lazy"
            />
          </div>
        </Revelar>

        {/* Métricas */}
        <Revelar className="mt-14">
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {soulmove.metricas.map((m) => (
              <div key={m.rotulo} className={`${cartao} p-5 md:p-6`}>
                <dd className="soul-titulo text-4xl text-soul-amarelo md:text-5xl">{m.valor}</dd>
                <dt className="mt-2 text-sm text-white/70">{m.rotulo}</dt>
              </div>
            ))}
          </dl>
        </Revelar>

        {/* Desafio / Solução */}
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Revelar className="h-full">
            <div className={`${cartao} h-full p-7 md:p-9`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-soul-rosa">O problema</p>
              <Titulo>O desafio</Titulo>
              <div className="mt-4 space-y-4 leading-relaxed text-white/75">
                {soulmove.desafio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Revelar>
          <Revelar atraso={80} className="h-full">
            <div className="h-full rounded-2xl border border-soul-azul/50 bg-soul-azul/15 p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-widest text-soul-ciano">A proposta</p>
              <Titulo>A solução</Titulo>
              <div className="mt-4 space-y-4 leading-relaxed text-white/80">
                {soulmove.solucao.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Revelar>
        </div>

        {/* Como funciona: pílulas no estilo das abas do site da SoulUP */}
        <Revelar className="mt-20">
          <div className="text-center [&_h3>span]:mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-soul-azul-claro">Jornada do usuário</p>
            <Titulo>Como funciona</Titulo>
            <p className="mt-2 text-white/60">Da jornada ao reconhecimento, em cinco etapas.</p>
          </div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:justify-center" role="tablist" aria-label="Etapas">
            {etapas.map((e, i) => {
              const ativa = i === etapaAtiva;
              return (
                <button
                  key={e.titulo}
                  type="button"
                  role="tab"
                  aria-selected={ativa}
                  onClick={() => setEtapaAtiva(i)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    ativa ? "bg-soul-azul text-white" : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {e.titulo}
                </button>
              );
            })}
          </div>
          <div className={`${cartao} mt-6 grid gap-8 p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-12`} aria-live="polite">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-soul-amarelo text-3xl font-bold text-soul-navy md:h-28 md:w-28 md:text-5xl" aria-hidden="true">
              {etapaAtiva + 1}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Etapa {etapaAtiva + 1} de {etapas.length}
              </p>
              <h4 className="soul-titulo mt-2 text-3xl md:text-4xl">{etapa.titulo}</h4>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{etapa.descricao}</p>
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
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-soul-rosa px-2 text-xs font-bold text-white" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h4 className="soul-titulo mt-4 text-lg">{d.titulo}</h4>
                  <p className="mt-2 leading-relaxed text-white/70">{d.descricao}</p>
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
              <figcaption className="border-t border-white/10 p-6 leading-relaxed text-white/70">
                <strong className="text-white">Arquitetura.</strong> {soulmove.arquitetura}
              </figcaption>
            </figure>
          </Revelar>
          <Revelar atraso={80}>
            <div className={`${cartao} h-full p-7`}>
              <Titulo>Tecnologia</Titulo>
              <dl className="mt-5 divide-y divide-white/10">
                {tecnologias.map((t) => (
                  <div key={t.camada} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="text-sm text-white/55">{t.camada}</dt>
                    <dd className="font-medium sm:text-right">{t.stack}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Revelar>
        </div>

        {/* Próximos passos: gradiente azul → violeta da SoulUP */}
        <Revelar className="mt-20">
          <div className="soul-gradiente rounded-2xl p-8 md:p-12">
            <Titulo>Próximos passos</Titulo>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {soulmove.proximosPassos.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/90">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-soul-amarelo" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Revelar>

        {/* FAQ */}
        <Revelar className="mt-20">
          <Titulo>Perguntas frequentes</Titulo>
          <p className="mt-3 max-w-2xl text-white/60">As dúvidas mais comuns sobre a solução, respondidas de forma direta.</p>
          <div className="mt-8">
            <Faq />
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={aoFechar}
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-soul-navy transition-opacity hover:opacity-85"
            >
              Fechar estudo de caso
            </button>
            <p className="text-center text-xs text-white/45">
              SoulMove é um projeto acadêmico desenvolvido pela Un-Glitch no Challenge FIAP, em parceria com a SoulUP.
              Identidade visual da SoulUP utilizada com referência ao parceiro.
            </p>
          </div>
        </Revelar>
      </div>
    </article>
  );
}
