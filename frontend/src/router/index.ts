import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@pages/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@pages/login/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 