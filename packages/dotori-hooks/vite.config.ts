import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dfs from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dfs({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'lib',
      rollupTypes: true,
      bundledPackages: ['@tanstack/react-query', 'exceljs'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        hooks: path.resolve(__dirname, 'packages/hooks/index.ts'),
        constants: path.resolve(__dirname, 'packages/constants/index.ts'),
        store: path.resolve(__dirname, 'packages/store/index.ts'),
      },
      name: 'dotori-hooks',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@tanstack/react-query', 'dotori-utils', 'zustand', 'exceljs', 'file-saver'],
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
