import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import base_route from './base'
import classfiy_route from './classfiy'


const routes: Array<RouteRecordRaw> = [];

base_route.forEach(element => {
  routes.push(element);
});
classfiy_route.forEach(element => {
  routes[2].children.push(element);
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
