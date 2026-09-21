# raciocinio-br-mcp-landing

Landing page do
[`raciocinio-br-mcp`](https://github.com/fabianofilho/raciocinio-br-mcp), um
experimento de pesquisa, avaliado, sobre raciocínio clínico em contexto
brasileiro rodando em LLM local. Um projeto [IA.med](https://iamed.cc), da mesma
família do `anvisa-mcp`, `radar-cfm-mcp` e `protocolos-pcdt-mcp`.

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

Abre em `http://localhost:4321/raciocinio-br` (o `base` é `/raciocinio-br`).

## Atualizar os números

Quando o repositório publicar uma nova rodada de avaliação, regenere
`src/data/avaliacao.json` a partir do novo `resultados/avaliacao-AAAA-MM-DD.md`.
Não editar os números à mão.

## Deploy

Destino pretendido: `https://mcp.iamed.cc/raciocinio-br` (`site` + `base` em
`astro.config.mjs`). O deploy na Vercel e o domínio são configurados manualmente.

## Notas

- O repositório do projeto `raciocinio-br-mcp` existe, mas é privado. Os links de
  GitHub vão falhar para visitantes sem acesso até ele ser tornado público.
- A rodada publicada tem gabaritos ainda não revisados clinicamente: mede o
  pipeline, não a qualidade clínica. A página exibe esse aviso em destaque.
- Não é apoio à decisão clínica nem dispositivo médico.

## Licença

Apache-2.0 (mesma do projeto).
