import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import TestTable from '@/components/TestTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: { message: 'Bonjour je suis un titre de balise de about' }
    },
    {
      path: '/test-tab',
      name: 'TestTable',
      component: TestTable
    }
  ]
});
