import { Color } from "three";
export default class ThreeD {
  constructor(render3dCtx) {
    this.render3dCtx = render3dCtx;
    window.render3dCtx = render3dCtx;
  }
  bg(color = 0x000000) {
    const bgColor = new Color(color);
    this.render3dCtx.scene.background = bgColor;
  }
  
}
