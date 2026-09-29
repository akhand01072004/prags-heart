import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";

const TOTAL_IMAGES = 86;

// Special captions for selected memories
const specialCaptions = {
  1: "The beginning of another beautiful memory. ❤️",
  5: "One of those little moments I never want to forget.",
  10: "You looked beautiful without even trying.",
  20: "Just us. That's enough.",
  30: "A memory I could look at a hundred times.",
  40: "I wish I could pause moments like this.",
  50: "Another little piece of us. ❤️",
  60: "Some memories don't need an explanation.",
  70: "Still one of my favourites.",
  80: "This one means more than you know.",
  86: "And this is only the beginning. ❤️",
};

// Create all 86 memories
const memories = Array.from(
  { length: TOTAL_IMAGES },
  (_, index) => {
    const number = index + 1;

    let size = "small";

    if (index % 7 === 0) {
      size = "large";
    } else if (index % 4 === 0) {
      size = "medium";
    }

    // Images 1 and 85 are JPEG
    const extension =
      number === 1 || number === 85
        ? "jpeg"
        : "jpg";

    return {
      id: number,
      image: `/memories/i (${number}).${extension}`,
      caption:
        specialCaptions[number] ||
        "Another little piece of us. ❤️",
      size,
    };
  }
);

// Individual memory card
function MemoryCard({ memory, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(memory.id - 1)}
      className={`group relative mb-4 w-full overflow-hidden rounded-2xl bg-zinc-900 text-left ${
        memory.size === "large"
          ? "min-h-[420px]"
          : memory.size === "medium"
          ? "min-h-[320px]"
          : "min-h-[250px]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.015 }}
    >
      {/* Image */}
      <img
        src={memory.image}
        alt={`Memory ${memory.id}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

      {/* Heart */}
      <div className="absolute right-4 top-4 rounded-full bg-black/30 p-2 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
        <Heart
          size={18}
          className="fill-red-500 text-red-500"
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-sm font-light leading-relaxed text-white/90">
          {memory.caption}
        </p>
      </div>
    </motion.button>
  );
}

export default function Memories() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isOpen = selectedIndex !== null;

  // Current selected memory
  const selectedMemory =
    isOpen ? memories[selectedIndex] : null;

  // Open lightbox
  const openMemory = (index) => {
    setSelectedIndex(index);
  };

  // Close lightbox
  const closeMemory = () => {
    setSelectedIndex(null);
  };

  // Previous image
  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + memories.length) %
        memories.length
      );
    });
  };

  // Next image
  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current + 1) %
        memories.length
      );
    });
  };

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMemory();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-red-500/50" />

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            <div className="h-px w-10 bg-red-500/50" />
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-red-400">
            Little pieces of us
          </p>

          <h2 className="font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            86 memories.
            <br />
            <span className="text-white/50">
              One story.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Every picture holds a moment.
            Every moment holds a feeling.
            And somehow, all of them became
            a part of us.
          </p>
        </motion.div>

        {/* Memories grid */}
        <div
          className="
            columns-2 gap-4
            lg:columns-3
            xl:columns-4
          "
        >
          {memories.map((memory) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onClick={openMemory}
            />
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >
          <Heart
            size={22}
            className="mx-auto mb-5 fill-red-500 text-red-500"
          />

          <p className="font-serif text-2xl font-light text-white/80 sm:text-3xl">
            And somehow...
          </p>

          <p className="mt-3 text-sm text-white/40">
            I still want a million more memories
            with you.
          </p>
        </motion.div>
      </div>

      {/* =========================
          LIGHTBOX
         ========================= */}
      <AnimatePresence>
        {isOpen && selectedMemory && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMemory}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeMemory}
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6 sm:p-4"
              aria-label="Previous memory"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6 sm:p-4"
              aria-label="Next memory"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image container */}
            <motion.div
              key={selectedMemory.id}
              className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <img
                src={selectedMemory.image}
                alt={`Memory ${selectedMemory.id}`}
                className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />

              {/* Caption */}
              <div className="mt-5 max-w-xl text-center">
                <p className="text-sm leading-6 text-white/70">
                  {selectedMemory.caption}
                </p>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <Heart
                    size={13}
                    className="fill-red-500 text-red-500"
                  />

                  <span className="text-xs tracking-widest text-white/30">
                    {selectedMemory.id} /{" "}
                    {TOTAL_IMAGES}
                  </span>

                  <Heart
                    size={13}
                    className="fill-red-500 text-red-500"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}