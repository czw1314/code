import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial  from 'vue-material'
import VueTouch from 'vue-touch'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'



/*全局常量*/
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='                    // 线上代理地址
Vue.use(VueMaterial)
Vue.use(VueTouch, {name: 'v-touch'})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

