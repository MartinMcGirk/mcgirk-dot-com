'use client';

import React from "react";
import {Canvas} from "@react-three/fiber";
import {SydneyModel} from "@/app/graphics/SydneyModel";


const Lights = () => {
    return (
        <>
            <ambientLight
                intensity={1}
            />
            <pointLight
                intensity={1}
                shadow-bias={-0.001}
                position={[-5, 10, 20]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                castShadow={true} />
        </>
    );
}

export default function ThreeRoot() {
    return (
        <Canvas
            shadows={true}
            camera={{position: [0, 1.5, 10], rotation: [Math.PI * 0.1, 0, 0]}}
        >
            <Lights />
            <SydneyModel />
        </Canvas>
    );
}