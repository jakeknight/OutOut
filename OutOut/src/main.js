// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation'
import Vue2Touch from 'vue2-touch'
import VueMoment from 'vue-moment'

Vue.config.productionTip = true

Vue.use(VueGeolocation)
Vue.use(Vue2Touch)
Vue.use(VueMoment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
