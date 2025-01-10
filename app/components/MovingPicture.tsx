"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const MovingPicture = () => {
  const [mouseCoords, setMouseCoords] = React.useState([0, 0]);
  const currentCoords = useRef([0, 0]);
  const animationFrameId = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouseCoords([
      e.clientX / window.innerWidth - 0.5,
      e.clientY / window.innerHeight - 0.5,
    ]);
  }, []);

  const updatePosition = useCallback(() => {
    currentCoords.current[0] += (mouseCoords[0] - currentCoords.current[0]) * 0.1;
    currentCoords.current[1] += (mouseCoords[1] - currentCoords.current[1]) * 0.1;

    if (Math.abs(mouseCoords[0] - currentCoords.current[0]) > 0.001 ||
      Math.abs(mouseCoords[1] - currentCoords.current[1]) > 0.001) {
      animationFrameId.current = requestAnimationFrame(updatePosition);
    }
  }, [mouseCoords]);

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(updatePosition);
  }, [mouseCoords, updatePosition]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Remove useMemo from styles since they need to update continuously
  const bgImageStyle = {
    transitionTimingFunction: "ease",
    transitionDuration: "0.15s",
    transform: `translateY(${currentCoords.current[1] * -20}px) translateX(${currentCoords.current[0] * -20
      }px)`,
  };

  const fgImageStyle = {
    transitionTimingFunction: "ease",
    transitionDuration: "0.15s",
    transform: `translateY(${currentCoords.current[1] * -7}px) translateX(${currentCoords.current[0] * -7
      }px)`,
  };

  // These class strings can stay memoized as constants since they never change
  const bgImageClass = "hidden md:block max-w-screen-xl absolute -top-[30px] -left-[180px]";
  const fgImageClass = "hidden md:block max-w-screen-xl absolute -top-[40px] -left-[180px]";

  return (
    <div className="rounded-full grow-0 shrink-0 shadow-xl border-4 border-sky-600 overflow-hidden w-[100px] h-[100px] md:w-[300px] md:h-[300px] relative">
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
        className={bgImageClass}
        style={bgImageStyle}
        loading="eager"
      />
      <Image
        src="/images/me-fg.png"
        priority={true}
        alt="Martin McGirk"
        width={720}
        height={512}
        className={fgImageClass}
        style={fgImageStyle}
        loading="eager"
      />
    </div>
  );
};

export default React.memo(MovingPicture);
