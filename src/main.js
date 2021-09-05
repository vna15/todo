import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
