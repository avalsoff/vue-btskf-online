import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import { getAllMessages } from './store/actions'

import './styles/main.scss'

Vue.config.productionTip = false


Vue.filter('date', timestamp => {
  const date = new Date(timestamp).toLocaleDateString().split('/')
  const tempDate = date[0]
  date[0] = date[1]
  date[1] = tempDate
  return date.join('.')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

getAllMessages(store)