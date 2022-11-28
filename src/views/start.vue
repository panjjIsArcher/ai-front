<template>
  <div class="layer container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { PATH } from "@/constants/url";
import request from "@/https/https";
let vueInstance = null;
export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOptions: {
        autoplay: true, // 自动播放
        delay: 2500, // 自动播放的时间 2.5s切换一次
        speed: 800, // 轮播速度
        loop: true, // 循环播放
        longSwipes: true, // 长滑动
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    vueInstance = this;
    this.getFunctionList()
  },
  methods: {
    async getFunctionList() {
      const list = await request(PATH.getFunctionList);
      console.log(list);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  background-color: #f3f3f3;
}
</style>
