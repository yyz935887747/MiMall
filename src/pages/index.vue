<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-swap">
            <li class="menu-item">
              <a href="javescript:;">手机   &emsp; 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">电视   &emsp;  盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">笔记本  &emsp; 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">家电  &emsp; 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">智能  &emsp; 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">智能 &emsp;  路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">电源  &emsp; 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javescript:;">生活  &emsp; 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="`/#/product`+item.id" target="_blank">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- <div class="abs-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>-->
    </div>
    <service-bar></service-bar>
  </div>
</template>

 <script>
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
  },

  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .container {
    .swiper-box {
      .nav-menu {
        position: absolute;
        height: 451px;
        width: 264px;
        z-index: 9;
        padding: 26px 0;
        box-sizing: border-box;
        background-color: rgba(85,88,90,.48);
        .menu-swap {
          .menu-item {
            list-style: none;
            height: 50px;
            line-height: 50px;
            a {
              display: block;
              padding-left: 30px;
              color: $colorG;
              font-size: 16px;
              position: relative;
              &:before {
                content: "";
                @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
                position: absolute;
                top: 17.5px;
                right: 30px;
              }
            }
            &:hover {
              background-color: $colorA;
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        position: relative;
        .swiper-button-prev{
          position: absolute;
          left:274px;
        }
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>

