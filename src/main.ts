import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker'
require('./servers/mock-server.js')

import Antd from './components/antd.js'

import router from './router'
import store from './store'

const app = createApp(App);
app.config['productionTip'] = false;

app.use(Antd);
app.use(store).use(router).mount('#app');

