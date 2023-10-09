import React, { Suspense, startTransition, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Circle, Html, OrbitControls } from "@react-three/drei";

const Test = () => {
  const [data, setData] = useState(null);
  const [modelUrl, setModelUrl] = useState(null);
  console.log(modelUrl);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://livemote-live.s3.amazonaws.com/up/db/data3d.json"
        // {
        //   mode: "cors",
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Content-Type": "application/json",
        //   },
        // }
      );
      const fecthedData = await data.json();
      console.log(fecthedData);
      setData(fecthedData);
      setModelUrl(fecthedData?.model);
      console.log(fecthedData?.model);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startTransition(() => {
      fetchData();
    });
  }, []);

  //const proxyUrl = 'http://localhost:3000/proxy?url=https://metadisplay.esimple.it/models/wine.glb';
  const gltf = useLoader(
    GLTFLoader,
    //'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/models/hammer.glb'
    //"https://res.cloudinary.com/dvuj15bl1/image/upload/v1696854294/mercCar.glb"
    //data?.model
    //modelUrl
    //"https://metadisplay.esimple.it/models/wine.glb"
    "https://res.cloudinary.com/dvuj15bl1/image/upload/v1696582103/wine.glb"
  );
  console.log(gltf);
  // console.log(modelUrl);

  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [-0.5, 2, 2] }} shadows>
        <directionalLight
          position={[1.3, 2, 4.4]}
          castShadow
          intensity={Math.PI * 2}
        />
        <primitive
          object={gltf.scene}
          position={[0, 1.2, 0]}
          children-0-castShadow
          scale={7.2}
        />
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow castShadow>
          <meshStandardMaterial />
        </Circle> */}
        <OrbitControls target={[0, 1, 0]} />
        {/* <axesHelper args={[5]} /> */}
        {/* <Stats /> */}
        {data &&
          data.pinpoints.map((pinpoint) => (
            <Html
              key={pinpoint.id}
              scale={100}
              rotation={[Math.PI / 2, 0, 0]}
              position={pinpoint.position}
            >
              <div className="annotation">
                <a href={pinpoint.link} target="_blank" rel="noreferrer">
                  {pinpoint.name}
                </a>
              </div>
            </Html>
          ))}
      </Canvas>
    </Suspense>
  );
};

export default Test;
