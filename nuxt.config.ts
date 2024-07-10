// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio-nuxtjs/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  ssr: false,
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
  nitro: {
    prerender: {
      routes: [
        '/_ipx/w_400/img/me.jpeg',
        '/_ipx/h_500/img/banner.jpeg',
        '/_ipx/_/icon/nuxt.svg',
        '/_ipx/_/icon/tailwind.svg',
        '/_ipx/_/icon/nestjs.svg',
        '/_ipx/_/icon/spring-boot.svg',
        '/_ipx/h_500/img/me-graduate.jpg',
        '/_ipx/h_65/img/logo-sym.webp',
        '/_ipx/h_65/img/logo-grupo-astus.png',
        '/_ipx/h_65/img/logo-siga.png'
      ]
    }
  },
  typescript: {
    tsConfig: {
      exclude: ['node_modules']
    },
    strict: true
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
