import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:{name:'HomePageIndex'},
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
              return <router-view />;
            }
          },
          children: [
            {
              path: 'pageIndex',
              name: 'HomePageIndex',
              component: () => import('@/views/home/HomePage'),
            },
            {
              path: 'list',
              name: 'HomePageIndexFoodsList',
              props:true,
              meta: {breadcrumbTitle: '食品列表'},
              component: ()=>import('@/views/home/list'),
            },
          ]
        },
        {
          path:'indent',
          name:'Indent',
          redirect:{name:'IndentIndex'},
          meta: {breadcrumbTitle: '订单'},
          component: {
            render() {
              return <router-view/>
            }
          },
          children:[
            {
              path: '',
              name: 'IndentIndex',
              component: () => import('@/views/indentManage/IndentIndex'),
            }
          ]
        }
      ]
    },

  ]
})
