"use client";

import React, {useEffect} from 'react';
import Image from "next/image";

const MovingPicture = () => {
    const [mouseCoords, setMouseCoords] = React.useState([0, 0]);

    useEffect(() => {
        if (window) {
            window.addEventListener('mousemove', (e) => {
                setMouseCoords([
                    e.clientX / window.innerWidth - 0.5,
                    e.clientY / window.innerHeight - 0.5
                ]);
            });}
    }, []);


    return (
        <div className="rounded-full shadow-xl border-4 border-sky-600 overflow-hidden w-[300px] h-[300px] relative">
            <Image
                src="/images/me-bg.jpg"
                priority={true}
                alt="Martin McGirk"
                width={720}
                height={512}
                className={"max-w-screen-xl absolute -top-[30px] -left-[180px]"}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: "0.15s",
                    transform: `translateY(${mouseCoords[1] * -10}px) translateX(${mouseCoords[0] * -10}px)`,
                }}
            />
            <Image
                src="/images/me-fg.png"
                priority={true}
                alt="Martin McGirk"
                width={720}
                height={512}
                className={"max-w-screen-xl absolute -top-[40px] -left-[180px]"}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: "0.15s",
                    transform: `translateY(${mouseCoords[1] * -2}px) translateX(${mouseCoords[0] * -2}px)`,
                }}
            />
        </div>
    );
};

export default MovingPicture;
