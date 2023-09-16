// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/assets/css/main.css'],
  webpack: {
    extractCSS: true,
    postcss: {
      execute: true
    }
  },
  nitro: {
    preset: 'vercel'
  }
})
