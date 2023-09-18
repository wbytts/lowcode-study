import {createApp} from 'vue'
import { router } from './router';
import { pinia } from './store';
import 'uno.css'
import './style/global.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router);
app.use(pinia);
app.mount('#app');
