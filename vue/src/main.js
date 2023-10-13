import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
//import { storeMain } from './store/'
import router from './router/index'
import selectVue from './components/Select.vue'
import sideBarVue from './components/sidebar.vue'
import Layout from './components/Layout.vue'
import Test from './views/Test.vue'
const pinia = createPinia()
const Vue = createApp(App)
Vue.use(pinia)
    .component('select-vue',selectVue)
    .component('layout-vue',Layout)
    .component('sidebar-vue',sideBarVue)
    .component('test-vue',Test)
    .use(router)
    .mount('#app')
