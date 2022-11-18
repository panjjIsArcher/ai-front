import {
  // ACESFilmicToneMapping,
  PCFSoftShadowMap,
  PlaneGeometry,
  Mesh,
  Color,
  DirectionalLight,
  DirectionalLightHelper,
  DodecahedronGeometry,
  MeshStandardMaterial,
 
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
  addControls() {
    this.render3dCtx.addOrbitControls();
    this.render3dCtx.camera.position.set(2.99, 0.07, 0.23);
  }
  closeAllLight() {
    this.render3dCtx.ambientLight.visible = false;
    this.render3dCtx.ambientLight.intensity = 0;

    this.render3dCtx.directionalLight.visible = false;
    this.render3dCtx.directionalLight.intensity = 0;
  }
  addLight() {
    const dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(-1, 1, 1);

    this.render3dCtx.addObject(dirLight);

    dirLight.castShadow = true; // 允许产生阴影

    dirLight.shadow.mapSize.width = 10;
    dirLight.shadow.mapSize.height = 10;

    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 10;
    dirLight.shadow.camera.right = 15;
    dirLight.shadow.camera.left = -15;
    dirLight.shadow.camera.top = 15;
    dirLight.shadow.camera.bottom = -15;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;

    const dirLightHelper = new DirectionalLightHelper(dirLight, 10);
    this.render3dCtx.addObject(dirLightHelper);
  }
  enableRenderShadow() {
    const { renderer } = this.render3dCtx;
    renderer.shadowMap.enabled = true; // 允许阴影
    renderer.shadowMap.type = PCFSoftShadowMap; // 更柔和 也更真实
    // renderer.toneMapping = ACESFilmicToneMapping;
  }
  enableReceiveShadow(model) {
    model.receiveShadow = true;
    return model;
  }
  enableCreateShadow(model) {
    model.castShadow = true;
    return model;
  }
  addGround() {
    // 创建地面 方便看效果
    const ground = new Mesh(
      new PlaneGeometry(7, 7),
      new MeshStandardMaterial({ color: 0xe4caa0 })
    );
    ground.name = "ground";
    ground.position.z = -3;
    ground.rotation.x = 0.985 * (-Math.PI / 2);
    window.ground = ground;

    this.enableReceiveShadow(ground);
    this.render3dCtx.addObject(ground);
  }
  addBall() {
    const ball = new Mesh(
      new DodecahedronGeometry(0.1, 2),
      new MeshStandardMaterial({ color: 0xff0000 })
    );
    ball.position.y = 0.1;
    this.enableCreateShadow(ball);
    this.render3dCtx.addObject(ball);
  }
}
