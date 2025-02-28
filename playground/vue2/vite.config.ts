import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Vue from '@vitejs/plugin-vue2'
import VueJsx from '@vitejs/plugin-vue2-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  build: {
    outDir: './dist/vite',
  },
  plugins: [
    VueMacros({
      setupSFC: true,
      defineProp: {
        edition: 'johnsonEdition',
      },
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
        }),
        vueJsx: VueJsx(),
      },
    }),

    Inspect({
      build: true,
    }),
  ],
})
