// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'

import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import { getData, getSettings } from './store/actions'

// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'

// Import Views - Top level
import AppView from './components/App.vue'

// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(VueRouter)

// Routing logic
var router = new VueRouter({
  base: '/admin/',
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  // window.console.log('Transition', transition)
  if (to.auth && (to.router.app.$store.state.token === 'null')) {
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

sync(store, router)

// Start out app!
// eslint-disable-next-line no-new
window.Vue = new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
// console.log('store 1', store, myApp, myApp.$router)
// store.commit('SWITCH_SERVICE', myApp.$router.params.id)
getSettings(store)
getData(store)

// Check local storage to handle refreshes
// if (window.localStorage) {
//   var localUserString = window.localStorage.getItem('user') || 'null'
//   var localUser = JSON.parse(localUserString)
//
//   if (localUser && store.state.user !== localUser) {
//     store.commit('SET_USER', localUser)
//     store.commit('SET_TOKEN', window.localStorage.getItem('token'))
//   }
// }
