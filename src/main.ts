import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerApp } from '../global'
import { setupStore } from './store'
import 'normalize.css'
const app = createApp(App)
registerApp(app)
setupStore(app)
app.use(router)
app.mount('#app')
