export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xuc-xac',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'haksjdhkjshdkjshdkjashdkjahsdjkhskjdhaskjdhasdhkjshkjashdkjashkjhskdshkjdh',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'ssđ',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'ssđ',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image:alt',
        content:
          'https://storage.googleapis.com/gcs-buhinnavi-files-pro/images/thumbnail_buhin.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:image',
        content:
          'https://storage.googleapis.com/gcs-buhinnavi-files-pro/images/thumbnail_buhin.png',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://storage.googleapis.com/gcs-buhinnavi-files-pro/images/thumbnail_buhin.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'abc',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '<link rel="preconnect" href="https://fonts.gstatic.com">',
      },
      {
        rel: 'stylesheet',
        href:
          '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">',
      },
      {
        rel: 'stylesheet',
        href:
          'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering spage: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
