import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Layout from '../components/Layout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import Test from '../views/Test2.vue'
import UserSettings from '../views/UserSettings.vue'

const routes = [
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component:AuthLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            }, {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/test', name: 'Test', component: Test },
            { path: '/user', name: 'User', component: UserSettings },

        ]

    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }

)

export default router