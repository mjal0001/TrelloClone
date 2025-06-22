// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify plugin
import { vuetify } from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

// Pinia state management
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia()) // ✅ Pinia store
app.use(vuetify) // ✅ Vuetify plugin

app.mount('#app') // ✅ Mount the app
