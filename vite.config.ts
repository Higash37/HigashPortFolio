import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      port: 5173,
    },
    host: "localhost",
    port: 5173,
  },
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
    minify: "esbuild",
    target: "esnext",
  },
  publicDir: "public",
  esbuild: {
    target: "esnext",
  },
});
