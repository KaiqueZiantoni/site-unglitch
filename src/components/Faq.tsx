import { useState } from "react";
import { faq } from "../data/faq";

/** FAQ do SoulMove, exibido dentro do estudo de caso. */
export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <ul className="border-t border-borda">
      {faq.map((item, i) => {
        const abertaAgora = aberta === i;
        const idConteudo = `faq-resposta-${i}`;
        return (
          <li key={item.pergunta} className="border-b border-borda">
            <button
              type="button"
              aria-expanded={abertaAgora}
              aria-controls={idConteudo}
              onClick={() => setAberta(abertaAgora ? null : i)}
              className="flex w-full items-start gap-4 py-4 text-left md:py-5"
            >
              <span className="mt-1 font-mono text-xs text-texto-suave">{String(i + 1).padStart(2, "0")}</span>
              <span className={`flex-1 text-base font-medium tracking-tight md:text-lg ${abertaAgora ? "text-texto" : "text-texto/85"}`}>
                {item.pergunta}
              </span>
              <span
                className={`mt-0.5 font-mono text-sm transition-all ${abertaAgora ? "rotate-45 text-soul-azul-claro" : "text-texto-suave"}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div id={idConteudo} hidden={!abertaAgora} className="pb-5">
              <p className="max-w-3xl pl-8 leading-relaxed text-texto-suave">{item.resposta}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
