/*
 * @Author: freysu
 * @Date: 2022-11-20 17:53:29
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-06 01:03:42
 * @Description: file content
 */
// NOTE Vue项目的配置文件 必须要重启才会生效
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // configureWebpack: {
  // @ alias别名===> src的绝对路径 webpack配置的别名
  //   resolve: {
  //     alias: {
  //       assets: '@/assets', // "assets/..." == '@/assets/...' == "./assets/..."
  //       component: '@/components',
  //       views: '@/views'
  //     }
  //   }
  // },
  transpileDependencies: true,
  lintOnSave: true, // eslint
  // 配置反向代理
  devServer: {
    port: 8000, //定义端口号
    proxy: {
      // '/api': {
      //   target: 'http://i.maoyan.com',
      //   // host: '*.*.com',
      //   changeOrigin: true
      // },
      '/frey': {
        target: 'http://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/frey': '' // 路径重写，会把/frey 替换""空字符串
        }
      }
    }
    // // 让浏览器overlay 同时显示警告和错误
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  }
})

/*
// 配置反向代理
devServer: {
  port: 8000, //定义端口号
  proxy: {
    '/XXX': {
      target: 'http://*.*.com',
      host: '*.*.com',
      changeOrigin: true
    }
  }
  // // 让浏览器overlay 同时显示警告和错误
  // overlay: {
  //   warnings: true,
  //   errors: true
  // }
}
*/
