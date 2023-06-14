"use client";

import React, {useEffect, useRef} from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export function SydneyModel(props: any) {
    const groupRef = useRef<THREE.Group>(null!);

    const [mouseCoords, setMouseCoords] = React.useState([0, 0]);

    useEffect(() => {
        if (window) {
            window.onmousemove = (e) => {
                setMouseCoords([
                    e.clientX / window.innerWidth - 0.5,
                    e.clientY / window.innerHeight - 0.5
                ]);
            }
        }
    }, []);

    const clamp = (val: number, min: number, max: number) => {
        return val > max ? max : val < min ? min : val;
    }

    useFrame((state, delta, frame) => {
        if (!groupRef.current) return;
        const parallaxX = -mouseCoords[0] * 0.5;
        const parallaxY = mouseCoords[1] * 0.3;

        const newRotationY = groupRef.current.rotation.y + (parallaxX - groupRef.current.rotation.y) * delta;
        const newRotationX = groupRef.current.rotation.x + (parallaxY - groupRef.current.rotation.x) * delta;

        groupRef.current.rotation.y = clamp(newRotationY, -0.25, 0.25)
        groupRef.current.rotation.x = clamp(newRotationX, -0.15, 0.15);
    });

    // @ts-ignore
    const { nodes, materials } = useGLTF("/models/sydney.gltf");
    return (
        <group {...props} dispose={null} ref={groupRef}>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Water.geometry}
                material={materials["Material.001"]}
                position={[0, 0, 0]}
                rotation={[0, Math.PI * 1.4, 0]}
                scale={10}
            />
        </group>
    );
}

// useGLTF.preload("/models/sydney.gltf");
