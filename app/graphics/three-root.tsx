"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { SydneyModelMoving } from "@/app/graphics/SydneyModelMoving";
import Laptop from "@/app/graphics/Laptop";

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
      <SydneyModelMoving />
    </Canvas>
  );
}

export function LaptopRoot() {
  return (
    <Canvas
      shadows={true}
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [-1, 0.25, 1.3], rotation: [0, 0, 0] }}
    >
      <Lights />
      <Laptop />
    </Canvas>
  );
}
