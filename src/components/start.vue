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
    async flash(desc = true) {
      const spot = this.threeD.render3dCtx.getObject("spot-light");
      const amberlight = this.threeD.render3dCtx.ambientLight;
      const lightModel = this.threeD.render3dCtx.getObject("light-model");
      let end = {},
        start = {};
      if (desc) {
        end = { spotIntensity: 1, amberIntensirty: 0.35 };
        start = { spotIntensity: 0, amberIntensirty: 0 };
      } else {
        start = { spotIntensity: 1, amberIntensirty: 0.35 };
        end = { spotIntensity: 0, amberIntensirty: 0 };
      }
      const fn = (param) => {
        spot.intensity = param.spotIntensity;
        amberlight.intensity = param.amberIntensirty;
        lightModel.traverse((node) => {
          if (node.isScreen) {
            node.material.emissiveIntensity = param.spotIntensity;
          }
        });
      };
      return await this.threeD.flash(start, end, fn, 3);
    },
    async scene() {
      this.threeD.blackBg();

      this.threeD.addControls();

      this.threeD.closeAllLight();

      this.threeD.enableRenderShadow();

      await this.threeD.addModels();

      this.threeD.updateCameraPosition({ x: 2.93, y: -0.62, z: 0.04 });

      const lightModel = this.threeD.render3dCtx.getObject("light-model");
      lightModel.position.y = 1.35;

      this.threeD.addPointLight();

      this.threeD.addGround();

      const controls = this.threeD.render3dCtx.orbitControls;
      controls.enabled = false;

      await this.flash(true);

      const robot = this.threeD.render3dCtx.getObject("robot");
      this.threeD.startAnimaiton(robot, "Walking");

      await this.flash(false);
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
