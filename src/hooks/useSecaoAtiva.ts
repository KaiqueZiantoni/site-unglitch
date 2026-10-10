import { useEffect, useState } from "react";

/**
 * Devolve o id da seção ativa (scroll-spy): a última seção cujo topo já passou
 * da linha de referência (40% da altura da janela). No fim da página, a última seção.
 */
export function useSecaoAtiva(ids: readonly string[]): string {
  const [ativa, setAtiva] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    let agendado = false;

    const calcular = () => {
      agendado = false;
      const linha = window.innerHeight * 0.4;
      const fimDaPagina =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let atual = ids[0] ?? "";
      if (fimDaPagina) {
        atual = ids[ids.length - 1] ?? atual;
      } else {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= linha) atual = id;
        }
      }
      setAtiva((anterior) => (anterior === atual ? anterior : atual));
    };

    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, [ids]);

  return ativa;
}
