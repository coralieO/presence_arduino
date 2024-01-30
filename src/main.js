import './assets/tailwind.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Presences from './views/Presences.vue'
import Accueil from './views/Accueil.vue'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Presences', component: Presences },
    { path: '/', component: Accueil },
  ]
})

app.use(router)
app.mount('#app')