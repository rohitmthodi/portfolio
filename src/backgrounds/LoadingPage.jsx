// import { motion } from "framer-motion";

// const LoadingPage = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{
//         opacity: 0,
//         scale: 1.08,
//         filter: "blur(20px)",
//       }}
//       transition={{
//         duration: 0.8,
//         ease: "easeInOut",
//       }}
//       className="fixed inset-0 z-99999 flex items-center justify-center overflow-hidden bg-black"
//     >
//       {/* Background Glow */}
//       <motion.div
//         animate={{
//           scale: [1, 1.6, 1],
//           opacity: [0.2, 0.5, 0.2],
//         }}
//         transition={{
//           duration: 2.5,
//           repeat: Infinity,
//         }}
//         className="absolute h-96 w-96 rounded-full bg-violet-700 blur-[160px]"
//       />

//       {/* Logo */}
//       <motion.img
//         src="/logo.png"
//         alt="Logo"
//         initial={{
//           scale: 0,
//           rotate: -25,
//           opacity: 0,
//           filter: "blur(20px)",
//         }}
//         animate={{
//           scale: 1,
//           rotate: 0,
//           opacity: 1,
//           filter: "blur(0px)",
//         }}
//         transition={{
//           duration: 1,
//           type: "spring",
//           stiffness: 120,
//         }}
//         className="relative z-20 h-28 w-28"
//       />

//       {/* Loading Line */}
//       <motion.div
//         className="absolute bottom-24 h-0.75 w-56 overflow-hidden rounded-full bg-white/10"
//       >
//         <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="h-full w-1/2 bg-violet-500"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default LoadingPage;