// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import URL from './tool/URL'


Vue.prototype.URL = URL

Vue.config.productionTip = false

Vue.use(infiniteScroll)      //引用插件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
