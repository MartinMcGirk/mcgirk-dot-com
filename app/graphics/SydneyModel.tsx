"use client";

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

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
    const newRotationY =
      groupRef.current.rotation.y +
      (parallaxX - groupRef.current.rotation.y) * delta;
    groupRef.current.rotation.y = clamp(newRotationY, -0.25, 0.25);
  });

  // @ts-ignore
  const { nodes, materials } = useGLTF("/models/test14.gltf");

  const ferryGroup = useRef();
  const ferry3Group = useRef();

  const {
    nodes: ferryNodes,
    materials: ferryMaterials,
    animations: ferryAnimations,
  } = useGLTF("/models/ferries2.gltf");
  const { actions } = useAnimations(ferryAnimations, ferryGroup);
  const { actions: f3actions } = useAnimations(ferryAnimations, ferry3Group);
  useEffect(() => {
    actions?.F1Move.play();
    f3actions?.F3Move.play();
  }, []);

  return (
    <group>
      <group {...props} dispose={null} ref={groupRef} position={[0, 0, 0]}>
        <mesh
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.Water.geometry}
          material={materials["Material.001"]}
        />
        <group name="Ferry1" ref={ferryGroup}>
          <mesh
            name="Cube007"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007.geometry}
            material={ferryMaterials.Green}
          />
          <mesh
            name="Cube007_1"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_1.geometry}
            material={ferryMaterials.Yellow}
          />
          <mesh
            name="Cube007_2"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_2.geometry}
            material={ferryMaterials.Glass}
          />
          <mesh
            name="Cube007_3"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_3.geometry}
            material={ferryMaterials.Door}
          />
          <mesh
            name="Cube007_4"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_4.geometry}
            material={ferryMaterials.Ramp}
          />
          <mesh
            name="Cube007_5"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_5.geometry}
            material={ferryMaterials.Wood}
          />
          <mesh
            name="Cube007_6"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_6.geometry}
            material={ferryMaterials.Black}
          />
          <mesh
            name="Cube007_7"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_7.geometry}
            material={ferryMaterials.Red}
          />
          <mesh
            name="Cube007_8"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_8.geometry}
            material={ferryMaterials["Aircon Grey"]}
          />
          <mesh
            name="Cube007_9"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_9.geometry}
            material={ferryMaterials["Aircon Grill"]}
          />
          <mesh
            name="Cube007_10"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_10.geometry}
            material={ferryMaterials["Aircon faceplate"]}
          />
          <mesh
            name="Cube007_11"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube007_11.geometry}
            material={ferryMaterials.Liferaft}
          />
        </group>
        <group name="Ferry3" ref={ferry3Group}>
          <mesh
            name="Cube008"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008.geometry}
            material={ferryMaterials.Green}
          />
          <mesh
            name="Cube008_1"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_1.geometry}
            material={ferryMaterials.Yellow}
          />
          <mesh
            name="Cube008_2"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_2.geometry}
            material={ferryMaterials.Glass}
          />
          <mesh
            name="Cube008_3"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_3.geometry}
            material={ferryMaterials.Door}
          />
          <mesh
            name="Cube008_4"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_4.geometry}
            material={ferryMaterials.Ramp}
          />
          <mesh
            name="Cube008_5"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_5.geometry}
            material={ferryMaterials.Wood}
          />
          <mesh
            name="Cube008_6"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_6.geometry}
            material={ferryMaterials.Black}
          />
          <mesh
            name="Cube008_7"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_7.geometry}
            material={ferryMaterials.Red}
          />
          <mesh
            name="Cube008_8"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_8.geometry}
            material={ferryMaterials["Aircon Grey"]}
          />
          <mesh
            name="Cube008_9"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_9.geometry}
            material={ferryMaterials["Aircon Grill"]}
          />
          <mesh
            name="Cube008_10"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_10.geometry}
            material={ferryMaterials["Aircon faceplate"]}
          />
          <mesh
            name="Cube008_11"
            castShadow={true}
            receiveShadow={true}
            geometry={ferryNodes.Cube008_11.geometry}
            material={ferryMaterials.Liferaft}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/models/sydney.gltf");
