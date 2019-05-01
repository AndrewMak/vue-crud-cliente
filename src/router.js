import Vue from 'vue'
import Router from 'vue-router'
import CustomerList from './views/CustomerList.vue'
import CreateCustomer from './views/CreateCustomer.vue'
import EditCustomer from './views/EditCustomer.vue'
import ShowCustomer from './views/ShowCustomer.vue'



Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/edit-customer',
      name: 'edit-customer',
      component: EditCustomer      
    },
    {
      path: '/show-customer',
      name: 'show-customer',
      component: ShowCustomer      
    }
  ]
})
