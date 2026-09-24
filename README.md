# raciocinio-br-mcp-landing

Landing page do `raciocinio-br-mcp` (v0.1.0, repositório privado), um
experimento de pesquisa, avaliado, sobre raciocínio clínico em contexto
brasileiro rodando em LLM local. Um projeto [IA.med](https://iamed.cc), da mesma
família do `anvisa-mcp`, `radar-cfm-mcp`, `protocolos-pcdt-mcp`, `revisor-notas-mcp` e
`radar-papers-mcp`.

Página estática, sem backend e sem coleta de dados de visitante.

## O que esta landing tem de diferente

As outras landings da família apresentam uma ferramenta. Esta apresenta um
experimento com resultado medido: a seção de avaliação é a principal, e a seção
"onde ele falha" tem o mesmo peso da de resultados.

Todos os números da seção de avaliação vêm de
`resultados/avaliacao-2026-09-20.md` do repositório real, extraídos para
`src/data/avaliacao.json`. Nada foi inventado. O reliability diagram é um SVG
gerado desses dados. As falhas vêm do `FALHAS-CONHECIDAS.md` e os exemplos do
léxico do `dados/lexico-br.yaml`.

## Stack

- [Astro](https://astro.build) (saída estática)
- [Tailwind CSS](https://tailwindcss.com) via `@astrojs/tailwind`
- Realce de código com Shiki (build-time); reliability diagram em SVG estático
- JavaScript mínimo (apenas o botão de copiar código); sem biblioteca de chart

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321/mcps/raciocinio-br` (o `base` é `/mcps/raciocinio-br`).

## Atualizar os números

Quando o repositório publicar uma nova rodada de avaliação, regenere
`src/data/avaliacao.json` a partir do novo `resultados/avaliacao-AAAA-MM-DD.md`.
Não editar os números à mão.

## Publicação

A página está no ar em `https://iamed.cc/mcps/raciocinio-br` (`site` + `base` em
`astro.config.mjs`). Este repositório não publica nada sozinho: não há integração
com a Vercel nem GitHub Actions aqui. O `dist/` gerado por `npm run build` é copiado
para `mcps/raciocinio-br/` do repositório `Medicina-IA/medicina-ia.github.io`, e
`iamed.cc` é servido pela Vercel a partir desse site (em 24/09/2026 o HTML no ar era
byte a byte o `mcps/raciocinio-br/index.html` do commit `8e3f09c`). Para publicar
uma mudança:

1. `npm run build` neste repositório.
2. Substituir o conteúdo de `mcps/raciocinio-br/` no site pelo `dist/`.
3. Commit e push no site, e conferir que o deploy do `iamed.cc` saiu.

## Notas

- O repositório do projeto `raciocinio-br-mcp` é privado na v0.1.0. A página não tem
  link para ele nem manda clonar; a seção "Como rodar" vale para quem já tem acesso.
- A rodada publicada tem gabaritos ainda não revisados clinicamente: mede o
  pipeline, não a qualidade clínica. A página exibe esse aviso em destaque.
- O relatório de 2026-09-20 registrou o modelo como `local-model` (nome do `.env`).
  A página mostra o id servido pelo endpoint local, `Qwen3.5-9B-Q4_K_M.gguf`, e
  explica a diferença.
- Não é apoio à decisão clínica nem dispositivo médico.

## Licença

Apache-2.0 (mesma do projeto).
