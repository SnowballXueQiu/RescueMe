import usePreRenderRoute from "./scripts/usePreRenderRoute";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  // css: ['@/assets/css/main.css'],
  nitro: {
    preset: 'static',
    prerender:{
      routes: [...usePreRenderRoute()],
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
        lang: 'zh-cn'
      },
      title: 'Rescume Life',
    }
  },
})