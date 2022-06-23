import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { SERVER_PORT } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svelte()],
    clearScreen: false,
    root: 'frontend',
    build: {
      outDir: '../public',
      emptyOutDir: true,
    },
    server: {
      proxy: {
        '/api': `http://localhost:${SERVER_PORT}`,
      },
    },
  };
});
