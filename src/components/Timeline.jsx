import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2021",
    title: "The beginning of our story",
    description:
      "Some stories begin without us realizing how important they will eventually become. Ours was one of them.",
  },
  {
    year: "2023",
    title: "Finding our way back",
    description:
      "Life took us through different moments and different directions. But somehow, our story still wasn't finished.",
  },
  {
    year: "2024",
    title: "A new chapter",
    description:
      "More conversations, more understanding, and slowly, another chapter of our story began.",
  },
  {
    year: "2026",
    title: "Us. ❤️",
    description:
      "This is the chapter I'm grateful to be living right now. The chapter filled with conversations, memories, laughter, arguments, love and countless little moments that became ours.",
  },
  {
    year: "29.09.2026",
    title: "A little world I made for you",
    description:
      "It's World Heart Day today. Everyone is celebrating hearts, but I wanted to celebrate the one that means the most to me.",
  },
];

function TimelineItem({ item, index }) {
  const isRight = index % 2 !== 0;

  return (
    <div className="relative">

      {/* Desktop center line */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-500/40 to-transparent md:block" />

      {/* Mobile line */}
      <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent md:hidden" />

      <div className="relative grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-20">

        {/* Timeline content */}
        <motion.div
          initial={{
            opacity: 0,
            x: isRight ? 70 : -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`col-start-2 ${
            isRight ? "md:col-start-2" : "md:col-start-1"
          }`}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:bg-white/[0.05] md:p-9">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-600/10 blur-3xl transition duration-500 group-hover:bg-red-600/20" />

            {/* Year */}
            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-red-500">
                {item.year}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-medium leading-tight text-white md:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40 md:text-base">
                {item.description}
              </p>
            </div>

            {/* Bottom decoration */}
            <div className="mt-7 flex items-center gap-3">
              <div className="h-px w-12 bg-red-500/30" />

              <Heart
                size={13}
                className="text-red-500"
                fill="currentColor"
              />

              <div className="h-px w-12 bg-red-500/30" />
            </div>
          </div>
        </motion.div>

        {/* Timeline dot */}
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="absolute left-0 top-8 z-10 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/40 bg-[#080808] shadow-[0_0_25px_rgba(239,68,68,0.15)]">
            <Heart
              size={15}
              className="text-red-500"
              fill="currentColor"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#080808] px-6 py-32 md:py-40"
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-24 max-w-3xl text-center">

          {/* Small label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles
              size={14}
              className="text-red-500"
            />

            <p className="text-xs uppercase tracking-[0.5em] text-red-500">
              Our story
            </p>

            <Sparkles
              size={14}
              className="text-red-500"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h2
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
              delay: 0.15,
              duration: 0.8,
            }}
            className="mt-6 text-4xl font-light leading-tight text-white sm:text-6xl"
          >
            Some dates are just dates.
          </motion.h2>

          <motion.h3
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
              delay: 0.3,
              duration: 0.8,
            }}
            className="mt-2 text-4xl font-light text-red-500 sm:text-6xl"
          >
            Ours became memories.
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/40"
          >
            Looking back, I realize that our story isn't really
            about the dates. It's about everything that happened
            between them.
          </motion.p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="space-y-20 md:space-y-28">
          {timeline.map((item, index) => (
            <TimelineItem
              key={`${item.year}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* ================= ENDING ================= */}

        <motion.div
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
            duration: 1,
          }}
          className="mt-32 text-center"
        >
          {/* Heart */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/20 bg-red-500/5"
          >
            <Heart
              size={25}
              className="text-red-500"
              fill="currentColor"
            />
          </motion.div>

          <p className="mt-8 text-sm uppercase tracking-[0.4em] text-white/25">
            And the story isn't over
          </p>

          <p className="mt-5 text-2xl font-light text-white sm:text-4xl">
            We're still writing it.
          </p>

          <p className="mt-4 text-sm text-white/30">
            One memory at a time. ❤️
          </p>
        </motion.div>

      </div>
    </section>
  );
}