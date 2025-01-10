"use client";

import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SydneyModelMoving } from "@/app/graphics/SydneyModelMoving";
import * as THREE from 'three';
import { Loader } from "@react-three/drei";
import { Suspense } from 'react';

const Lights = () => {
  const light = useRef<THREE.PointLight>(null!);

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight
        ref={light}
        intensity={4000}
        shadow-bias={-0.002}
        position={[10, 20, 10]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow={true}
      />
      {/* {light.current && (
        <primitive object={new THREE.PointLightHelper(light.current, 5)} />
      )} */}
    </>
  );
};

const CameraController = () => {
  const [mouseX, setMouseX] = useState(0);
  const currentAngle = useRef(Math.PI * 0.5); // Store current angle

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const radius = 90;
    const baseAngle = Math.PI * 0.5;
    const rotationRange = Math.PI * 0.25;
    const targetAngle = baseAngle + (mouseX * rotationRange);

    // Smooth interpolation
    currentAngle.current = THREE.MathUtils.lerp(
      currentAngle.current,
      targetAngle,
      0.05 // Adjust this value to change smoothing (0-1, lower = smoother)
    );


    state.camera.position.x = radius * Math.cos(currentAngle.current);
    state.camera.position.y = 20;
    state.camera.position.z = radius * Math.sin(currentAngle.current);
    state.camera.lookAt(0, 20, 0);
  });

  return null;
};

export default function ThreeRoot() {
  return (
    <>
      <Canvas
        shadows={true}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          // alpha: false,
          stencil: false,
          depth: true,
        }}
      // frameloop="demand"
      >
        <Suspense fallback={null}>
          <CameraController />
          <Lights />
          <SydneyModelMoving />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{
          background: 'transparent',
          backdropFilter: 'none',
        }}
        innerStyles={{
          backgroundColor: 'transparent',
          width: '50vw',
          maxWidth: '400px',
        }}
        barStyles={{
          backgroundColor: '#ffffff',
          height: '3px',
        }}
        dataStyles={{
          color: '#ffffff',
          fontSize: '14px',
          fontFamily: 'monospace',
          marginTop: '1em',
        }}
        dataInterpolation={(p) => `Loading Sydney Harbour ${p.toFixed(0)}%`}
      />
    </>
  );
}
