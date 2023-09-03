"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { SydneyModel } from "@/app/graphics/SydneyModel";
import { Ferry1Model } from "@/app/graphics/Ferry1Model";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight
        intensity={1}
        shadow-bias={-0.001}
        position={[-5, 10, 20]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow={true}
      />
    </>
  );
};

const Test = () => {
  const ref = useRef();
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  useFrame((state, delta) => {
    // update camera angles according to mouse position
    ref.current.azimuthAngle = -state.mouse.x;
    ref.current.polarAngle = Math.PI / 2 + state.mouse.y;
    ref.current.update(delta);
  });

  return <CameraControls ref={ref} args={[camera, gl.domElement]} />;
};

export default function ThreeRoot() {
  return (
    <Canvas
      shadows={true}
      camera={{ position: [100, 20, 0], rotation: [0, Math.PI * 0.5, 0] }}
    >
      <Lights />
      <SydneyModel />
      {/*<PerspectiveCamera*/}
      {/*  makeDefault*/}
      {/*  position={[100, 20, 0]}*/}
      {/*  rotation={[Math.PI * -0.1, Math.PI * 0.5, 0]}*/}
      {/*/>*/}
      {/*<Test />*/}
      {/*<Ferry1Model />*/}
    </Canvas>
  );
}
