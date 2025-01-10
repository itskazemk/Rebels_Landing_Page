import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = new URL("./src", import.meta.url).pathname;
console.log("-------projectRoot-------", projectRoot);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": projectRoot,
    },
  },
});
