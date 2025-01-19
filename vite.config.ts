import react from "@vitejs/plugin-react-swc";
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
  base: "/Rebels_Landing_Page",
});
