import usePreRenderRoute from "./scripts/usePreRenderRoute";
import {resolve} from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'static',
  },
  css: ['~/assets/css/main.css'],
  experimental: {
    externalVue: true,
    payloadExtraction: true,
    inlineSSRStyles: false,
  },
  vite:{
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      minify: 'terser',
      terserOptions:{
        compress: {
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
        },
      },
    },
  },
  app:{
    head:{
      htmlAttrs:{
        lang: 'zh-cn',
        class: 'dark'
      },
      title: 'Rescue Me',
    }
  },
  ssr: true
})