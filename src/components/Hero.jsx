import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeartBeat from "./HeartBeat";

export default function Hero() {
  const scrollToStory = () => {
    document
      .getElementById("story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      {/* Small floating particles */}
      <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-red-400 shadow-[0_0_15px_#ef4444]" />
      <div className="absolute right-[20%] top-[30%] h-1 w-1 rounded-full bg-red-400 shadow-[0_0_15px_#ef4444]" />
      <div className="absolute bottom-[25%] left-[25%] h-1 w-1 rounded-full bg-red-400 shadow-[0_0_15px_#ef4444]" />
      <div className="absolute bottom-[30%] right-[15%] h-1 w-1 rounded-full bg-red-400 shadow-[0_0_15px_#ef4444]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center">

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-xs uppercase tracking-[0.5em] text-white/40"
        >
          29 September 2026
        </motion.p>

        {/* Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-10"
        >
          <HeartBeat />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl font-light leading-tight sm:text-6xl"
        >
          Everyone is talking about
          <span className="block text-red-500">the heart today.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 max-w-xl text-base leading-8 text-white/50 sm:text-lg"
        >
          But there is only one heart I really care about.
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-8 text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          Prags
          <span className="text-red-500"> ❤️</span>
        </motion.h2>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          onClick={scrollToStory}
          className="group mt-12 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm text-white/70 backdrop-blur-md transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-white"
        >
          Come, let me show you why
          <ChevronDown
            size={16}
            className="transition-transform group-hover:translate-y-1"
          />
        </motion.button>
      </div>
    </section>
  );
}