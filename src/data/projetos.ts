import type { Projeto } from "../types";

/**
 * Portfólio da Un-Glitch. Para adicionar um projeto novo, inclua um item aqui.
 * Se o projeto tiver estudo de caso, crie a seção e aponte `ancoraCase` para ela.
 */
export const projetos: Projeto[] = [
  {
    id: "soulmove",
    nome: "SoulMove",
    slogan: "Reconhecimento para quem já escolhe o transporte sustentável.",
    resumo:
      "Módulo do app da SoulUP que valida jornadas de ônibus por GPS e transforma esse impacto em pontos, ranking e reconhecimento.",
    parceiro: "SoulUP",
    periodo: "Challenge FIAP · 1º semestre 2026",
    status: "finalista",
    tags: ["React", "TypeScript", "Node.js", "Fastify", "PostgreSQL", "Docker"],
    ancoraCase: "soulmove",
    logo: "/img/soulmove-logo.jpeg",
    imagem: "/img/arquitetura-soulmove.jpeg",
  },
  {
    id: "proximo",
    nome: "Próximo desafio",
    slogan: "O próximo projeto do time ganha espaço aqui.",
    resumo:
      "Em breve: o Challenge do 1º semestre de 2027, com a mesma proposta de resolver um problema real com software que funciona.",
    periodo: "Challenge FIAP · 1º semestre 2027",
    status: "em-breve",
    tags: ["Em definição"],
  },
];

export const rotuloStatus = {
  finalista: "Finalista FIAP NEXT 2026",
  "em-andamento": "Em andamento",
  "em-breve": "Em breve",
} as const;
