// @ts-nocheck
import {  createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/pages/PageIndex') },
  { path: '/admin', component: () => import('@/pages/PageAdmin') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
