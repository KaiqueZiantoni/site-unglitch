import { site } from "../data/site";
import Cantos from "./Cantos";

const numeros = [
  { valor: "05", rotulo: "integrantes" },
  { valor: "Top 6", rotulo: "FIAP NEXT 2026" },
  { valor: "100+", rotulo: "testes automatizados" },
] as const;

export default function Hero() {
  return (
    <section id="inicio" className="pt-14" aria-label="Apresentação">
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col justify-between px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">
              <span className="text-texto">&gt;</span> {site.nome} — {site.instituicao}
              <span className="cursor" />
            </p>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[6.5rem]">
              Produtos digitais
              <br />
              <span className="aberracao">sem glitch.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-texto-suave md:text-xl">
              Um time de cinco desenvolvedores da FIAP. Transformamos desafios reais em
              software que funciona, do banco de dados à interface.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="bg-texto px-6 py-3 text-sm font-medium text-fundo transition-opacity hover:opacity-80"
              >
                Ver o SoulMove
              </a>
              <a
                href="#equipe"
                className="border border-borda px-6 py-3 text-sm font-medium transition-colors hover:border-texto"
              >
                Conhecer o time
              </a>
            </div>
          </div>

          <div className="cantos hidden p-6 md:block">
            <Cantos />
            <img src="/logo.svg" alt="Logo Un-Glitch" className="w-48 lg:w-60" />
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-texto-suave">
              un-glitch / v1.0
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-borda pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-vermelho align-middle" aria-hidden="true" />
            Finalistas do FIAP NEXT 2026 com o SoulMove · concorrendo ao 1º lugar
          </p>
          <dl className="flex gap-10">
            {numeros.map((n) => (
              <div key={n.rotulo}>
                <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{n.valor}</dd>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-texto-suave">{n.rotulo}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
