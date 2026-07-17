import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  // DETECT DESKTOP/MOBILE
  useEffect(() => {
    const resize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // CURSOR MOVEMENTS & INTERACTIONS
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseDown = () => setClick(true);
    const handleMouseUp = () => setClick(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor]",
    );

    const listeners = [];

    interactiveElements.forEach((el) => {
      const enter = () => setHover(true);
      const leave = () => setHover(false);

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      listeners.push({ el, enter, leave });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  // HIDE ON MOBILE DEVICES
  if (!isDesktop) return null;

  return (
    <>
      {/* OUTER RING */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: click ? 0.8 : hover ? 2.2 : 1,
          opacity: hover ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
          mass: 0.5,
        }}
        className="fixed top-0 left-0 z-9999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4F46E5] bg-red-500/10 pointer-events-none mix-blend-difference shadow-[0_0_10px_rgba(239,68,68,0.7),0_0_20px_rgba(239,68,68,0.4)]"
      />

      {/* INNER DOT */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: click ? 0.7 : hover ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 40,
        }}
        className="fixed top-0 left-0 z-9999 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 pointer-events-none shadow-[0_0_20px_rgba(251,191,36,0.9)]"
      />
    </>
  );
};

export default CustomCursor;