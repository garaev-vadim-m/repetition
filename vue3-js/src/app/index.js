import { createApp } from 'vue';
import './index.css';
import index from './index.vue';
import { router } from './router/index.js';

const app = createApp(index);
app.use(router);
app.mount('#app');
