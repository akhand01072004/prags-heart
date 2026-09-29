import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const thoughts = [
  {
    number: "01",
    title: "You are chosen.",
    text: "Not because everything between us has always been perfect. But because even after everything, my heart still finds its way back to you.",
  },
  {
    number: "02",
    title: "You don't have to be perfect.",
    text: "You don't have to have the right words every time. You don't have to pretend to be okay. I want the real you — the happy you, the emotional you, the confused you, all of you.",
  },
  {
    number: "03",
    title: "I notice the little things.",
    text: "The things you probably think I don't notice. Your expressions, your smile, the way you talk, the little things that make you uniquely you.",
  },
  {
    number: "04",
    title: "I am proud of us.",
    text: "Not because our story is perfect, but because our story is ours. We've had moments that tested us, moments that changed us, and moments that brought us closer.",
  },
  {
    number: "05",
    title: "I want more ordinary days.",
    text: "Not just birthdays, trips, celebrations and special occasions. I want the random Tuesdays, boring evenings, silly conversations and quiet moments too.",
  },
  {
    number: "06",
    title: "I still have dreams for us.",
    text: "There are places I want to see with you, memories I want to create, photographs we haven't taken and countless moments that haven't happened yet.",
  },
];

function ThoughtCard({ thought, index }) {
  return (
    <motion.div
      className="group grid grid-cols-[55px_1fr] gap-5 border-t border-white/10 py-10 sm:grid-cols-[80px_1fr] sm:gap-10"
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.7,
        delay: index * 0.08,
      }}
    >
      {/* Number */}
      <div>
        <span className="text-xs tracking-[0.3em] text-red-500/70">
          {thought.number}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-serif text-2xl font-light text-white transition duration-300 group-hover:text-red-300 sm:text-3xl md:text-4xl">
          {thought.title}
        </h3>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
          {thought.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function HeartToHeart() {
  return (
    <section
      id="heart-to-heart"
      className="relative overflow-hidden bg-[#050505] px-5 py-32 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          className="mb-24"
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
          <div className="mb-6 flex items-center gap-3">
            <Heart
              size={17}
              className="fill-red-500 text-red-500"
            />

            <span className="text-xs uppercase tracking-[0.35em] text-red-400">
              From my heart
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            There are a few things
            <br />
            <span className="text-white/35">
              I want you to know.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            Maybe I don't say all of these things
            enough. So today, I wanted to leave
            them here for you.
          </p>
        </motion.div>

        {/* Thoughts */}
        <div>
          {thoughts.map((thought, index) => (
            <ThoughtCard
              key={thought.number}
              thought={thought}
              index={index}
            />
          ))}

          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>

        {/* Final statement */}
        <motion.div
          className="mt-28 text-center"
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
          <Heart
            size={25}
            className="mx-auto mb-7 fill-red-500 text-red-500"
          />

          <p className="font-serif text-3xl font-light leading-relaxed text-white sm:text-4xl md:text-5xl">
            In a world full of people,
            <br />
            <span className="text-red-400">
              my heart still knows your name.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}