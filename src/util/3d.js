import { Color } from "three";
export default class ThreeD {
  constructor(render3dCtx) {
    this.render3dCtx = render3dCtx;
    window.render3dCtx = render3dCtx;
  }
  blackBg(color = 0x000000) {
    const bgColor = new Color(color);
    this.render3dCtx.scene.background = bgColor;
  }
  closeAllLight() {
    this.render3dCtx.ambientLight.visible = false;
    this.render3dCtx.ambientLight.intensity = 0;

    this.render3dCtx.directionalLight.visible = false;
    this.render3dCtx.directionalLight.intensity = 0;
  }
}
