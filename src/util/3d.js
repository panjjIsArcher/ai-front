import {
  ACESFilmicToneMapping,
  Color,
  PCFSoftShadowMap,
  PlaneGeometry,
  Mesh,
  MeshBasicMaterial,
} from "three";
export default class ThreeD {
  constructor(render3dCtx) {
    this.render3dCtx = render3dCtx;

    window.render3dCtx = render3dCtx;
  }
  blackBg(color = 0x000000) {
    const bgColor = new Color(color);
    this.render3dCtx.scene.background = bgColor;
  }
  addControls(){
    this.render3dCtx.addOrbitControls();
    this.render3dCtx.camera.position.z = 3
  }
  closeAllLight() {
    this.render3dCtx.ambientLight.visible = false;
    this.render3dCtx.ambientLight.intensity = 0;

    this.render3dCtx.directionalLight.visible = false;
    this.render3dCtx.directionalLight.intensity = 0;
  }
  addLight() {}
  enableRenderShadow() {
    const { renderer } = this.render3dCtx;
    renderer.shadowMap.enabled = true; // 允许阴影
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
  }
  addGround() {
    // 创建地面 方便看效果
    const ground = new Mesh(
      new PlaneGeometry(7, 7),
      new MeshBasicMaterial({ color: 0xd3d3d3 })
    );
    ground.name = "ground";
    ground.position.z = -3;
    ground.rotation.x = 0.99 * (-Math.PI / 2);
    this.render3dCtx.addObject(ground);
    window.ground = ground;
  }
}
