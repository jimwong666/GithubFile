module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'b2b',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      /*
        ** hid 是唯一标识符 想在页面里覆盖 就要设置相同的 hid
        */
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
   /*
  ** css golbal config
  */
  css:['~assets/css/base.css','~assets/css/reset.css'],
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** img hash
    */
    loaders:[{
      test:/\.(png|jpe?g|gif|svg)$/i,
      use:[
        {
          loader: 'url-loader',
          options:{
            limit:100000,
            name:'img/[name].[hash].[ext]'
          }
        },
        {
          loader: 'image-trace-loader'
        }
      ]
    }],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
