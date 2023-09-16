/*
  Instalar os seguintes módulos:
    pnpm i unplugin-swc @swc/core @vitest/coverage-v8 -D
    pnpm i vite-tsconfig-paths -D

*/
import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
