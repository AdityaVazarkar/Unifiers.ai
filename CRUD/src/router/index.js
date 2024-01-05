import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeView from '../views/Employee/View.vue'
import Employeecreate from '../views/Employee/EmployeeCreate.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView
    },
    {
      path: '/employee/create',
      name: 'employeecreate',
      component: Employeecreate
    },
  ]
})

export default router
