"use client";

import React from "react";
import {motion, stagger} from "framer-motion";

export default function AnimatedPanel({children, index}: { children: React.ReactNode, index: number }) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0, transition: {delay: index * 0.1}}}
            exit={{opacity: 0, y: 20}}
        >
            {children}
        </motion.div>
    );
}