import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import App from './App'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)

// Resource
Vue.use(VueResource)

Vue.http.options.root = '/static/data'
Vue.http.options.emulateJSON = true

router.start(App, '#app')

window.router = router
