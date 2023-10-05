import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  return (
    <primitive
      object={gltf.scene}
      position={[0, 0.1, 0]}
      children-0-castShadow
      scale={7.2}
    />
  );
}

export default Model;
