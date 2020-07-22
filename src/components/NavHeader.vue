<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-mume">
          <!--  href="javascript:;----作用页面不会刷新 -->
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username">登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span> 购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <!-- 有下拉区域用a标签不合适 -->
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <!-- 一个li代表一个商品 -->
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <!-- href=" `` "   往哪里跳  需要拼接 -->
                  <a :href="`/#/product/`+item.id" target="_balank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <!-- 一个li代表一个商品 -->
                <li class="product">
                  <a href target="_balank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">￥6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_balank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">￥1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_balank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">￥699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_balank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">￥1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_balank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">￥2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_balank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: "王浩",
      phoneList: []
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return `￥` + val.toFixed(2) + `元`;
    }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012"
            //  pageSize:6   控制传进来多少条数据
          }
        })
        .then(res => {
          //  Math.max(res.list.lenght,6)
          if (res.list.length >= 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    .container {
      // width: 1226px;
      // margin-right: auto;
      // margin-left: auto;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
          // display: inline-block;
          // height: 12px;
          // width: 16px;
          // background: url("/imgs/icon-cart-checked.png") no-repeat center;
          // background-size: contain;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      // width: 1226px;
      // margin: 0 auto;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      @include flex();
      .header-logo {
        //可视化区域  相当于框
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          // 内容去相当于存放了相册
          display: inline-block;
          width: 110px;
          height: 55px;

          //存放两张图片需要用到味伪类
          &:before {
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            content: ""; //用于占位  很重要
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url("/imgs/mi-logo.png") no-repeat center;
            // background-size: contain; //55px
            transition: margin 0.2s;
          }
          &:after {
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
            content: ""; //用于占位  很重要
            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url("/imgs/mi-home.png") no-repeat center;
            // background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block; //可以并列的div横着排
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          margin-right: 20px;
          line-height: 112px; //父元素的高度
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px -1px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: height 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0px;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  height: 137px;
                  img {
                    width: auto;
                    height: 111px;
                    margin: 26px;
                  }
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            //  设置box-sizing:border-box;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            //  必须设置高度 文本框有内置的高度
            height: 50px;
            padding-left: 4px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            // display: inline-block;
            // height: 18px;
            // width: 18px;
            // background: url("/imgs/icon-search.png") no-repeat center;
            // background-size: contain; //充满
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

