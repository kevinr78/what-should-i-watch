import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
