import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const __dirname = path.resolve();

export default defineConfig({
  base: '/invitation/',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
