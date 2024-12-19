import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
export default defineConfig({
  base: '/portfolio/', // Substitua pelo nome do seu repositório
  plugins: [react()],
});
