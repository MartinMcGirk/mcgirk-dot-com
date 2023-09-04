"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { SydneyModel } from "@/app/graphics/SydneyModel";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight
        intensity={1}
        shadow-bias={-0.002}
        position={[-5, 10, 20]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow={true}
      />
    </>
  );
};

export default function ThreeRoot() {
  return (
    <Canvas
      shadows={true}
      camera={{ position: [100, 20, 0], rotation: [0, Math.PI * 0.5, 0] }}
    >
      <Lights />
      <SydneyModel />
    </Canvas>
  );
}
