import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://mcp.iamed.cc/raciocinio-br
export default defineConfig({
  site: "https://mcp.iamed.cc",
  base: "/raciocinio-br",
  output: "static",
  integrations: [tailwind()],
});
