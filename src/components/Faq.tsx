import { useState } from "react";
import { faq } from "../data/faq";

/** FAQ do SoulMove, exibido dentro do estudo de caso (estilo SoulUP). */
export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <div>
      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
        {faq.map((item, i) => {
          const abertaAgora = aberta === i;
          const idConteudo = `faq-resposta-${i}`;
          return (
            <li key={item.pergunta}>
              <button
                type="button"
                aria-expanded={abertaAgora}
                aria-controls={idConteudo}
                onClick={() => setAberta(abertaAgora ? null : i)}
                className="flex w-full items-start gap-4 px-5 py-4 text-left md:px-7 md:py-5"
              >
                <span className="mt-1 font-mono text-xs text-white/40">{String(i + 1).padStart(2, "0")}</span>
                <span className={`flex-1 text-base font-semibold md:text-lg ${abertaAgora ? "text-white" : "text-white/85"}`}>
                  {item.pergunta}
                </span>
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm transition-all ${
                    abertaAgora ? "rotate-45 bg-soul-azul text-white" : "bg-white/10 text-white/70"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div id={idConteudo} hidden={!abertaAgora} className="px-5 pb-5 md:px-7 md:pb-6">
                <p className="max-w-3xl pl-7 leading-relaxed text-white/75">{item.resposta}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
