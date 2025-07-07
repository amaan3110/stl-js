import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm", "iife"], // cjs for node, esm for modern, iife for CDN
  globalName: "STL", // Window.STL in browser
  outDir: "dist",
  sourcemap: true,
  clean: true,
  dts: true, // generate .d.ts
});
