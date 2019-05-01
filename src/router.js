import Vue from 'vue'
import Router from 'vue-router'
import CustomerList from './views/CustomerList.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'customerList',
      component: CustomerList
    },
    {
      path: '/create-customer',
      name: 'create-customer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CreateCustomer.vue')
    }
  ]
})
