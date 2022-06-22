import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { SERVER_PORT } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svelte()],
    clearScreen: false,
    root: 'src/client',
    build: {
      outDir: 'public',
    },
    server: {
      proxy: {
        '/api': `http://localhost:${SERVER_PORT}`,
      },
    },
  };
});
