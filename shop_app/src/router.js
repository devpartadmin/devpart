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
      redirect: {name: 'HomePage'},
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
          ]
        },
        {
          path:'center',
          name:'Center',
          redirect:{name:'CenterIndex'},
          meta: {breadcrumbTitle: '个人中心'},
          component: {
            render() {
              return <router-view/>
            }
          },
          children:[
            {
              path:'',
              name:'CenterIndex',
              component:()=> import('@/views/personManage/PersonIndex'),
            }
          ]
        },
      ]
    },
    {
      path: '/list',
      name: 'HomePageIndexFoodsList',
      meta: {breadcrumbTitle: '食品列表'},
      component: ()=>import('@/views/home/list'),
    },
    {
      path: '/search',
      name: 'HomePageIndexSearch',
      meta: {breadcrumbTitle: '搜索页'},
      component: ()=>import('@/views/shopList/Search'),
    },
    {
      path:'/car',
      name:'HomePageIndexCarPage',
      meta: {breadcrumbTitle: '购物车'},
      component: ()=>import('@/views/carAbout/CarPage'),
    },
    {
      path:'/news',
      name:'NewsManagement',
      meta: {breadcrumbTitle: '消息中心'},
      component: ()=>import('@/views/SystemHome/NewsIndex'),
    }
  ]
})







































































