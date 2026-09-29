import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <section
      id="story"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-6"
    >
      <div className="max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <Heart className="h-10 w-10 text-red-500" fill="currentColor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-light leading-relaxed sm:text-5xl"
        >
          Maybe our story wasn't always
          <span className="text-red-500"> perfect.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/40"
        >
          But every beautiful, complicated, silly,
          emotional and unforgettable moment brought us
          somewhere I wouldn't trade for anything.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-sm uppercase tracking-[0.4em] text-white/30"
        >
          Our story begins here
        </motion.p>

      </div>
    </section>
  );
}