<template>
  <Render3d id="render3d" ref="render3d" class="render3d" />
</template>

<script>
import Render3d, { getRender3dContext } from "web-render3d";
import ThreeD from "@/util/3d";
export default {
  components: { Render3d },
  data() {
    return {
      threeD: null,
    };
  },
  mounted() {
    this.init();
    this.scene();
  },
  methods: {
    init() {
      const render3dCtx = getRender3dContext("render3d");
      const threeD = new ThreeD(render3dCtx);
      this.threeD = threeD;
    },
    scene() {
      // 把bg的颜色换为黑色
      this.threeD.blackBg();

      // 取消scene中的全部灯光
      this.threeD.closeAllLight();
    },
  },
};
</script>
<style scoped>
.render3d {
  height: 100%;
  width: 100%;
}
</style>
