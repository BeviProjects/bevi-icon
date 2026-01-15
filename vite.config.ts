import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.ts', 'src/App.tsx', 'src/**/*.test.{ts,tsx}'],
      rollupTypes: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BvLogo',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          // Mantém os SVGs em uma pasta organizada
          if (assetInfo.name?.endsWith('.svg')) {
            return 'logos/[name][extname]'
          }
          return 'assets/[name][extname]'
        },
      },
    },
    sourcemap: true,
    minify: 'esbuild',
  },
})
