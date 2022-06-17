import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/components/index.ts',
  output: {
    dir: 'public',
  },
  plugins: [typescript({ tsconfig: 'tsconfig.lit.json' }), resolve()],
};
