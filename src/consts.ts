// Constantes de link e marca, centralizadas.
// NOTA: o repo raciocinio-br-mcp existe, mas e PRIVADO. Enquanto estiver
// privado, este link vai 404 para visitantes sem acesso.
export const PROJECT = "raciocinio-br-mcp";
export const GITHUB_URL = "https://github.com/fabianofilho/raciocinio-br-mcp";
export const IAMED_URL = "https://iamed.cc";
export const LICENSE = "Apache-2.0";

// Familia de MCPs open source da IA.med. SELF_SLUG marca o atual (some do rodape).
export const SELF_SLUG = "raciocinio-br";
export const FAMILY = [
  { slug: "anvisa", nome: "anvisa-mcp", url: "https://iamed.cc/mcps/anvisa", desc: "Registro sanitário da Anvisa" },
  { slug: "radar-cfm", nome: "radar-cfm-mcp", url: "https://iamed.cc/mcps/radar-cfm", desc: "Resoluções do CFM" },
  { slug: "pcdt", nome: "protocolos-pcdt-mcp", url: "https://iamed.cc/mcps/pcdt", desc: "PCDTs do Ministério da Saúde" },
  { slug: "raciocinio-br", nome: "raciocinio-br-mcp", url: "https://iamed.cc/mcps/raciocinio-br", desc: "Raciocínio clínico avaliado (experimento)" },
  { slug: "revisor-notas", nome: "revisor-notas-mcp", url: "https://iamed.cc/mcps/revisor-notas", desc: "Revisão de notas SOAP" },
  { slug: "radar-papers", nome: "radar-papers-mcp", url: "https://iamed.cc/mcps/radar-papers", desc: "Monitor de PubMed e medRxiv" },
];
