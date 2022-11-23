import { models } from "@/config";
import {
  PCFSoftShadowMap,
  Color,
  SpotLight,
  PlaneGeometry,
  Mesh,
  MeshStandardMaterial,
  DoubleSide,
} from "three";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import GlbLoader from "lesca-glb-loader";
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
    this.render3dCtx.ambientLight.intensity = 0;
    this.render3dCtx.directionalLight.visible = false;
  }
  enableRenderShadow() {
    const { renderer } = this.render3dCtx;
    renderer.shadowMap.enabled = true; // 允许阴影
    renderer.shadowMap.type = PCFSoftShadowMap; // 更柔和 也更真实
  }
  enableReceiveShadow(model) {
    model.receiveShadow = true;
    return model;
  }
  enableCreateShadow(model) {
    model.castShadow = true;
    return model;
  }
  async addModels() {
    const lightConfig = models.light;
    const robotConfig = models.robot;
    const fn = [GlbLoader(lightConfig.src), GlbLoader(robotConfig.src)];
    const all = await Promise.all(fn);
    const model = all[0].model;
    model.name = "light-model";
    model.traverse((node) => {
      if (node.type === "Mesh" && node.name === "Obj3d66-635421-2-804") {
        node.isScreen = true;
        node.material.emissveIntensity = 0;
      }
    });
    const robot = all[1].model;
    robot.scale.setScalar(robotConfig.showConfig.scale);
    robot.position.set(
      robotConfig.showConfig.position.x,
      robotConfig.showConfig.position.y,
      robotConfig.showConfig.position.z
    );
    robot.rotation.y = Math.PI / 2;
    robot.name = "robot";
    this.render3dCtx.addObject(model);
    this.render3dCtx.addObject(robot);
  }
  addPointLight() {
    const lightModel = this.render3dCtx.getObject("light-model");
    const light = new SpotLight(0xe3e3e3);
    light.name = "spot-light";
    light.castShadow = true;
    light.position.set(
      lightModel.position.clone().x,
      lightModel.position.clone().y,
      lightModel.position.clone().z
    );
    light.distance = 5;
    light.angle = 0.32;
    light.penumbra = 0.2;
    light.intensity = 0;
    this.render3dCtx.addObject(light);
  }
  updateCameraPosition(position = new Vector3()) {
    this.render3dCtx.camera.position.x = position.x;
    this.render3dCtx.camera.position.y = position.y;
    this.render3dCtx.camera.position.z = position.z;
  }
  addGround() {
    const ground = new Mesh(
      new PlaneGeometry(3, 3),
      new MeshStandardMaterial({ color: 0xf9f9f9, side: DoubleSide })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.position.set(-0.4, -1.5, 0);
    this.render3dCtx.addObject(ground);
  }

  addBeforeRenderHook() {
    const tweenUpdate = () => {
      TWEEN.update();
    };
    const isTweenExist = this.render3dCtx.beforeRenderHookList.some(
      (e) => e.name === "tweenUpdate"
    );
    if (!isTweenExist) {
      this.render3dCtx.addBeforeRenderHook(tweenUpdate);
    }
  }
  async flash(
    startOptions = {},
    endOptions = {},
    fn = () => {},
    duration = 1,
    repeat = 0
  ) {
    this.addBeforeRenderHook();
    return new Promise((resolve) => {
      const tween = new TWEEN.Tween(startOptions);
      tween.easing(TWEEN.Easing.Linear.None);
      tween.to(endOptions, duration * 1000);
      tween.start();
      tween.onUpdate((param) => {
        fn(param);
      });
      if (repeat) {
        tween.repeat();
      }
      tween.onComplete(() => {
        this.render3dCtx.removeBeforeRenderHook("tweenUpdate");
        resolve();
      });
    });
  }
  stopAnimaiton(model, animationName) {
    this.render3dCtx.stopAnimaiton(model, animationName);
  }
  startAnimaiton(model, animationName) {
    this.render3dCtx.playAnimation(model, {
      animationName, // 为空时，播放默认的第一个动画
      loop: true,
      clampWhenFinished: true
    });
  }
}
