import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由引进的两种方式
import Home from '../pages/home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
           {  
             name:'index',
             path:"/index",
             component:()=>import("../pages/index.vue"),
           },{
             name:'product',
             path:'/product/:id',
             component:()=>import("../pages/product.vue")
           }, {
             name:'detail',
             path:"/detail/:id", 
            component:()=>import('../pages/detail.vue'),
          }
    ]
  },
  {
   name:"order",
   path:"/order",
   component:()=>import('../pages/order.vue'),
   children:[
       {
         name:'order-list',
         path:"list",
         component:()=>import('../pages/orderList.vue')
       },
      {
         name:'order-confirm',
         path:"confirm",
         component:()=>import('../pages/orderConfirm.vue')
       },{
         name:'order-pay',
         path:"pay",
         component:()=>import('../pages/orderPay.vue')
       },{
         name :'order-alipay',
         path :'alipay',
         component:()=>import('../pages/aliPay')
       }
   ]
  },
  {
    name:'cart',
    path:'/cart',
    component:()=>import('../pages/cart.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
