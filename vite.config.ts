import { defineConfig } from "vite";
const { resolve } = require("path");

export default defineConfig({
  server: {
    port: 4206,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  }
});