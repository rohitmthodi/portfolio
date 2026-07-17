import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl"
      >
        <div className="flex items-center justify-between px-5 md:px-8 py-2 md:bg-transparent md:backdrop-blur-none ms:border-0 md:shadow-none md:rounded-none">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-subTitle">
            {navLinks.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
                className="relative group cursor-pointer"
              >
                <p className="text-xs font-medium text-white transition-all duration-300 group-hover:text-[#00E5FF]">
                  {item.title}
                </p>

                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
                scale: isOpen ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <HiXMark size={28} /> : <CiMenuFries size={28} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] text-xs font-subTitle rounded-2xl bg-black/30 backdrop-blur-lg border border-cyan-400/10 shadow-[0_0_25px_rgba(0,229,255,0.08)] overflow-hidden z-40 md:hidden"
          >
            {navLinks.map((item, index) => (
              <motion.p
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer border-b border-cyan-400/10 px-6 py-4 text-white  transition-all duration-300 hover:bg-cyan-400/10 hover:text-[#00E5FF]"
              >
                {item.title}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
