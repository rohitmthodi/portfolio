import React from "react";
import rohit from "../assets/rohit.png";

const Header = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-">
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Image */}
        <div className="relative">
          <img
            src={rohit}
            alt="Rohit"
            className="relative h-148 object-contain z-50 opacity-35"
          />
        </div>

        <p className="absolute right-7 top-[35%] text-xs font-medium uppercase tracking-[4px] text-gray-400 [writing-mode:vertical-rl]">
          Calicut, Kerala
        </p>

        {/* Name */}
        <div className="absolute text-center mt-100 sm:mt-120 md:mt-140 z-50">
          <h1 className="text-center text-5xl sm:text-7xl md:text-7xl font-semibold tracking-[8px] md:tracking-[20px]">
            <span className="uppercase font-title text-cyan-200">
              I'm ROHIT
            </span>
          </h1>

          <p className="mt-2 text-center text-gray-400 text-2xl uppercase font-medium md:tracking-[3px]">
            Web Developer & UI/UX Designer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;