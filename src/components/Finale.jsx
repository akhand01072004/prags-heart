import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Finale() {
  const [opened, setOpened] = useState(false);

  // Small heartbeat effect
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat(true);

      setTimeout(() => {
        setBeat(false);
      }, 300);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="finale"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303] px-6 py-24"
    >
      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Red glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px] sm:h-[500px] sm:w-[500px]"
          animate={{
            scale: beat ? 1.15 : 1,
            opacity: beat ? 0.35 : 0.2,
          }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* Tiny stars */}
        <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute left-[75%] top-[18%] h-1 w-1 rounded-full bg-white/20" />
        <div className="absolute left-[25%] top-[70%] h-1 w-1 rounded-full bg-white/20" />
        <div className="absolute left-[80%] top-[75%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute left-[50%] top-[10%] h-1 w-1 rounded-full bg-red-400/40" />
      </div>

      {/* =================================
          CONTENT
      ================================= */}

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Heart */}
        <motion.div
          className="mb-12"
          animate={{
            scale: beat ? [1, 1.15, 0.98, 1] : 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Heart
            size={48}
            strokeWidth={1}
            className="mx-auto fill-red-500/20 text-red-500 sm:h-14 sm:w-14"
          />
        </motion.div>

        {/* Small text */}
        <motion.p
          className="mb-6 text-xs uppercase tracking-[0.5em] text-red-400/80"
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
        >
          And finally...
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="font-serif text-5xl font-light leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
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
        >
          After everything,
          <br />
          <span className="text-red-400">
            I'd still choose you.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/40 sm:text-base"
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
            duration: 1,
          }}
        >
          Out of all the moments we've lived,
          <br />
          and all the moments still waiting for us...
          <br />
          this is the one thing I know.
        </motion.p>

        {/* =================================
            OPEN FINAL MESSAGE
        ================================= */}

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="button"
              className="mt-14"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
            >
              <button
                type="button"
                onClick={() => setOpened(true)}
                className="group relative overflow-hidden rounded-full border border-red-500/30 bg-red-500/[0.08] px-8 py-4 text-sm text-white backdrop-blur-md transition duration-500 hover:border-red-400/60 hover:bg-red-500/15"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles
                    size={16}
                    className="text-red-400"
                  />

                  Open one last thing

                  <Heart
                    size={15}
                    className="fill-red-500 text-red-500"
                  />
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition duration-1000 group-hover:translate-x-full" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              className="mx-auto mt-14 max-w-2xl"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-7 py-10 backdrop-blur-sm sm:px-12 sm:py-14">
                <Heart
                  size={25}
                  className="mx-auto mb-8 fill-red-500 text-red-500"
                />

                <p className="font-serif text-2xl font-light leading-relaxed text-white sm:text-3xl">
                  Prags,
                </p>

                <p className="mt-7 text-sm leading-8 text-white/55 sm:text-base">
                  If you ever wonder what my favourite
                  part of this whole story is...
                </p>

                <p className="mt-5 font-serif text-xl leading-9 text-white/80 sm:text-2xl">
                  It's not a particular photograph.
                  <br />
                  It's not a particular video.
                  <br />
                  It's not even a particular day.
                </p>

                <p className="mt-7 text-sm leading-8 text-white/55 sm:text-base">
                  It's the fact that there are still
                  so many blank spaces left in our story.
                </p>

                <p className="mt-6 font-serif text-2xl leading-relaxed text-red-400 sm:text-3xl">
                  So many memories we haven't made yet.
                </p>

                <div className="my-10 h-px bg-white/10" />

                <p className="font-serif text-xl font-light leading-9 text-white/80 sm:text-2xl">
                  Happy World Heart Day,
                  <br />
                  to the girl who has a piece of mine.
                </p>

                <p className="mt-8 font-serif text-3xl italic text-red-400">
                  I love you. ❤️
                </p>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/25">
                  29 · 09 · 2026
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom */}
        <motion.div
          className="mt-20"
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
            delay: 1,
            duration: 1,
          }}
        >
          <p className="text-xs tracking-[0.35em] text-white/20">
            MADE WITH LOVE
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/10" />

            <Heart
              size={12}
              className="fill-red-500/50 text-red-500/50"
            />

            <span className="h-px w-8 bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}