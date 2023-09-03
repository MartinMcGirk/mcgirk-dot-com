"use client";

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { loadWebpackHook } from "next/dist/server/config-utils";

export function SydneyModel(props: any) {
  const groupRef = useRef<THREE.Group>(null!);

  const [mouseCoords, setMouseCoords] = React.useState([0, 0]);

  useEffect(() => {
    if (window) {
      window.addEventListener("mousemove", (e) => {
        setMouseCoords([
          e.clientX / window.innerWidth - 0.5,
          e.clientY / window.innerHeight - 0.5,
        ]);
      });
    }
  }, []);

  const clamp = (val: number, min: number, max: number) => {
    return val > max ? max : val < min ? min : val;
  };

  useFrame((state, delta, frame) => {
    if (!groupRef.current) return;
    const parallaxX = -mouseCoords[0] * 0.5;
    const parallaxY = -mouseCoords[1] * 0.3;

    const newRotationY =
      groupRef.current.rotation.y +
      (parallaxX - groupRef.current.rotation.y) * delta;
    const newRotationX =
      groupRef.current.rotation.x +
      (parallaxY - groupRef.current.rotation.x) * delta;

    groupRef.current.rotation.y = clamp(newRotationY, -0.25, 0.25);
    // groupRef.current.rotation.z = clamp(newRotationX, -0.15, 0.15);
  });

  // @ts-ignore
  // const { nodes, materials } = useGLTF("/models/Sydney-compressed.gltf");
  const { nodes, materials } = useGLTF("/models/test14.gltf");
  // console.log(nodes);

  const ferryGroup = useRef();

  const {
    nodes: ferryNodes,
    materials: ferryMaterials,
    animations: ferryAnimations,
  } = useGLTF("/models/test13.gltf");
  // console.log(ferryNodes, ferryMaterials, ferryAnimations);
  const { actions } = useAnimations(ferryAnimations, ferryGroup);
  console.log(actions);
  useEffect(() => {
    actions?.FerryAction1.play();
  }, []);

  // console.log(actions["Action.002"]);

  return (
    <group>
      <group
        {...props}
        dispose={null}
        ref={groupRef}
        position={[0, 0, 0]}
        // scale={[10, 10, 10]}
      >
        <mesh
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.Water.geometry}
          material={materials["Material.001"]}
          // rotation={[0, Math.PI * 1.4, 0]}
          // scale={10}
        />
        <group
          name="Ferry1"
          ref={ferryGroup}
          // position={[0.12, -0.53, 0.826]}
          // rotation={[0, -0.006, 0]}
        >
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007.geometry}
            material={ferryMaterials.Green}
          />
          <mesh
            name="Cube007_1"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_1.geometry}
            material={ferryMaterials.Yellow}
          />
          <mesh
            name="Cube007_2"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_2.geometry}
            material={ferryMaterials.Glass}
          />
          <mesh
            name="Cube007_3"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_3.geometry}
            material={ferryMaterials.Door}
          />
          <mesh
            name="Cube007_4"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_4.geometry}
            material={ferryMaterials.Ramp}
          />
          <mesh
            name="Cube007_5"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_5.geometry}
            material={ferryMaterials.Wood}
          />
          <mesh
            name="Cube007_6"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_6.geometry}
            material={ferryMaterials.Black}
          />
          <mesh
            name="Cube007_7"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_7.geometry}
            material={ferryMaterials.Red}
          />
          <mesh
            name="Cube007_8"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_8.geometry}
            material={ferryMaterials["Aircon Grey"]}
          />
          <mesh
            name="Cube007_9"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_9.geometry}
            material={ferryMaterials["Aircon Grill"]}
          />
          <mesh
            name="Cube007_10"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_10.geometry}
            material={ferryMaterials["Aircon faceplate"]}
          />
          <mesh
            name="Cube007_11"
            castShadow
            receiveShadow
            geometry={ferryNodes.Cube007_11.geometry}
            material={ferryMaterials.Liferaft}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/models/sydney.gltf");
