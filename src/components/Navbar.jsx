import React, { useState } from "react";
import { SiDailydotdev } from "react-icons/si";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/navbar";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex w-full max-w-7xl justify-between px-4">
        {/* Logo */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center px-3 py-2 text-4xl text-white rounded-xl border border-white/10 bg-white/10 backdrop-blur-[30px] shadow-[0_10px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <SiDailydotdev />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:flex items-center gap-2 px-3 py-2"
        >
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.id}
              href={link.path}
              onClick={() => setActive(link.id)}
              className={`relative px-5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:scale-110 hover:text-white outline-none ${
                active === link.id
                  ? "scale-110 text-white bg-white/10"
                  : "text-white/40"
              }`}
            >
              {link.title}
            </a>
          ))}
        </motion.nav>

        {/* Desktop Contact */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex items-center"
        >
          <button className="relative px-5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:scale-110 hover:text-white outline-none text-white/40 hover:bg-white/10">
            Contact
          </button>
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex items-center justify-center text-white text-3xl rounded-xl"
        >
          <HiOutlineMenuAlt3 />
        </motion.button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black outline-none"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-72 z-50 border-l border-white/10 bg-white/10 backdrop-blur-[30px] shadow-[-10px_0_60px_rgba(0,0,0,0.4)]"
            >
              <div className="flex justify-end p-5">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl"
                >
                  <HiOutlineX />
                </button>
              </div>

              <div className="flex flex-col px-6 mt-5 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.path}
                    onClick={() => {
                      setActive(link.id);
                      setMenuOpen(false);
                    }}
                    className={`px-5 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      active === link.id
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.title}
                  </a>
                ))}

                <div className="mx-5 my-2 border-t border-white/10" />

                <button className="mt-2 px-5 py-3 rounded-lg text-base font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 text-left">
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
