import { frentes } from "../data/equipe";
import Revelar from "./Revelar";
import Secao from "./Secao";

export default function QuemSomos() {
  return (
    <Secao
      id="quem-somos"
      numero="01"
      rotulo="Quem somos"
      titulo="Um time que entrega ponta a ponta."
      descricao="A Un-Glitch nasceu na FIAP e trabalha como uma empresa: cada integrante assume uma frente e o resultado é um produto completo, testado e publicado."
    >
      <ul className="border-t border-borda">
        {frentes.map((f, i) => (
          <li key={f.titulo} className="border-b border-borda">
            <Revelar atraso={i * 60}>
              <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr_1fr] md:gap-6 md:py-8">
                <span className="font-mono text-xs text-texto-suave">0{i + 1}</span>
                <h3 className="text-xl font-medium tracking-tight">{f.titulo}</h3>
                <p className="leading-relaxed text-texto-suave">{f.descricao}</p>
              </div>
            </Revelar>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
