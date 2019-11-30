import Vue from 'vue';
import Router from 'vue-router';
import ProductRegistering from '@/components/ProductRegistering';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductRegistering',
      component: ProductRegistering,
    },
  ],
});
