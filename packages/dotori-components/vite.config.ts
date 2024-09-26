import path from 'path';

import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction(outputChunk) {
        return outputChunk.fileName === 'components.cjs.js' || outputChunk.fileName === 'components.es.js';
      },
    }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    dts({ tsconfigPath: './tsconfig.build.json', include: './packages', outDir: 'lib', rollupTypes: true }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        components: path.resolve(__dirname, 'packages/components/index.ts'),
        constants: path.resolve(__dirname, 'packages/constants/index.ts'),
      },
      name: 'dotori-components',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'dotori-context',
        'dotori-icons',
        'dotori-utils',
        'dotori-hooks',
        'react-router-dom',
        'dompurify',
      ],
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
