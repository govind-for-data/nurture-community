import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
