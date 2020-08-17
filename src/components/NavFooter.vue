<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/t/1343480" target="_blank">河畔角主页</a>
      <a href="https://coding.imooc.com/class/113.html" target="_blank">vue全栈课程</a>
      <a href="https://coding.imooc.com/class/236.html" taget="_blank">React全家桶课程</a>
      <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程(H5+小程序+Node+Mongo)</a>
    </div>
    <div class="footer-copyright">
      Copyright ©2019
      <span>mi.futurefe.com</span> All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  background-color: $colorB;
  font-size: 16px;
  border-top: 4px solid $colorA;
  text-align: center;
  color: $colorD;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      display: inline-block;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
     margin-bottom: 13px;
    a {
      display: inline-block;
      color: $colorD;
      position: relative;
      margin: 0 10px;
      &:before {
        content: "";
        position: absolute;
        right: -12px;
        top: 4px;
        height: 13px;
        width: 0.1px;
        background-color: $colorD;
        border: 1px solid $colorD;
      }
      &:last-child:before{
        display: none;
      }
    }
  }
  .footer-copyright{
    span{
      color: $colorA;
    }
  }
}
</style>