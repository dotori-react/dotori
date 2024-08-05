import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dfs from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dfs({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'lib',
      rollupTypes: true,
      bundledPackages: ['class-variance-authority', 'clsx'],
    }),
  ],
  build: {
    lib: {
      entry: {
        utils: path.resolve(__dirname, 'packages/utils/index.ts'),
        constants: path.resolve(__dirname, 'packages/constants/index.ts'),
      },
      name: 'dotori-utils',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: 'lib',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
