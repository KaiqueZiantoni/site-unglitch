export interface Integrante {
  id: number;
  nome: string;
  papel: string;
  foto: string;
  github: string;
  linkedin: string;
}

export type StatusProjeto = "finalista" | "em-andamento" | "em-breve";

export interface Projeto {
  id: string;
  nome: string;
  slogan: string;
  resumo: string;
  parceiro?: string;
  periodo: string;
  status: StatusProjeto;
  tags: readonly string[];
  /** Âncora da seção com o estudo de caso completo, quando existir */
  ancoraCase?: string;
  logo?: string;
  /** Imagem de apoio exibida no card do portfólio */
  imagem?: string;
}

export interface Etapa {
  titulo: string;
  descricao: string;
}

export interface Diferencial {
  titulo: string;
  descricao: string;
}

export interface Tecnologia {
  camada: string;
  stack: string;
}
