import { useEffect, useRef } from "react";

/** Adiciona a classe `visivel` quando o elemento entra na tela (animação de entrada). */
export function useRevelar<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add("visivel");
          observador.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return ref;
}
