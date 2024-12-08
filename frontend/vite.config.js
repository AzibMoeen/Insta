import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Proxy API requests to the backend server
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false, // Set this to `true` if your backend uses HTTPS with a valid certificate
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` from the proxied request
      },
    },
  },
})
