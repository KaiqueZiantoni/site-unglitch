import type { Diferencial, Etapa, Tecnologia } from "../types";

export const soulmove = {
  nome: "SoulMove",
  slogan: "Reconhecimento para quem já escolhe o transporte sustentável.",
  /** Trecho do slogan que recebe o destaque em gradiente no título */
  sloganDestaque: "transporte sustentável",
  contexto:
    "Projeto desenvolvido pela Un-Glitch no Challenge FIAP, em parceria com a SoulUP. Finalista entre os 6 melhores projetos, apresentado no FIAP NEXT 2026.",
  desafio: [
    "Milhões de pessoas usam ônibus todos os dias e reduzem emissões sem receber nenhum reconhecimento por isso.",
    "Ao mesmo tempo, plataformas de engajamento enfrentam um problema de confiança: quando a recompensa não acompanha uma ação real, o usuário deixa de acreditar na experiência.",
  ],
  solucao: [
    "O SoulMove é um módulo dentro do app da SoulUP que valida jornadas de ônibus pelo GPS e transforma esse impacto em pontuação, ranking e reconhecimento.",
    "O usuário não precisa criar uma nova rotina para participar. O SoulMove reconhece a escolha sustentável que já faz parte do seu dia.",
  ],
  metricas: [
    { valor: "Top 6", rotulo: "finalista no FIAP NEXT 2026" },
    { valor: "8", rotulo: "regras no motor de validação" },
    { valor: "100+", rotulo: "testes automatizados no back-end" },
    { valor: "0", rotulo: "trajetos ou horários expostos publicamente" },
  ],
  arquitetura:
    "O app envia a trilha de GPS para a API, que coloca a jornada numa fila. O motor de validação processa a jornada, calcula pontos e CO₂e e atualiza o ranking no banco de dados. O painel SoulBusiness recebe apenas indicadores agregados, sem dados individuais.",
  imagemArquitetura: "/img/arquitetura-soulmove.jpeg",
  proximosPassos: [
    "Integração com o login da SoulUP",
    "Captura de GPS no app nativo",
    "Cobertura de todas as linhas de ônibus de São Paulo",
    "Verificação de integridade do aparelho",
    "Novos modais de transporte",
  ],
};

export const etapas: Etapa[] = [
  {
    titulo: "Jornada",
    descricao: "O usuário inicia a jornada no app ao embarcar.",
  },
  {
    titulo: "Validação",
    descricao:
      "Um motor com 8 regras analisa a trilha de GPS (duração, distância, velocidade, aderência à rota da linha, entre outras) e decide se a jornada é válida.",
  },
  {
    titulo: "Pontuação",
    descricao:
      "Jornadas validadas geram Pontos de Impacto e a estimativa de CO₂e evitado. Uma foto do ônibus, tirada na hora pela câmera, garante pontos extras.",
  },
  {
    titulo: "Reconhecimento",
    descricao:
      "Ranking semanal, temporada mensal, card de impacto compartilhável e um selo colecionável para o Top 3.",
  },
  {
    titulo: "Patrocínio",
    descricao:
      "Marcas criam campanhas e acompanham resultados agregados no painel SoulBusiness.",
  },
];

export const diferenciais: Diferencial[] = [
  {
    titulo: "Validação real",
    descricao:
      "Cada decisão do motor vem acompanhada do motivo, de forma transparente para o usuário.",
  },
  {
    titulo: "Antifraude desde o início",
    descricao:
      "Regras de velocidade e rota, limite diário, foto apenas pela câmera, prazo de envio e bloqueio de imagens repetidas.",
  },
  {
    titulo: "Privacidade por padrão",
    descricao:
      "Nenhuma linha, trajeto ou horário é exibido publicamente. O card de impacto mostra apenas totais de períodos encerrados, e as fotos são apagadas automaticamente.",
  },
  {
    titulo: "Competição justa",
    descricao:
      "O reconhecimento do Top 3 não dá vantagem econômica, e o desempate valoriza a frequência de uso.",
  },
  {
    titulo: "Modelo sustentável",
    descricao:
      "Marcas patrocinam campanhas; o orçamento de prêmios fica separado da receita da plataforma.",
  },
];

export const tecnologias: Tecnologia[] = [
  { camada: "Front-end", stack: "React + TypeScript" },
  { camada: "API", stack: "Node.js + TypeScript + Fastify" },
  { camada: "Fila de processamento", stack: "pg-boss" },
  { camada: "Banco de dados", stack: "PostgreSQL" },
  { camada: "Cálculo geográfico", stack: "turf.js" },
  { camada: "Infraestrutura", stack: "VPS com Docker, Nginx e HTTPS" },
  { camada: "Qualidade", stack: "Mais de 100 testes automatizados no back-end" },
];
