import { createRouter, createWebHistory } from 'vue-router'
import PageRouter from './page/index'
import ViewsRouter from './views/index'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...PageRouter, ...ViewsRouter]
})

export default router
