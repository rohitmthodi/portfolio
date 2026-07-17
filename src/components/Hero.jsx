import React, { useEffect, useState } from "react";
import Ferrofluid from "../backgrounds/Ferrofluid";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Ferrofluid
          dpr={isMobile ? 0.6 : 1.2}
          colors={["#FBBF24", "#D97706", "#3B1F00"]}
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
      <div className="z-10 flex flex-col h-screen justify-center items-center px-5 text-white">
        <p className="text-[clamp(2rem,12vw,8rem)] font-title font-extrabold text-center opacity-50">
          PO<span className="flicker">R</span>TFOLIO
        </p>
      </div>
    </section>
  );
};

export default Hero;
