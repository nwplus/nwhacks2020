import pkg from './package'

// Handles production env variables when building (These can be public)
const envVars = process.env.DEPLOY_ENV === 'GH_PAGES' || process.env.DEPLOY_ENV === 'PRODUCTION' ? {
  env: {
    FIREBASE_API_KEY: 'AIzaSyCBkQHeikIsiYZ2yOHiqH_mGJKDWMDU500',
    FIREBASE_AUTH_DOMAIN: 'nwhacks-2019.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://nwhacks-2019.firebaseio.com',
    FIREBASE_PROJECT_ID: 'nwhacks-2019',
    FIREBASE_STORAGE_BUCKET: 'nwhacks-2019',
    FIREBASE_MESSAGING_SENDER_ID: '98283589440',
    RECAPTCHA_SITE_KEY: '6Lf-PXcUAAAAAKqB-M3SNbBz5D67TtHAo94_YwyJ',
    WEBSITE_NAME: 'NwHacks_2020',
    mailingListUrl: 'https://us-central1-nwhacks-2019.cloudfunctions.net/subscribeToMailingList'
  }
} : {
  env: {
    mailingListUrl: 'http://localhost:5000/nwhacks-2019-dev/us-central1/subscribeToMailingList/'
  }
}

export default {
  ...envVars,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'nwHacks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/vuelidate.js',
    { src: '~/plugins/vuex-persist', srr: false }
  ],

  /*
   ** Cache static resources for better performance.
   */
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 1
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-buefy',
    [
      'nuxt-buefy',
      {
        /* buefy options */
        css: false
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-144737203-1',
        dev: false
      }
    ],
    ['vue-scrollto/nuxt', { offset: -80 }],
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['scss/lhd.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
