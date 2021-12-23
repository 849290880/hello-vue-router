import Vue from 'vue';
import VueRouter from 'vue-router';
import Order from '../views/Order.vue';
import Menu from '../views/Menu.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/menu',
  name: 'Menu',
  component: Menu,
},
{
  path: '/order',
  name: 'Order',
  component: Order,
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //     import ( /* webpackChunkName: "about" */ '../views/About.vue'),
},
];

const router = new VueRouter({
  routes,
});

export default router;
