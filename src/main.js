import './assets/tailwind.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Presences from './views/Presences.vue'
import Accueil from './views/Accueil.vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Presences', component: Presences },
    { path: '/', component: Accueil },
  ]
})

app.use(router,VueAxios, axios)
app.mount('#app')