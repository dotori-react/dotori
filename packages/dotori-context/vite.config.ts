import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dfs from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dfs({ tsconfigPath: './tsconfig.build.json', outDir: 'lib', rollupTypes: true })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'packages/context/index.ts'),
      name: 'dotori-context',
      formats: ['es', 'cjs'],
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
