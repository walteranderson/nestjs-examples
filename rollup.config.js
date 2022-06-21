import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';

export default {
  input: 'src/client/main.ts',
  output: {
    file: 'public/assets/bundle.js',
  },
  plugins: [
    svelte({
      include: 'src/client/**/*.svelte',
      preprocess: sveltePreprocess(),
    }),
    typescript({ tsconfig: 'src/client/tsconfig.json' }),
    resolve({ browser: true }),
  ],
};
