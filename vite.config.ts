import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({

  base:"https://EfraRobless.github.io/Portafolio",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
