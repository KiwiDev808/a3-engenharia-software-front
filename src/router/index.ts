import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TermsOfUseView from '../views/TermsOfUseView.vue'
import RegisterViewVue from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: RegisterViewVue
    },
    {
      path: '/termos',
      name: 'termo',
      component: TermsOfUseView
    }
  ]
})

export default router
