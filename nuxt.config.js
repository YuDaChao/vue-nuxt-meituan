const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type: 'text/javascript',
        src:
          'http://api.map.baidu.com/api?v=2.0&ak=j9vfBXWz0KGxGtdp4s348UsLjgshMFGE'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#13D1BE' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/reset.css',
    'element-ui/lib/theme-chalk/display.css',
    'swiper/dist/css/swiper.css',
    '@/assets/iconfont/iconfont.css',
    '@/assets/base.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/swiper.js', ssr: false },
    { src: '@/plugins/axios' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    prefix: '/api',
    proxy: true,
    credentials: true
  },
  /**
   ** proxy
   */
  proxy: {
    '/api': {
      target: 'http://localhost:8100',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:8100'
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
          exclude: /(node_modules)/
        })
      }
    }
  }
}
