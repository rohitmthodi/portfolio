import { useState } from "react";
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
            alt="Rohit Portfolio Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-subTitle">
            {navLinks.map((item) => (
              <motion.a
                key={item.title}
                href={item.path}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
                className="relative group cursor-pointer tracking-wider no-underline focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded px-1"
              >
                <span className="text-xs font-bold text-white transition-all duration-300 group-hover:text-[#c26118]">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded p-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
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
              <motion.a
                key={item.title}
                href={item.path}
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
                className="block cursor-pointer border-b border-cyan-400/10 px-6 py-4 text-white no-underline transition-all duration-300 hover:bg-cyan-400/10 hover:text-[#8e2c2c] focus:outline-none focus:bg-cyan-400/10 focus:text-[#8e2c2c]"
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
