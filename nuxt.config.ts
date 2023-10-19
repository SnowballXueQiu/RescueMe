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
  content:{
    sources: {
      content:{
        driver:'fs',
        prefix:'/posts',
        base: resolve(__dirname, 'content')
      }
    },
  },
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
          dead_code: false,
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