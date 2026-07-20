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
    const media = window.matchMedia("(min-width: 768px)");
    const listener = (e) => {
      setIsDesktop(e.matches);
    };
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
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

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest("a, button, input, textarea, [data-cursor]")) {
        setHover(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target && e.target.closest("a, button, input, textarea, [data-cursor]")) {
        const relatedTarget = e.relatedTarget;
        if (!relatedTarget || !relatedTarget.closest("a, button, input, textarea, [data-cursor]")) {
          setHover(false);
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
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
          scale: click ? 0.8 : hover ? 1.5 : 1,
          opacity: hover ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
          mass: 0.5,
        }}
        className="fixed top-0 left-0 z-9999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B91C1C] bg-[#ff0c0c1b] pointer-events-none mix-blend-difference shadow-[0_0_10px_rgba(239,68,68,0.7),0_0_20px_rgba(239,68,68,0.4)]"
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
        className="fixed top-0 left-0 z-9999 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B91C1C] pointer-events-none shadow-[0_0_20px_rgba(251,191,36,0.9)]"
      />
    </>
  );
};

export default CustomCursor;