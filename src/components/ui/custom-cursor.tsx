"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <>
      {/* outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 20 : 36,
            height: clicking ? 20 : 36,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-full border border-slate-400/50 dark:border-slate-500/50"
        />
      </motion.div>

      {/* inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 6 : 5,
            height: clicking ? 6 : 5,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
          className="rounded-full bg-slate-600 dark:bg-slate-300"
        />
      </motion.div>
    </>
  );
}
