import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
// import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3001,
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});

