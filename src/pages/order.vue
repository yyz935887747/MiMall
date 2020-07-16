<template >
    <div>
        我是订单页面
        <order-footer></order-footer>
        <router-view></router-view>
        <order-header></order-header>
   </div>
    
</template>

<script>
import OrderFooter from "../components/orderFooter"
import OrderHeader from '../components/orderHeader'
export default{
    name:"order",
    components:{
        OrderFooter,
        OrderHeader,
    }
}
</script>

<style >

</style>