"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconCircleChevronsDown } from "@tabler/icons-react";
import Link from "next/link";

const ScrollDown = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={"#about"}
      className="absolute bottom-32 lg:bottom-0 w-full flex flex-row justify-center cursor-pointer"
      onClick={handleScroll}
      style={{ zIndex: 110 }}
    >
      <div className={"cursor-pointer py-8"}>
        <motion.div
          className="cursor-pointer rounded-full p-1"
          animate={{
            scale: [1, 2, 1],
            // rotate: [0, 0, 270, 270, 0],
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1, 1.5],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {/*Scroll Down*/}
          <IconCircleChevronsDown
            className="cursor-pointer inline-block text-white"
            size={42}
          />
        </motion.div>
      </div>
    </Link>
  );
};

export default ScrollDown;
