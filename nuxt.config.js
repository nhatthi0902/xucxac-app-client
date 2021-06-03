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
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    gzip: true,
    cacheTime: 30,
    sitemaps: [
      {
        path: '/sitemap/index.xml',
        routes: ['/'],
        exclude: ['/**'],
      },
      {
        path: '/sitemap/bathroom.xml',
        routes: () => {
          let bathroomUrls = ['bathroom',
            'bathroom/bast-02',
            'bathroom/bast-03',
            'bathroom/bast-04',
            'bathroom/bast-05']
          return [...bathroomUrls, 'bathroom/bast-06']
        },
        exclude: ['/**'],
      },
      {
        path: '/sitemap/kitchen.xml',
        routes: () => {
          return [
            'kitchen',
            'kitchen/kist-02',
            'kitchen/kist-03',
            'kitchen/kist-04',
          ]
        },
        exclude: ['/**'],
      },
      {
        path: '/sitemap/toilet.xml',
        routes: [
          'toilet',
          'toilet/tost-02',
          'toilet/tost-03',
          'toilet/tost-04',
          'toilet/tost-05',
          'toilet/tost-06',
          'toilet/tost-07',
          'toilet/tost-08',
          'toilet/tost-09',
          'toilet/tost-10',
          'toilet/tost-11',
          'toilet/tost-12',
        ],
        exclude: ['/**'],
      },
      {
        path: '/sitemap/faucet.xml',
        routes: [
          'faucet',
          'faucet/fast-02',
          'faucet/fast-03',
          'faucet/fast-04',
          'faucet/fast-05',
        ],
        exclude: ['/**'],
      },
    ],
  },

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
