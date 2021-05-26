import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store.js'
import App from './App.vue'
import PageCard from './components/PageCard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/countries/:countryId', component: PageCard
        }
    ]
})

const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')