// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueGeolocation from 'vue-browser-geolocation'
import { VueHammer } from 'vue2-hammer'

Vue.config.productionTip = true

Vue.use(VueGeolocation)
Vue.use(VueHammer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
