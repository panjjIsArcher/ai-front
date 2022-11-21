import { Vector3 } from "three";

export const models = {
  light: {
    src: "/light.glb",
    // src:require("./assets/models/light.glb"),
  },
  robot: {
    src: "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb",
    showConfig: {
      scale: 0.1,
      position: new Vector3(-0.4, -1.5, 0)  
    },
  },
};
