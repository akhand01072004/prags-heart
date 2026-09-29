import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveLetter() {
  return (
    <section
      id="love-letter"
      className="relative overflow-hidden bg-[#050505] px-5 py-32 sm:px-8 lg:px-12"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-3xl">

        {/* Small heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{
            opacity: 0,
            y: 25,
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
            className="mx-auto mb-5 fill-red-500 text-red-500"
          />

          <p className="text-xs uppercase tracking-[0.4em] text-red-400">
            A letter for you
          </p>
        </motion.div>

        {/* Letter */}
        <motion.div
          className="relative rounded-3xl border border-white/10 bg-white/[0.025] px-7 py-10 shadow-2xl backdrop-blur-sm sm:px-12 sm:py-14 md:px-16 md:py-16"
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
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* Decorative heart */}
          <div className="absolute right-7 top-7 opacity-30 sm:right-10 sm:top-10">
            <Heart
              size={18}
              className="fill-red-500 text-red-500"
            />
          </div>

          {/* Date */}
          <p className="mb-12 text-xs tracking-[0.25em] text-white/25">
            29 · 09 · 2026
          </p>

          {/* Greeting */}
          <motion.h2
            className="font-serif text-3xl font-light text-white sm:text-4xl"
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
              delay: 0.2,
              duration: 0.8,
            }}
          >
            My Prags,
          </motion.h2>

          {/* Letter content */}
          <div className="mt-10 space-y-7 text-[15px] leading-8 text-white/55 sm:text-base sm:leading-9">

            <p>
              I don't really know how to fit everything I
              feel for you into a website, a message, or
              even a thousand words.
            </p>

            <p>
              But I wanted to try anyway.
            </p>

            <p>
              Because when I look at everything we've
              been through, everything we've laughed
              about, everything we've argued about,
              every little moment we've shared...
              I realize that our story means far more
              to me than I sometimes know how to say.
            </p>

            <p>
              There are things I probably don't say
              enough. Things that get lost between
              normal conversations, busy days, little
              arguments and all the noise of life.
            </p>

            <p>
              So let me say them here.
            </p>

            <p className="font-serif text-xl leading-9 text-white/80 sm:text-2xl sm:leading-10">
              I love you.
            </p>

            <p>
              Not just during the beautiful moments.
              Not just when everything is easy.
              I love the person you are, the person
              you're becoming, and all the little things
              that make you...
              <span className="text-white/80">
                you.
              </span>
            </p>

            <p>
              I love your smile. I love your little
              expressions. I love the way you can make
              an ordinary moment feel like something
              worth remembering.
            </p>

            <p>
              And yes, we've had complicated moments.
              We've both made mistakes. We've both
              misunderstood each other.
            </p>

            <p>
              But somewhere between all of those
              moments, we kept finding our way back to
              each other.
            </p>

            <p className="font-serif text-xl leading-9 text-white/80 sm:text-2xl sm:leading-10">
              And that means something to me.
            </p>

            <p>
              I don't want a perfect relationship.
              I want something real.
            </p>

            <p>
              I want the random conversations.
              The stupid jokes.
              The late-night talks.
              The arguments that eventually turn into
              laughter.
              The boring days.
              The exciting days.
              The photographs.
              The videos.
              The memories we haven't made yet.
            </p>

            <p>
              I want all of it.
            </p>

            <p>
              And when I imagine the future, I don't
              just imagine some perfect movie scene.
            </p>

            <p>
              I imagine you beside me in all the
              ordinary moments too.
            </p>

            <p className="font-serif text-xl leading-9 text-white/80 sm:text-2xl sm:leading-10">
              That's the future I want.
            </p>

            <p>
              So if you ever forget how much you mean
              to me, come back to this little world I
              made for you.
            </p>

            <p>
              Look at the pictures.
              Watch the videos.
              Read these words again.
            </p>

            <p>
              And remember that somewhere, there is a
              boy who looked at all these memories and
              thought...
            </p>

            {/* Highlight */}
            <motion.p
              className="py-5 text-center font-serif text-2xl leading-10 text-red-300 sm:text-3xl"
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
                duration: 0.8,
              }}
            >
              "I want more of this."
            </motion.p>

            <p>
              More memories.
              More laughter.
              More days.
              More photographs.
              More videos.
              More stupid little moments.
            </p>

            <p>
              More us.
            </p>

            <p>
              Thank you for being a part of my story.
              And thank you for giving me so many
              moments worth remembering.
            </p>

            <p>
              Whatever life brings us, I hope you
              always know that you have a very special
              place in my heart.
            </p>
          </div>

          {/* Signature */}
          <motion.div
            className="mt-14 border-t border-white/10 pt-10"
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
              delay: 0.3,
              duration: 0.8,
            }}
          >
            <p className="font-serif text-2xl font-light text-white">
              Always yours,
            </p>

            <p className="mt-3 font-serif text-3xl italic text-red-400">
              Akhand ❤️
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom heart */}
        <motion.div
          className="mt-20 text-center"
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
            duration: 1,
          }}
        >
          <Heart
            size={22}
            className="mx-auto fill-red-500 text-red-500"
          />
        </motion.div>
      </div>
    </section>
  );
}