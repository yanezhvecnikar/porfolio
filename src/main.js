import { createApp } from 'vue'
import App from './App.vue'
import Contacts from './components/Contacts.vue'
import Portfolio from './components/Portfolio.vue'
import HeaderHome from './components/HeaderHome.vue'
import Services from './components/Services.vue'
import Resume from './components/Resume.vue'

const app = createApp(App)
app.component('HeaderHome', HeaderHome)
app.component('Services', Services)
app.component('Resume', Resume)
app.component('Portfolio', Portfolio)
app.component('Contacts', Contacts)
app.mount('#app')