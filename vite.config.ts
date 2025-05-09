import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Exploring-AI-in-Creative-Arts/', // ✅ ADD THIS LINE
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
