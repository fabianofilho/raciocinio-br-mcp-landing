// Constantes de link e marca, centralizadas.
// O repo raciocinio-br-mcp e PRIVADO na v0.1.0: a landing nao aponta para ele
// nem manda clonar. Se ele for aberto, voltar com o link aqui.
export const PROJECT = "raciocinio-br-mcp";
export const VERSAO = "0.1.0";
export const IAMED_URL = "https://iamed.cc";
export const LICENSE = "Apache-2.0";

// Familia de MCPs da IA.med. SELF_SLUG marca o atual (some do rodape).
export const SELF_SLUG = "raciocinio-br";
export const FAMILY = [
  { slug: "anvisa", nome: "anvisa-mcp", url: "https://iamed.cc/mcps/anvisa", desc: "Registro sanitário da Anvisa" },
  { slug: "radar-cfm", nome: "radar-cfm-mcp", url: "https://iamed.cc/mcps/radar-cfm", desc: "Resoluções do CFM" },
  { slug: "pcdt", nome: "protocolos-pcdt-mcp", url: "https://iamed.cc/mcps/pcdt", desc: "PCDTs do Ministério da Saúde" },
  { slug: "raciocinio-br", nome: "raciocinio-br-mcp", url: "https://iamed.cc/mcps/raciocinio-br", desc: "Raciocínio clínico avaliado (experimento)" },
  { slug: "revisor-notas", nome: "revisor-notas-mcp", url: "https://iamed.cc/mcps/revisor-notas", desc: "Revisão de notas SOAP" },
  { slug: "radar-papers", nome: "radar-papers-mcp", url: "https://iamed.cc/mcps/radar-papers", desc: "Monitor de PubMed e medRxiv" },
];
