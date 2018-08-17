import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dialog',
      component: () => import('./views/DialogView.vue')
    },
    {
      path: '/chats',
      component: () => import('./views/ChatsView.vue')
    },
    {
      path: '/menu',
      component: () => import('./views/MenuView.vue')
    },
    {
      path: '/settings',
      component: () => import('./views/SettingsView.vue')
    },
    {
      path: '/login',
      alias: '/',      
      component: () => import('./views/LoginView.vue')
    },

  ]
})
