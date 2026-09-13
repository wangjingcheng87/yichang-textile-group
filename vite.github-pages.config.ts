import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "github-pages"),
  // Relative assets let the same static build run on both a GitHub project
  // subpath and the root-level *.pages.dev hostname provided by Cloudflare.
  base: "./",
  publicDir: resolve(__dirname, "public"),
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: { alias: { "@": resolve(__dirname) } },
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "docs"),
    emptyOutDir: true,
    assetsDir: ".",
  },
});
