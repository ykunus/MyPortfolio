"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const ScrollAnimationWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, 
    [0, 0.3, 0.7, 1],  // Input range
    [0, 1, 1, 0]       // Output range
  );
  
  const scale = useTransform(scrollYProgress, 
    [0, 0.3, 0.7, 1],  // Input range
    [0.6, 1, 1, 0.6]   // Output range
  );
  
  const y = useTransform(scrollYProgress, 
    [0, 0.3, 0.7, 1],  // Input range
    [50, 0, 0, 50]     // Output range
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
        margin: "100px 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      {children}
    </motion.div>
  );
}; 