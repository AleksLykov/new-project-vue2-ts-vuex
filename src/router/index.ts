import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../pages/Main.vue';
import About from '../pages/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', redirect: '/main' },

  {
    path: '/main',
    name: 'MainPage',
    component: Main,
    children: [],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '*',
    redirect: '/main',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
