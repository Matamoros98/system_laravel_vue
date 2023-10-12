import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import SelectVue from './components/Select.vue'
const pinia = createPinia()
const Vue = createApp(App)
Vue.use(pinia)
    .component('select-vue',SelectVue)
    .use(router)
    .mount('#app')
