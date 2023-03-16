import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio-Sofia/',
  define: {
    'process.env': {},
  },
  build: {
    target: 'esnext',
  },
});