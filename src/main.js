import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

// 发送请求的时候设置基础值：根据前跨域的方式做调整/a/b  /api/a/b
// axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

//接口误拦截
axios.interceptors.response.use(function(response){
      let res = response.data;
          // res.status == 0  表示成功
      if(res.status == 0){
        return res.data
      // res.status == 0  表示没登录
      } else if(res.staus == 10) {
        // 在main.js这里不允许用路由跳转,路由是挂载vue实例里面去的，再页面在app.vue里面才能用
        window.location.href = '/#/login'
      } else {
        //报错拦截
        alert(res.msg)
      }
})


// 注册vue.use--加载插件
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
