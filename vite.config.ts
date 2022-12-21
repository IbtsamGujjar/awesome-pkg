import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "ES6",
    lib: {
      entry: "./src/index.ts",
      fileName: (format) => `awesome-pkg.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    minify: "terser",
    sourcemap: "hidden",
  },
  plugins: [react()],
});
