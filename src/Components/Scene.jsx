import { Circle, useTexture } from "@react-three/drei";
import React from "react";

const Scene = () => {
  const props = useTexture({
    map: "DiamondPlate008C_1K-PNG_Color.png",
    displacementMap: "DiamondPlate008C_1K-PNG_Displacement.png",
    normalMap: "DiamondPlate008C_1K-PNG_NormalDX.png",
    roughnessMap: "DiamondPlate008C_1K-PNG_Roughness.png",
    aoMap: "DiamondPlate008C_1K-PNG_AmbientOcclusion.png",
    metalnessMap: "DiamondPlate008C_1K-PNG_Metalness.png",
  });
  return (
    <Circle args={[9]} rotation-x={-Math.PI / 2} receiveShadow castShadow>
      <meshStandardMaterial {...props} />
    </Circle>
  );
};

export default Scene;
