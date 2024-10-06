// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default is 'dist', ensure it's correctly set
    rollupOptions: {
      output: {
        manualChunks: undefined, // Avoid splitting into too many chunks
      },
    },
  },
});
