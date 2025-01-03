import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [],
  resolve: {
    /*something*/
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        certificados: resolve(__dirname, "./src/certificados.html"),
      },
    },
  },
});
