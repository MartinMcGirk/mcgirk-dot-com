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
        <div className="rounded-full grow-0 shrink-0 shadow-xl border-4 border-sky-600 overflow-hidden w-[150px] h-[150px] md:w-[300px] md:h-[300px] relative">
            <Image
                src="/images/martin-mcgirk.jpg"
                priority={true}
                alt="Martin McGirk"
                width={300}
                height={300}
                className="rounded-full md:hidden"
            />
            <Image
                src="/images/me-bg.jpg"
                priority={true}
                alt="Martin McGirk"
                width={720}
                height={512}
                className={"hidden md:block max-w-screen-xl absolute -top-[30px] -left-[180px]"}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: "0.15s",
                    transform: `translateY(${mouseCoords[1] * -20}px) translateX(${mouseCoords[0] * -20}px)`,
                }}
            />
            <Image
                src="/images/me-fg.png"
                priority={true}
                alt="Martin McGirk"
                width={720}
                height={512}
                className={"hidden md:block max-w-screen-xl absolute -top-[40px] -left-[180px]"}
                style={{
                    transitionTimingFunction: "ease",
                    transitionDuration: "0.15s",
                    transform: `translateY(${mouseCoords[1] * -7}px) translateX(${mouseCoords[0] * -7}px)`,
                }}
            />
        </div>
    );
};

export default MovingPicture;
