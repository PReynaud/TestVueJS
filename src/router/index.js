import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import TestTable from '@/components/TestTable';
import CompleteTable from '@/components/CompleteTable';
import Detail from '@/components/Detail';
import TicTacToe from '@/components/TicTacToe';

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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/tic',
      name: 'TicTacToe',
      component: TicTacToe
    }
  ]
});
