import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'  // Make sure this exists
import './style.css' // Add this line
import AnimatedBackground from './components/AnimatedBackground.vue'

const app = createApp(App)
app.component('AnimatedBackground', AnimatedBackground)
app.use(router)
app.mount('#app')