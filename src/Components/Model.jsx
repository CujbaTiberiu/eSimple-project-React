import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Pinpoint from "./Pinpoint";

function Model({ url, data }) {
  const gltf = useLoader(GLTFLoader, url);
  return (
    <group>
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
        scale={5}
      />
      <Pinpoint data={data} />
    </group>
  );
}

export default Model;
