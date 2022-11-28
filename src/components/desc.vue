<template>
  <div class="container layer">
    <!-- 智能化 -->
    <div
      class="intelligent layer"
      :class="showIntelligent ? 'intelligent-show' : ''"
    >
      <p>intelligent</p>
      <span class="arrows center-in-screen" v-if="showSlide" @click="start">
        <span
          class="arrow"
          v-for="(i,index) in arrows"
          :key="index"
          :class="i.className"
        />
      </span>
      <span class="bg-util robot" />
    </div>
    <!-- 图片展示 -->
    <!-- <div v-if="showPciture"></div> -->
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      showIntelligent: false,
      showPciture: false,
      showSlide: false,
      arrows: [
        { className: "full-white" },
        { className: "half-white" },
        { className: "grey" },
      ],
      currentIndex: 0,
    };
  },
  async mounted() {
    await new Promise((r) => setTimeout(r, 3000));
    this.showIntelligent = true;
    this.showSlide = true;

    this.flash();
  },
  methods: {
    flash() {
      setInterval(() => {
        if (this.currentIndex >= 0 && this.currentIndex < this.arrows.length) {
          this.currentIndex++;
          this.arrows = this.arrows.map((arrow, index) => {
            if (index === this.currentIndex) {
              arrow.className = "full-white";
            } else if (index + 1 === this.currentIndex) {
              arrow.className = "half-white";
            } else {
              arrow.className = "grey";
            }
            return arrow;
          });
        } else {
          this.currentIndex = 0;
        }
      }, 0.25 * 1000);
    },
    start() {
      
      this.$emit("start");
    },
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
      .full-white {
        opacity: 1;
      }
      .half-white {
        opacity: 0.5;
      }
      .grey {
        opacity: 0.25;
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
