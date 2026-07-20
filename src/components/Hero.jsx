import { useEffect, useState } from "react";
import Ferrofluid from "../backgrounds/Ferrofluid";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(max-width: 767px)").matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const listener = (e) => {
      setIsMobile(e.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Ferrofluid
          dpr={isMobile ? 0.6 : 1.2}
          colors={["#7F1D1D", "#B91C1C", "#F87171"]}
          speed={isMobile ? 0.15 : 0.25}
          scale={isMobile ? 3 : 2.5}
          turbulence={isMobile ? 0.15 : 0.4}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={isMobile ? 1.6 : 2.5}
          shimmer={isMobile ? 0.2 : 1.5}
          glow={isMobile ? 0.6 : 2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={!isMobile}
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-20 flex h-screen items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-7xl px-6"
        >
          {/* Intro */}
          <motion.div
            variants={itemVariants}
            className="mb-1 flex items-center gap-4"
          >
            <p className="z-20 font-secondary font-bold text-xl absolute mt-4 md:mt-5 lg:mt-7 text-[#c26118] md:text-3xl">
              Hello, I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-title font-medium leading-[0.85]"
            style={{
              fontSize: "clamp(4rem,10vw,8rem)",
              textShadow: "0 0 20px rgba(255,255,255,.15)",
            }}
          >
            <span className="block text-white">ROHIT</span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            variants={itemVariants}
            className="mt-2 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-gray-400 md:text-lg"
          >
            <span className="tracking-wider">MERN Stack Developer</span>
            <span className="text-[#B91C1C]">•</span>
            <span className="tracking-wider">React Specialist</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-base leading-8 text-gray-400 md:text-xl"
          >
            I build modern, responsive and scalable web applications using
            React, Node.js, Express and MongoDB while creating smooth,
            interactive user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <a
              href="/Rohit_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-white/5 px-6 py-2 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:bg-black/60 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]"
            >
              <Download
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />

              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>
        <p className="hidden lg:flex text-xs tracking-widest uppercase text-white rotate-90 absolute font-location flicker neonGlow right-0">Calicut, Kerala</p>
      </div>
    </section>
  );
};

export default Hero;
