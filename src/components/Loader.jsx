import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            bg-[#0C0C0C]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center gap-8">
            
            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                hero-heading
                uppercase
                font-black
                tracking-tight
                leading-none
              "
              style={{
                fontSize: "clamp(3rem, 10vw, 120px)",
              }}
            >
              Bishnu
            </motion.h1>

            {/* LOADING BAR */}
            <div className="w-[220px] h-[2px] bg-white/10 overflow-hidden rounded-full">
              
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  w-1/2
                  h-full
                  bg-white
                "
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}