import { createApp } from 'vue';
import './index.css';
import index from '@/app/index.vue';
import { router } from './router/index.ts';

const app = createApp(index);
app.use(router);
app.mount('#app');
