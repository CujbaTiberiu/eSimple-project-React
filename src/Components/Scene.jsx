import { Circle, useTexture } from "@react-three/drei";
import React from "react";

const Scene = () => {
  const props = useTexture({
    map: "Foil003_2K-JPG_Color.jpg",
    displacementMap: "Foil003_2K-JPG_Displacement.jpg",
    normalMap: "Foil003_2K-JPG_NormalDX.jpg",
    roughnessMap: "Foil003_2K-JPG_Roughness.jpg",
    aoMap: "Foil003_2K-JPG_AmbientOcclusion.jpg",
    metalnessMap: "Foil003_2K-JPG_Metalness.jpg",
  });
  return (
    <Circle args={[5]} rotation-x={-Math.PI / 2} receiveShadow castShadow>
      <meshStandardMaterial {...props} />
    </Circle>
  );
};

export default Scene;
