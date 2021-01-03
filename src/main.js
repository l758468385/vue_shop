// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 全局导入element-ui库
import 'element-ui/lib/theme-chalk/index.css' 

// 导入全局样式表
import './assets/css/global.css'

// 导入字体图标样式表（阿里）
import './assets/fonts/iconfont.css'

// 导入axios
import axios from 'axios'
Vue.prototype.$axios = axios //全局注册，使用方法为this.$https





Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
