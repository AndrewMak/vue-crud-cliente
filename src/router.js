import Vue from 'vue'
import Router from 'vue-router'
import CustomerList from './views/CustomerList.vue'
import CreateCustomer from './views/CreateCustomer.vue'


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
      component: CreateCustomer      
    }
  ]
})
