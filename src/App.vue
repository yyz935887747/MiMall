<template>
  <div id="app">
    <!-- 用于展示所有路由组件的东西 -->
    <router-view/>
  </div>
</template>

<script >
 export default{
   name:"app",
   components:{},
   data(){
   return {
      res:''
    }
    },
    mounted(){
      // 本地加载请求静态json 的形式
    //  this.axios.get("mock/user/login.json").then((res)=>{
    //    this.res = res;
    // })
    
    // 集成Mock  API
    //  this.axios.get("/user/login").then((res)=>{
    //    this.res = res;
    //  })
  }
}

</script>>

<style>
@import './assets/scss/reset.scss'
</style>
