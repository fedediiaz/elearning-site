import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      // Optional options
      process: true, // Enable automatic SVG processing
      source: './src/assets', // Specify the source directory for SVG files
      inline: true, // Inline SVGs into the HTML instead of creating components
      optimize: true, // Optimize SVGs for better performance
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
