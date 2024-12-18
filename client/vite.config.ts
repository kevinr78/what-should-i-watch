import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "./src/features"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
    ],
  },
});
