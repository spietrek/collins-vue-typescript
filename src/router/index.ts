import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/HomeView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () =>
        import(/* webpackChunkName: "steve" */ '../views/MessageView.vue'),
    },
  ],
});
