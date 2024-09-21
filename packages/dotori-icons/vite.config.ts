import path from 'path';

import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dfs from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    svgr(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    dfs({ tsconfigPath: './tsconfig.build.json', include: './packages', outDir: 'lib', rollupTypes: true }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: [
        path.resolve(__dirname, 'packages/components/index.ts'),
        path.resolve(__dirname, 'packages/constants/Icon.ts'),
      ],
      name: 'dotori-icons',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (entryName === 'Icon') return `iconMap.${format}.js`;
        return `${entryName}.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'dotori-utils'],
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
