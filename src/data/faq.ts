export interface PerguntaFaq {
  pergunta: string;
  resposta: string;
}

/** Perguntas frequentes sobre o SoulMove, com base na documentação do projeto. */
export const faq: PerguntaFaq[] = [
  {
    pergunta: "O que é o SoulMove?",
    resposta:
      "É um módulo dentro do app da SoulUP que valida jornadas de ônibus pelo GPS e transforma esse impacto em pontuação, ranking e reconhecimento. A ideia é reconhecer uma escolha sustentável que milhões de pessoas já fazem todos os dias sem receber nada por isso.",
  },
  {
    pergunta: "Preciso mudar minha rotina para participar?",
    resposta:
      "Não. O usuário só inicia a jornada no app ao embarcar. O SoulMove reconhece a escolha sustentável que já faz parte do dia dele, sem criar uma tarefa nova.",
  },
  {
    pergunta: "Como o sistema sabe que a viagem de ônibus aconteceu de verdade?",
    resposta:
      "Um motor com 8 regras analisa a trilha de GPS da jornada: duração, distância, velocidade, aderência à rota da linha, entre outras. Só depois dessa análise a jornada é considerada válida e gera pontos.",
  },
  {
    pergunta: "E se uma jornada for recusada?",
    resposta:
      "Cada decisão do motor vem acompanhada do motivo, de forma transparente. O usuário entende por que a jornada não foi validada, em vez de receber uma recusa sem explicação.",
  },
  {
    pergunta: "O que são Pontos de Impacto e para que serve a foto do ônibus?",
    resposta:
      "Jornadas validadas geram Pontos de Impacto e uma estimativa de CO₂e evitado. Uma foto do ônibus, tirada na hora pela câmera do app, garante pontos extras e reforça a confiança na jornada.",
  },
  {
    pergunta: "Como vocês evitam fraudes?",
    resposta:
      "O antifraude existe desde o início do projeto: regras de velocidade e rota, limite diário de jornadas, foto aceita apenas pela câmera (sem galeria), prazo de envio e bloqueio de imagens repetidas.",
  },
  {
    pergunta: "Meus trajetos ficam visíveis para outras pessoas?",
    resposta:
      "Não. Nenhuma linha, trajeto ou horário é exibido publicamente. O card de impacto compartilhável mostra apenas totais de períodos já encerrados, e as fotos são apagadas automaticamente.",
  },
  {
    pergunta: "Como funciona o ranking e o que o Top 3 ganha?",
    resposta:
      "Há ranking semanal e temporada mensal. O Top 3 recebe um selo colecionável, um reconhecimento que não dá vantagem econômica. O desempate valoriza a frequência de uso, para manter a competição justa.",
  },
  {
    pergunta: "Como o projeto se sustenta financeiramente?",
    resposta:
      "Marcas criam campanhas patrocinadas e acompanham resultados no painel SoulBusiness, que recebe apenas indicadores agregados, sem dados individuais. O orçamento de prêmios fica separado da receita da plataforma.",
  },
  {
    pergunta: "Qual é a tecnologia por trás do SoulMove?",
    resposta:
      "Front-end em React com TypeScript. API em Node.js com TypeScript e Fastify, fila de processamento com pg-boss, banco PostgreSQL e cálculo geográfico com turf.js. Tudo publicado numa VPS com Docker, Nginx e HTTPS, com mais de 100 testes automatizados no back-end.",
  },
  {
    pergunta: "O que vem a seguir?",
    resposta:
      "Integração com o login da SoulUP, captura de GPS no app nativo, cobertura de todas as linhas de ônibus de São Paulo, verificação de integridade do aparelho e novos modais de transporte.",
  },
];
