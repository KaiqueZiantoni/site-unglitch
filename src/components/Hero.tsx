import { Suspense, lazy, useEffect, useRef, useState } from "react";

const Logo3D = lazy(() => import("./Logo3D"));

const temWebGL = (() => {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
})();

export default function Hero() {
  const segurando = useRef(false);
  const [segurandoUI, setSegurandoUI] = useState(false);
  // segurandoUI alimenta só o texto de dica; o 3D lê a ref diretamente

  const iniciar = () => {
    segurando.current = true;
    setSegurandoUI(true);
  };
  const soltar = () => {
    segurando.current = false;
    setSegurandoUI(false);
  };

  // Soltar em qualquer lugar da janela (ou perder o foco) recompõe o logo
  useEffect(() => {
    window.addEventListener("pointerup", soltar);
    window.addEventListener("pointercancel", soltar);
    window.addEventListener("blur", soltar);
    return () => {
      window.removeEventListener("pointerup", soltar);
      window.removeEventListener("pointercancel", soltar);
      window.removeEventListener("blur", soltar);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-[100svh] select-none overflow-hidden bg-black"
      aria-label="Apresentação"
      onPointerDown={(e) => {
        if ((e.target as HTMLElement).closest("a, button")) return;
        iniciar();
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Objeto 3D (ou o SVG, sem WebGL), na metade superior do hero */}
      <div className="absolute inset-x-0 top-14 h-[58%]">
        {temWebGL ? (
          <Suspense fallback={null}>
            <Logo3D segurando={segurando} className="h-full w-full" />
          </Suspense>
        ) : (
          <img src="/logo.svg" alt="" className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>

      {/* Camada de interface: link no topo, texto e link abaixo do logo */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between px-5 pb-16 pt-20 text-center md:pb-20 md:pt-24">
        <a
          href="#projetos"
          className="pointer-events-auto border-b border-texto/40 pb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-texto/80 transition-colors hover:border-texto hover:text-texto"
        >
          Conheça nosso projeto
        </a>

        <div className="flex flex-col items-center gap-8 md:gap-10">
          <div>
            <h1 className="font-light text-2xl tracking-tight text-texto md:text-3xl">
              Un-Glitch <span className="text-texto/50">·</span> tech
            </h1>
            <p className="mt-1 font-light text-base text-texto/60 md:text-lg">
              Produtos digitais sem glitch <span className="text-texto/40">·</span> Finalistas FIAP NEXT 2026
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-texto/40">
            {segurandoUI ? "solte para recompor" : "clique e segure"}
          </p>
          <a
            href="#quem-somos"
            className="pointer-events-auto border-b border-texto/40 pb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-texto/80 transition-colors hover:border-texto hover:text-texto"
          >
            Quem somos
          </a>
        </div>
      </div>

      {/* Transição suave para o fundo do site */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-fundo" aria-hidden="true" />
    </section>
  );
}
