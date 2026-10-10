# Un-Glitch · Site do time

Site institucional e portfólio da **Un-Glitch**, time de desenvolvedores da FIAP
finalista do **FIAP NEXT 2026** com o projeto **SoulMove** (Challenge FIAP em parceria com a SoulUP).

Single-page, responsivo e pensado para acesso por QR code durante a apresentação:
quem escaneia vê a história do projeto, o estudo de caso e conhece as pessoas do time.

## Seções

| Âncora        | Conteúdo                                                                 |
|---------------|--------------------------------------------------------------------------|
| `#inicio`     | Hero em tela cheia com o logo em 3D (three.js): segue o mouse e, ao clicar e segurar, se desmonta em glitch |
| `#quem-somos` | Números, frentes de atuação e os desenvolvedores, com GitHub e LinkedIn  |
| `#projetos`   | Portfólio: um card por projeto, com espaço reservado para os próximos    |
| `#soulmove`   | Estudo de caso completo e FAQ, com a identidade visual da SoulUP. Expande dentro do card do SoulMove ao clicar |
| `#contato`    | Chamada para contato                                                     |

## Stack

React 18 · TypeScript · Vite 6 · TailwindCSS 4 · three.js (carregado sob demanda só no hero; sem WebGL, cai no logo em SVG).

## Rodando

```bash
npm install
npm run dev
```

Build de produção em `dist/`:

```bash
npm run build
```

## Onde editar o conteúdo

Todo o conteúdo fica em `src/data/`, sem precisar mexer nos componentes:

- `site.ts`: nome, slogan, e-mail e GitHub do time, itens do menu.
- `equipe.ts`: integrantes (nome, papel, foto, links) e frentes de atuação.
- `projetos.ts`: cards do portfólio. Para um projeto novo, adicione um item na lista.
- `soulmove.ts`: textos do estudo de caso do SoulMove.
- `faq.ts`: perguntas e respostas da seção FAQ.

Para adicionar um estudo de caso de outro projeto, crie um componente nos moldes de
`src/components/CaseSoulMove.tsx`, inclua-o em `App.tsx` e aponte `ancoraCase` do
projeto para o `id` da nova seção.

## Equipe

Allyson Victor · Carlos Eduardo · Kaique Ziantoni · Marcus Vinicius · Silas Oliveira
