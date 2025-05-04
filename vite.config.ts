import tailwindcss from '@tailwindcss/vite';
import react from "@vitejs/plugin-react-swc";
import path from 'path';
import { defineConfig } from "vite";
const projectRoot = new URL("./src", import.meta.url).pathname;
console.log("-------projectRoot-------", projectRoot);

export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
