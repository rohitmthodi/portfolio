import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        onFinish && onFinish();
      }, 800);
    }, 2600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <motion.svg
            viewBox="0 0 2000 2000"
            className="w-56 md:w-72"
            initial="hidden"
            animate="visible"
          >
            {/* R */}

            <motion.path
              d="M638 601 L638 640 L930 641 L962 643 L995 650 L1033 666 L1053 680 L1073 700 L1085 717 L1096 739 L1108 785 L1110 836 L1106 869 L1099 895 L1087 921 L1069 946 L1035 976 L1021 985 L998 995 L980 1008 L957 1035 L955 1048 L961 1055 L971 1061 L989 1081 L1073 1218 L1114 1280 L1147 1323 L1173 1349 L1202 1369 L1248 1387 L1294 1395 L1356 1398 L1361 1366 L1335 1357 L1302 1337 L1265 1302 L1243 1276 L1173 1180 L1066 1011 L1115 985 L1155 955 L1172 938 L1193 910 L1205 888 L1214 864 L1220 839 L1223 805 L1219 759 L1206 717 L1195 696 L1177 672 L1153 650 L1121 630 L1082 615 L1034 605 L987 601 Z"
              stroke="#ffffff"
              strokeWidth="8"
              fill="transparent"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
                fill: "#ffffff",
              }}
              transition={{
                pathLength: {
                  duration: 1.8,
                  ease: "easeInOut",
                },
                fill: {
                  delay: 1.5,
                  duration: 0.5,
                },
              }}
            />

            {/* Dot */}

            <motion.path
              d="M850 962 L828 970 L813 984 L804 1002 L802 1014 L803 1028 L810 1046 L827 1064 L846 1072 L864 1073 L887 1065 L901 1053 L912 1031 L913 1009 L906 989 L889 971 L871 963 Z"
              stroke="#ffffff"
              strokeWidth="8"
              fill="transparent"
              initial={{
                pathLength: 0,
                scale: 0,
                transformOrigin: "center",
              }}
              animate={{
                pathLength: 1,
                scale: 1,
                fill: "#ffffff",
              }}
              transition={{
                delay: 1.2,
                pathLength: {
                  duration: 0.6,
                },
                scale: {
                  duration: 0.4,
                },
                fill: {
                  delay: 1.7,
                  duration: 0.4,
                },
              }}
            />

            {/* Glow */}

            <motion.path
              d="M638 601 L638 640 L930 641 L962 643 L995 650 L1033 666 L1053 680 L1073 700 L1085 717 L1096 739 L1108 785 L1110 836 L1106 869 L1099 895 L1087 921 L1069 946 L1035 976 L1021 985 L998 995 L980 1008 L957 1035 L955 1048 L961 1055 L971 1061 L989 1081 L1073 1218 L1114 1280 L1147 1323 L1173 1349 L1202 1369 L1248 1387 L1294 1395 L1356 1398 L1361 1366 L1335 1357 L1302 1337 L1265 1302 L1243 1276 L1173 1180 L1066 1011 L1115 985 L1155 955 L1172 938 L1193 910 L1205 888 L1214 864 L1220 839 L1223 805 L1219 759 L1206 717 L1195 696 L1177 672 L1153 650 L1121 630 L1082 615 L1034 605 L987 601 Z"
              fill="#dc2626"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.18, 0],
              }}
              transition={{
                delay: 1.8,
                duration: 0.9,
              }}
              style={{
                filter: "blur(25px)",
              }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;