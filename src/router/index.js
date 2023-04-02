import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Customer/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../pages/Customer/Cart.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router