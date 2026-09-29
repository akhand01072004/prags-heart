import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeartBeat() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1, 1.12, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-32 w-32 rounded-full bg-red-600/20 blur-3xl" />

      <Heart
        fill="currentColor"
        className="relative z-10 h-16 w-16 text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]"
      />
    </motion.div>
  );
}