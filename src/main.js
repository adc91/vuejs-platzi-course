import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import routes from '@/routes'

// BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Plugins custom
import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(EventBus)

const vueRoutes = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: vueRoutes
})

Vue.use(BootstrapVue)
