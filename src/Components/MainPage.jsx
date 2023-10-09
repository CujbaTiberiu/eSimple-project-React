import {
  Circle,
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Model from "./Model";
import Scene from "./Scene";
import { useIdContext } from "./IdContext";
import { Button } from "@mantine/core";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [modelUrl, setModelUrl] = useState(null);
  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(false);
  const [sceneEnabled, setSceneEnabled] = useState(true);

  const { id } = useIdContext();
  console.log(id);

  const toggleOrbitControls = () => {
    setOrbitControlsEnabled(!orbitControlsEnabled);
  };

  const toggleScene = () => {
    setSceneEnabled(!sceneEnabled);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        `http://localhost:8080/api/glb/${id}`
        //"https://livemote-live.s3.amazonaws.com/up/db/data3d.json"
      );
      const fecthedData = await data.json();
      console.log(fecthedData);
      setData(fecthedData);
      setModelUrl(fecthedData.model);
      console.log(modelUrl);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    data && (
      <Suspense fallback={null}>
        <div className="div__buttons">
          <Button
            variant="filled"
            color="teal"
            size="md"
            radius="md"
            mx={30}
            onClick={toggleOrbitControls}
            w={240}
          >
            {!orbitControlsEnabled
              ? "Activate OrbitControls"
              : "Deactivate OrbitControls"}
          </Button>
          <Button
            variant="filled"
            color="teal"
            size="md"
            radius="md"
            mx={30}
            onClick={toggleScene}
            w={240}
          >
            {sceneEnabled ? "Deactivate Scene" : "Activate Scene"}
          </Button>
        </div>
        <Canvas camera={{ position: [1, 1, 5], fov: 50 }} shadows>
          <directionalLight
            position={[1.3, 2, 4.4]}
            castShadow
            intensity={Math.PI * 2}
          />
          <Float
            position={[0, 0, 0]}
            rotation={[Math.PI / 0.5, 0, 0]}
            rotationIntensity={1}
            floatIntensity={1}
            speed={1.5}
          >
            <PresentationControls
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 6, Math.PI / 6]} //vertical
              azimuth={[-Math.PI / 2, Math.PI / 2]} //horizontal
            >
              {modelUrl && modelUrl !== null && (
                <Model url={modelUrl} data={data} shadows castShadow />
              )}
            </PresentationControls>
          </Float>
          <Environment preset="sunset" />
          {sceneEnabled && <Scene />}
          {orbitControlsEnabled && <OrbitControls target={[0, 1, 0]} />}
        </Canvas>
      </Suspense>
    )
  );
};

export default MainPage;
