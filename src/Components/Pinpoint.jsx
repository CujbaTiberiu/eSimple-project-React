import { Html } from "@react-three/drei";
import React from "react";

const Pinpoint = ({ data }) => {
  return (
    <>
      {data &&
        data?.pinpoints.map((pinpoint) => (
          <Html
            key={pinpoint.id}
            scale={100}
            rotation={[Math.PI / 2, 0, 0]}
            position={pinpoint.position}
          >
            <a href={pinpoint.link} target="_blank" rel="noopener noreferrer">
              <div className="annotation">{pinpoint.name}</div>
            </a>
          </Html>
        ))}
    </>
  );
};

export default Pinpoint;
