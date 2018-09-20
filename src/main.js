import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import routes from '@/routes'
import store from '@/store'
import i18n from '@/i18n'

// BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Plugins custom
import EventBus from '@/plugins/event-bus'

// Filter custom
import msToMm from '@/filters/ms-to-mm'

// Directives custom
import blur from '@/directives/blur'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const vueRoutes = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: vueRoutes,
  store,
  i18n
})

Vue.use(BootstrapVue)
