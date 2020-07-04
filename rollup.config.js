import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/dice.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'dice',
  },
  plugins: [typescript()],
};
