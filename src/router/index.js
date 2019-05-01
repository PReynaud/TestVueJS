import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import TestTable from '@/components/TestTable';
import CompleteTable from '@/components/CompleteTable';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/about',
      name: 'About',
      component: About,
      props: {
        message: 'Bonjour je suis un titre de balise de about'
      }
    },
    {
      path: '/test-tab',
      name: 'TestTable',
      component: TestTable
    },
    {
      path: '/complete-table',
      name: 'CompleteTable',
      component: CompleteTable
    }
  ]
});
