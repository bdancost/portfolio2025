import { defineConfig } from "vite";

export default defineConfig({
  // Configurações do Vite
  base: "./", // Corrige caminhos relativos no build
  build: {
    outDir: "dist", // Diretório de saída
  },
});
