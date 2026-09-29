import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const promises = [
  {
    number: "01",
    title: "I promise to listen.",
    text: "Even when the conversation isn't easy, I want to understand what you're feeling instead of simply trying to win an argument.",
  },
  {
    number: "02",
    title: "I promise to choose us.",
    text: "Not only on the easy days. I want to keep choosing our relationship through the ordinary days, the difficult days and everything in between.",
  },
  {
    number: "03",
    title: "I promise to respect you.",
    text: "Your feelings, your boundaries, your dreams, your individuality and the person you are.",
  },
  {
    number: "04",
    title: "I promise to keep making memories.",
    text: "I don't want this website to contain our best memories. I want it to become a tiny beginning of the memories we still haven't made.",
  },
  {
    number: "05",
    title: "I promise to communicate.",
    text: "When something bothers me, I want to talk to you instead of letting silence, assumptions or overthinking create distance between us.",
  },
  {
    number: "06",
    title: "I promise to keep growing.",
    text: "For myself, for you and for whatever future we build together. I know love isn't just a feeling — it's also something we take care of.",
  },
];

function PromiseCard({ promise, index }) {
  return (
    <motion.div
      className="relative"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
    >
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:border-red-500/20 hover:bg-white/[0.04] sm:p-9">
        {/* Number */}
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xs tracking-[0.35em] text-red-400/70">
            PROMISE {promise.number}
          </span>

          <Heart
            size={17}
            className="text-white/20 transition duration-500 group-hover:fill-red-500 group-hover:text-red-500"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-light text-white sm:text-3xl">
          {promise.title}
        </h3>

        {/* Text */}
        <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
          {promise.text}
        </p>

        {/* Bottom accent */}
        <div className="mt-8 h-px w-0 bg-red-500/50 transition-all duration-700 group-hover:w-16" />
      </div>
    </motion.div>
  );
}

export default function Promises() {
  return (
    <section
      id="promises"
      className="relative overflow-hidden bg-[#050505] px-5 py-32 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Heart
            size={20}
            className="mx-auto mb-6 fill-red-500 text-red-500"
          />

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-400">
            A few promises
          </p>

          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Things I want
            <br />
            <span className="text-white/35">
              to promise you.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            Not promises about being perfect.
            <br />
            Just promises about trying.
          </p>
        </motion.div>

        {/* Promise grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {promises.map((promise, index) => (
            <PromiseCard
              key={promise.number}
              promise={promise}
              index={index}
            />
          ))}
        </div>

        {/* Final promise */}
        <motion.div
          className="mx-auto mt-24 max-w-3xl text-center"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className="mx-auto mb-8 h-px w-16 bg-red-500/40" />

          <p className="font-serif text-2xl font-light leading-relaxed text-white/80 sm:text-3xl md:text-4xl">
            I can't promise that every day
            <br />
            will be perfect.
          </p>

          <p className="mt-5 font-serif text-2xl font-light leading-relaxed text-red-400 sm:text-3xl md:text-4xl">
            But I can promise that I'll keep trying
            <br className="hidden sm:block" />
            to make our days worth remembering.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />

            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
              For you, Prags
            </span>

            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}