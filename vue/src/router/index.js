import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Layout from '../components/Layout.vue'
import Test from '../views/Test.vue'

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
}, {
    path: '/register',
    name: 'Register',
    component: Register
}, {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children:[
        {path:'/dashboard', name:'Dashboard',component:Dashboard},
        {path:'/test', name:'Test',component:Test},

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