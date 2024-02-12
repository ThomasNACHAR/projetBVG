import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import Home from "./components/Home.vue"
import Circuit from "./components/Circuit.vue"
import Partenaires from "./components/Partenaires.vue"
import Reservation from "./components/Reservation.vue"
import Recettes from "./components/Recettes.vue"
import Contact from "./components/Contact.vue"
import Login from "./components/admin/Login.vue"

import Recette from "./components/Recette.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/circuit', component: Circuit },
    { path: '/partenaires', component: Partenaires },
    { path: '/reservation', component: Reservation },
    { path: '/recettes', component: Recettes },
    { path: '/contact', component: Contact },
    { path: '/admin', component: Login, name: 'admin' },
    { path: '/recettes/:path', name: 'recette', component: Recette, props: true },
  ]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
