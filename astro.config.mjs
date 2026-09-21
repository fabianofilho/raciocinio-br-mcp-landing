import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Destino: https://iamed.cc/mcps/raciocinio-br
export default defineConfig({
  site: "https://iamed.cc",
  base: "/mcps/raciocinio-br",
  output: "static",
  integrations: [tailwind()],
});
