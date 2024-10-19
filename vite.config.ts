import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hoc": path.resolve(__dirname, "./src/hoc"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@global-types": path.resolve(__dirname, "./src/global-types"),
      "@styles": path.resolve(__dirname, "./src/styles")
    },
  },
})
