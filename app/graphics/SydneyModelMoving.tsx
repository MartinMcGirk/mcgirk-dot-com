// @ts-nocheck

"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

export function SydneyModelMoving(props: any) {
  const { nodes: cityNodes, materials: cityMaterials } = useGLTF("/models/MovingCity/city.gltf");

  const {
    nodes: ferryNodes,
    materials: ferryMaterials,
    animations: ferryAnimations,
  } = useGLTF("/models/MovingCity/ferries.gltf");

  const {
    nodes: cloudNodes,
    materials: cloudMaterials,
    animations: cloudAnimations,
  } = useGLTF("/models/MovingCity/clouds.gltf");

  const groupRef = useRef<THREE.Group>(null!);
  const ferryGroup = useRef();
  const ferry3Group = useRef();
  const cloudGroup = useRef();

  const { actions } = useAnimations(ferryAnimations, ferryGroup);
  const { actions: f3actions } = useAnimations(ferryAnimations, ferry3Group);
  const { actions: cloudactions } = useAnimations(cloudAnimations, cloudGroup);

  useEffect(() => {
    if (actions?.F1Anim) actions.F1Anim.play();
    if (f3actions?.F3Anim) f3actions.F3Anim.play();
    if (cloudactions?.CloudsAnim) cloudactions.CloudsAnim.play();
  }, [actions, f3actions, cloudactions]);

  const materials = useMemo(() => {
    const clonedMaterials = {
      ...cityMaterials,
      ...ferryMaterials,
      ...cloudMaterials
    };

    Object.values(clonedMaterials).forEach(material => {
      if (material instanceof THREE.MeshStandardMaterial) {
        material.roughness = 1;
        material.needsUpdate = true;
      }
    });

    return clonedMaterials;
  }, [cityMaterials, ferryMaterials, cloudMaterials]);

  return (
    <group>
      <group {...props} dispose={null} ref={groupRef} position={[0, 0, 0]} rotation={[0, Math.PI / -2, 0]}>
        <mesh
          castShadow={true}
          receiveShadow={true}
          geometry={cityNodes.Water.geometry}
          material={materials["Material.001"]}
          frustumCulled={true}
        />
        <group name="Clouds" ref={cloudGroup}>
          <mesh
            name="Water003"
            receiveShadow={true}
            geometry={cloudNodes.Water003.geometry}
            material={materials["Material.001"]}
            frustumCulled={true}
          />
        </group>
        <group name="Ferry1" ref={ferryGroup}>
          <mesh
            name="Cube007"
            geometry={ferryNodes.Cube007.geometry}
            material={ferryMaterials.Green}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_1"
            geometry={ferryNodes.Cube007_1.geometry}
            material={ferryMaterials.Yellow}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_2"
            geometry={ferryNodes.Cube007_2.geometry}
            material={ferryMaterials.Glass}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_3"
            geometry={ferryNodes.Cube007_3.geometry}
            material={ferryMaterials.Door}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_4"
            geometry={ferryNodes.Cube007_4.geometry}
            material={ferryMaterials.Ramp}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_5"
            geometry={ferryNodes.Cube007_5.geometry}
            material={ferryMaterials.Wood}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_6"
            geometry={ferryNodes.Cube007_6.geometry}
            material={ferryMaterials.Black}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_7"
            geometry={ferryNodes.Cube007_7.geometry}
            material={ferryMaterials.Red}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_8"
            geometry={ferryNodes.Cube007_8.geometry}
            material={ferryMaterials["Aircon Grey"]}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_9"
            geometry={ferryNodes.Cube007_9.geometry}
            material={ferryMaterials["Aircon Grill"]}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_10"
            geometry={ferryNodes.Cube007_10.geometry}
            material={ferryMaterials["Aircon faceplate"]}
            frustumCulled={true}
          />
          <mesh
            name="Cube007_11"
            geometry={ferryNodes.Cube007_11.geometry}
            material={ferryMaterials.Liferaft}
            frustumCulled={true}
          />
        </group>
        <group name="Ferry3" ref={ferry3Group}>
          <mesh
            name="Cube008"
            geometry={ferryNodes.Cube008.geometry}
            material={ferryMaterials.Green}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_1"
            geometry={ferryNodes.Cube008_1.geometry}
            material={ferryMaterials.Yellow}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_2"
            geometry={ferryNodes.Cube008_2.geometry}
            material={ferryMaterials.Glass}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_3"
            geometry={ferryNodes.Cube008_3.geometry}
            material={ferryMaterials.Door}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_4"
            geometry={ferryNodes.Cube008_4.geometry}
            material={ferryMaterials.Ramp}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_5"
            geometry={ferryNodes.Cube008_5.geometry}
            material={ferryMaterials.Wood}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_6"
            geometry={ferryNodes.Cube008_6.geometry}
            material={ferryMaterials.Black}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_7"
            geometry={ferryNodes.Cube008_7.geometry}
            material={ferryMaterials.Red}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_8"
            geometry={ferryNodes.Cube008_8.geometry}
            material={ferryMaterials["Aircon Grey"]}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_9"
            geometry={ferryNodes.Cube008_9.geometry}
            material={ferryMaterials["Aircon Grill"]}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_10"
            geometry={ferryNodes.Cube008_10.geometry}
            material={ferryMaterials["Aircon faceplate"]}
            frustumCulled={true}
          />
          <mesh
            name="Cube008_11"
            geometry={ferryNodes.Cube008_11.geometry}
            material={ferryMaterials.Liferaft}
            frustumCulled={true}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/MovingCity/city.gltf");
useGLTF.preload("/models/MovingCity/ferries.gltf");
useGLTF.preload("/models/MovingCity/clouds.gltf");

useGLTF.clear();
