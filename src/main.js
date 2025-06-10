import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'  // Make sure this exists
import './style.css' // Add this line

const app = createApp(App)
app.use(router)
app.mount('#app')