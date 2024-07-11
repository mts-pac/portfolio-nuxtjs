// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio-nuxtjs/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets' // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  css: [
    '~/assets/scss/main.scss',
    'vue3-carousel/dist/carousel.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
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
  image: {
    provider: 'ipx'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-import': {},
      'tailwindcss/nesting': {}
    }
  },
  typescript: {
    tsConfig: {
      exclude: ['node_modules']
    },
    strict: true
  },
  eslint: {
    lintOnStart: false // Desativa o LintOnStart globalmente
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/image', 'vue3-carousel-nuxt'],
  carousel: {
    prefix: 'vc'
  },
  vue: {
    propsDestructure: true
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
