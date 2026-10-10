import type { Integrante } from "../types";

/**
 * Ajuste o campo `papel` com a frente principal de cada integrante
 * (back-end e liderança técnica, banco de dados e infraestrutura,
 * front-end, design, estratégia comercial).
 */
export const equipe: Integrante[] = [
  {
    id: 1,
    nome: "Allyson Victor",
    papel: "Desenvolvedor",
    foto: "/img/ally.jpg",
    github: "https://github.com/Ally7574",
    linkedin: "https://www.linkedin.com/in/allyson-victor-0804a9313/",
  },
  {
    id: 2,
    nome: "Carlos Eduardo",
    papel: "Desenvolvedor",
    foto: "/img/Cadu.JPG",
    github: "https://github.com/ceduardoos",
    linkedin: "https://www.linkedin.com/in/carlos-eduardo-silva-573550158",
  },
  {
    id: 3,
    nome: "Kaique Ziantoni",
    papel: "Desenvolvedor",
    foto: "/img/Kaique.jpeg",
    github: "https://github.com/KaiqueZiantoni",
    linkedin: "https://www.linkedin.com/in/kaiqueziantoni/",
  },
  {
    id: 4,
    nome: "Marcus Vinicius",
    papel: "Desenvolvedor",
    foto: "/img/Marcus.jpg",
    github: "https://github.com/Costa-Marcus",
    linkedin: "https://www.linkedin.com/in/costa-marcus-v/",
  },
  {
    id: 5,
    nome: "Silas Oliveira",
    papel: "Desenvolvedor",
    foto: "/img/silas.jpg",
    github: "https://github.com/SilasAngare1",
    linkedin:
      "https://www.linkedin.com/in/silas-angare-pedroso-de-oliveira-55004430a/",
  },
];

/** Frentes de atuação do time, exibidas em "Quem somos". */
export const frentes = [
  {
    titulo: "Back-end e liderança técnica",
    descricao:
      "APIs, regras de negócio, filas de processamento e testes automatizados.",
  },
  {
    titulo: "Banco de dados e infraestrutura",
    descricao:
      "Modelagem, PostgreSQL, Docker, Nginx e publicação com HTTPS em VPS.",
  },
  {
    titulo: "Front-end",
    descricao:
      "Interfaces em React e TypeScript, responsivas e acessíveis.",
  },
  {
    titulo: "Design e estratégia comercial",
    descricao:
      "Experiência do usuário, identidade visual e modelo de negócio sustentável.",
  },
] as const;
