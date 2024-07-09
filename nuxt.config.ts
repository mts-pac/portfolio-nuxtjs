// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/main.scss',
    'vue3-carousel/dist/carousel.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  devtools: { enabled: true },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      'vue3-carousel/dist/carousel.css',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/image', 'vue3-carousel-nuxt'],
  carousel: {
    prefix: 'vc'
  },
  vue: {
    propsDestructure: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
