<template>
  <div class="container layer">
    <!-- 智能化 -->
    <div
      class="intelligent layer"
      :class="showIntelligent ? 'intelligent-show' : ''"
    >
      <p>intelligent</p>
      <span class="arrows center-in-screen" v-if="showSlide">
        <span class="arrow"  />
        <span class="arrow" />
        <span class="arrow" />
      </span>
      <span class="bg-util robot"></span>
    </div>
    <!-- 图片展示 -->
    <div v-if="showPciture"></div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      showIntelligent: false,
      showPciture: false,
      showSlide: false,
    };
  },


  async mounted() {
    await new Promise((r) => setTimeout(r, 3000));
    this.showIntelligent = true;
    this.showSlide = true;
  },
};
</script>
<style scoped lang="less">
.container {
  background-color: #000;
  color: #000;

  .intelligent {
    background-color: #f3f3f3;
    background: linear-gradient(to right top, #f3f3f3, #dedcde);
    box-sizing: border-box;
    p {
      text-transform: capitalize;
      font-weight: bolder;
      font-size: 12.4vw;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      position: absolute;
      right: 9.5vw;
      top: 46vw;
      animation-duration: 1s, 1s;
      animation-name: slide-bottom, fade-in;
      animation-timing-function: ease, ease;
      animation-delay: 2s, 2s;
      transform: translateY(-26.67vw);
      opacity: 0;
    }
    .arrows {
      position: absolute;
      width: 15vw;
      height: 15vw;
      display: flex;

      > span {
        background-color: #fff;
        height: 100%;
        flex: 1;
        clip-path: polygon(
          75% 0%,
          100% 50%,
          75% 100%,
          46% 100%,
          78% 52%,
          47% 0
        );
      }
    }
    .robot {
      background-image: url("../assets/img/robot.png");
      display: inline-block;
      height: 80.53vw;
      width: 80.53vw;
      position: absolute;
      bottom: 0;
      left: -10vw;
      animation-duration: 2s;
      animation-name: slide-right;
      animation-timing-function: ease;
    }
  }
  .intelligent-show {
    p {
      opacity: 1;
    }
  }
}
</style>
