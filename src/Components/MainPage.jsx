import { Circle, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, startTransition, useEffect, useState } from "react";
import Model from "./Model";
import Pinpoint from "./Pinpoint";
import Env from "./Env";
import { useTexture } from "@react-three/drei";
import Scene from "./Scene";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [modelUrl, setModelUrl] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "http://localhost:8080/api/glb"
        //"https://livemote-live.s3.amazonaws.com/up/db/data3d.json"
      );
      const fecthedData = await data.json();
      console.log(fecthedData[0]);
      setData(fecthedData[0]);
      setModelUrl(fecthedData[0].model);
      console.log(modelUrl);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startTransition(() => {
      fetchData();
    });
  }, []);

  return (
    data && (
      <Suspense fallback={null}>
        <Canvas camera={{ position: [-0.5, 2, 2] }} shadows>
          <directionalLight
            position={[1.3, 2, 4.4]}
            castShadow
            intensity={Math.PI * 2}
          />
          <Float
            position={[0, 1.2, 0]}
            rotation={[Math.PI / 0.5, 0, 0]}
            rotationIntensity={1}
            floatIntensity={1}
            speed={1.5}
          >
            {modelUrl && modelUrl !== null && <Model url={modelUrl} />}
          </Float>
          <Scene />
          <OrbitControls target={[0, 1, 0]} />
          {data && <Pinpoint data={data} />}
          <Env />
        </Canvas>
      </Suspense>
    )
  );
};

export default MainPage;
