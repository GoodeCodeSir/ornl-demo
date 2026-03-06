import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'

import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

/* optional italic styles */
import '@fontsource/roboto/100-italic.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'
import '@mdi/font/css/materialdesignicons.css'

import {createRouter, createWebHistory} from 'vue-router'
import {routes} from 'vue-router/auto-routes'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const isAuthenticated = true

router.beforeEach(async (to, from) => {
  console.log('beforeEach', to, from)

  if (!isAuthenticated && to.name !== '/401') {
    console.log('redirecting to unauthorized page')
    return '/401'
  }

  console.log('allowing navigation')
})

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    }
})

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
