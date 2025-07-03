import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)

app.use(DataVVue3)
app.mount('#app')
