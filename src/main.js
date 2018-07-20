import Vue from 'vue'
import App from '@/App.vue'

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Plugins custom
import EventBus from '@/plugins/event-bus'
Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(BootstrapVue)
