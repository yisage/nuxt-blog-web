// https://nuxt.com/docs/api/configuration/nuxt-config

/* 响应式布局 现代浏览器flex支持比较好 所以现在建议的做法是弹性布局加px引入bulma，字体大小使用rem*/
// pageTransition: process.env.NODE_ENV ? {} : { name: 'page', mode: 'out-in' }

const timestamp = Date.now();
//const serverBase = `http://huangjia.xyz:3745`
const serverBase = `http://localhost:3745`

export default defineNuxtConfig({
  app: {
    head: {
      title: '朋克赛安',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: "yes"
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: "yes"
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'in-out' }//需要从 更改mode: 'out - in'为mode: 'in-out'[gitHub找到的答案]
  },
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      '/api': serverBase
    },
    routeRules: {
      '/api/**': {
        proxy: `${serverBase}/**`
      }
    }
  },
  runtimeConfig: {
    public: {
      timestamp,
      imgUrl: serverBase
    }
  },
  css: ['bulma/css/bulma.min.css', "~/assets/style/main.scss"],//先加载框架样式，再加载自己的样式
  modules: ['arco-design-nuxt-module', '@pinia/nuxt','@vueuse/nuxt'],

})
