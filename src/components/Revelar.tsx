import type { ReactNode } from "react";
import { useRevelar } from "../hooks/useRevelar";

interface Props {
  children: ReactNode;
  className?: string;
  /** Atraso em ms para escalonar a animação entre itens */
  atraso?: number;
}

export default function Revelar({ children, className = "", atraso = 0 }: Props) {
  const ref = useRevelar<HTMLDivElement>();
  return (
    <div ref={ref} className={`revelar ${className}`} style={{ transitionDelay: `${atraso}ms` }}>
      {children}
    </div>
  );
}
