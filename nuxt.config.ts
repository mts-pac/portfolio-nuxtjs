// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  devtools: { enabled: true },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/image'],
  vue: {
    propsDestructure: true,
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
})
