"use client";

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Ferry1Model(props: any) {
  const groupRef = useRef<THREE.Group>(null!);

  // const [mouseCoords, setMouseCoords] = React.useState([0, 0]);

  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("mousemove", (e) => {
  //       setMouseCoords([
  //         e.clientX / window.innerWidth - 0.5,
  //         e.clientY / window.innerHeight - 0.5,
  //       ]);
  //     });
  //   }
  // }, []);

  // const clamp = (val: number, min: number, max: number) => {
  //   return val > max ? max : val < min ? min : val;
  // };

  // useFrame((state, delta, frame) => {
  //   if (!groupRef.current) return;
  //   const parallaxX = -mouseCoords[0] * 0.5;
  //   const parallaxY = -mouseCoords[1] * 0.3;
  //
  //   const newRotationY =
  //     groupRef.current.rotation.y +
  //     (parallaxX - groupRef.current.rotation.y) * delta;
  //   const newRotationX =
  //     groupRef.current.rotation.x +
  //     (parallaxY - groupRef.current.rotation.x) * delta;
  //
  //   groupRef.current.rotation.y = clamp(newRotationY, -0.25, 0.25);
  //   groupRef.current.rotation.x = clamp(newRotationX, -0.15, 0.15);
  // });

  // @ts-ignore
  // const { nodes, materials } = useGLTF("/models/Sydney-compressed.gltf");
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/test10.gltf");
  console.log(nodes, materials, animations);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Ferry1"
          position={[0, 0, 0]}
          rotation={[-3.116, 0.089, -0.012]}
          scale={[-0.755, -0.37, -3.351]}
        >
          <mesh
            name="Cube005"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005.geometry}
            material={materials.Green}
          />
          <mesh
            name="Cube005_1"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_1.geometry}
            material={materials.Yellow}
          />
          <mesh
            name="Cube005_2"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_2.geometry}
            material={materials.Glass}
          />
          <mesh
            name="Cube005_3"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_3.geometry}
            material={materials.Door}
          />
          <mesh
            name="Cube005_4"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_4.geometry}
            material={materials.Ramp}
          />
          <mesh
            name="Cube005_5"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_5.geometry}
            material={materials.Wood}
          />
          <mesh
            name="Cube005_6"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_6.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cube005_7"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_7.geometry}
            material={materials.Red}
          />
          <mesh
            name="Cube005_8"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_8.geometry}
            material={materials["Aircon Grey"]}
          />
          <mesh
            name="Cube005_9"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_9.geometry}
            material={materials["Aircon Grill"]}
          />
          <mesh
            name="Cube005_10"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_10.geometry}
            material={materials["Aircon faceplate"]}
          />
          <mesh
            name="Cube005_11"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube005_11.geometry}
            material={materials.Liferaft}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/models/sydney.gltf");
