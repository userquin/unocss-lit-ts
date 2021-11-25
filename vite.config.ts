import { defineConfig } from 'vite'
import UnoCss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import ViteInspector from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [
    UnoCss({
      mode: 'per-module',
      include: [/\.ts$/],
      presets: [
          presetAttributify(),
          presetUno()
      ],
      inspector: false,
    }),
    ViteInspector()
  ]
})
