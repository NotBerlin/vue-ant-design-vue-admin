import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import base_route from './base'


const routes: Array<RouteRecordRaw> = [];

base_route.forEach(element => {
  routes.push(element);
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
