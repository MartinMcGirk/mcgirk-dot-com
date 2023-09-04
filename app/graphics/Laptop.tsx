"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Laptop = (props: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/LaptopWeb.gltf");
  return (
    <group
      {...props}
      dispose={null}
      ref={group}
      scale={[2, 2, 2]}
      rotation={[0, Math.PI * -0.35, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["Laptop base"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_1.geometry}
        material={materials.Screen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_2.geometry}
        material={materials.Hinge}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_3.geometry}
        material={materials.Trackpad}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_4.geometry}
        material={materials.Keys}
      />
    </group>
  );
};

export default Laptop;
