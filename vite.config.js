import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/api-github-avanti/', // Substitua <seu-repositorio> pelo nome do seu repositório
});
