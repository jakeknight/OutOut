import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Route code splitting
const IndexView = () => import('@/views/Index.vue')
//

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView }
  ]
})
