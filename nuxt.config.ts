export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/assets/css/main.css'],
  nitro: {
    preset: 'vercel'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      chunkSizeWarningLimit: 2000,
      minify: true,
    },
  },
  experimental: {
    externalVue: true,
    payloadExtraction: true
  }
})