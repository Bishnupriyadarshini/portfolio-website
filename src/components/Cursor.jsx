import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      {/* OUTER */}
      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className="
          fixed
          top-0
          left-0
          w-10
          h-10
          rounded-full
          border
          border-white/40
          pointer-events-none
          z-[9999]
          mix-blend-difference
        "
      />

      {/* INNER */}
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="
          fixed
          top-0
          left-0
          w-2
          h-2
          bg-white
          rounded-full
          pointer-events-none
          z-[9999]
        "
      />
    </>
  );
}