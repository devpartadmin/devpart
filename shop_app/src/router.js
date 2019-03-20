import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:{name:'index'},
    },
    {
      path: '',
      name: 'index',
      component: () => import('@/views/SystemHome/Index'),
      children:[
        {
          path: '',
          name: 'HomePage',
          redirect: {name: 'HomePageIndex'},
          meta: {breadcrumbTitle: '首页'},
          component: {
            render() {
              return <router-view/>
            }
          },
          children: [
            {
              path: 'pageIndex',
              name: 'HomePageIndex',
              component: () => import('@/views/SystemHome/HomePage'),
            }
          ]
        }

      ]
    }

  ]
})
