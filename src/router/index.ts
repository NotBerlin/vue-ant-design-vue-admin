import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import base_route from './base'
import classfiy_route from './classfiy'
import store from "../store"
import mixins_utils from "../mixins/utils"


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


// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = mixins_utils.methods.getSessionStorage('logined') ? true : false;
  // const isLogin = store.state.logined ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/');
  }
})

export default router
