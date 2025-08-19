import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // pastikan react-refresh hanya jalan di dev, bukan production
      dev: mode !== "production",
      jsxImportSource: "react",
    }),
  ],
  base: "/WEB1/", // sesuai nama repo GitHub kamu
  build: {
    sourcemap: false, // sourcemap kadang bisa munculkan eval
    minify: "esbuild", // pastikan minimizer aman
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
