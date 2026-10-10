import type { ReactNode } from "react";
import Revelar from "./Revelar";

interface Props {
  id: string;
  numero: string;
  rotulo: string;
  titulo: ReactNode;
  descricao?: string;
  children: ReactNode;
}

/** Seção padrão: linha fina no topo, numeração em mono, título à esquerda e conteúdo. */
export default function Secao({ id, numero, rotulo, titulo, descricao, children }: Props) {
  return (
    <section id={id} className="border-t border-borda" aria-labelledby={`${id}-titulo`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Revelar>
          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <p className="font-mono text-xs uppercase tracking-widest text-texto-suave">
              <span className="text-texto">{numero}</span> / {rotulo}
            </p>
            <div>
              <h2 id={`${id}-titulo`} className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                {titulo}
              </h2>
              {descricao && (
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-texto-suave">{descricao}</p>
              )}
            </div>
          </div>
        </Revelar>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
