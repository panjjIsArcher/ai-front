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
    async scene() {
      this.threeD.blackBg(0xffffff);

      this.threeD.addControls();

      // this.threeD.closeAllLight();

      this.threeD.enableRenderShadow();

      this.threeD.addPointLight()

      await this.threeD.addModels()

    
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
