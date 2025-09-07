import { defineConfig } from "vite";
import path from "path-browserify";

export default defineConfig({
  server: {
    host:'0.0.0.0', //allow external visit
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
