import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

createApp(App).use(router).mount('#app') // Use the router
