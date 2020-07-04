import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/dice-3d.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'Dice3D',
  },
  plugins: [typescript()],
};
