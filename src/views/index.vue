<template>
  <div class="index layer">
    <Render3d id="render3d" ref="render3d" backgroundTransparent />
  </div>
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
  },
  methods: {
    init() {
      const render3dCtx = getRender3dContext("render3d");
      const threeD = new ThreeD(render3dCtx);
      this.threeD = threeD;
    },
  },
};
</script>
