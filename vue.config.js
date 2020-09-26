module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'componebts': '@/componebts',
        'views': '@/views',
        'network': '@/network',
      }

    }
  }
}