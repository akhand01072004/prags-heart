import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
  X,
} from "lucide-react";

const TOTAL_VIDEOS = 42;

const specialCaptions = {
  1: "Some memories deserve to move, not just be remembered. ❤️",
  5: "I could watch this moment a hundred times.",
  10: "One of those little moments I never want to lose.",
  15: "You make ordinary moments feel special.",
  20: "Just us. That's enough.",
  25: "A memory that still makes me smile.",
  30: "If I could pause one moment, maybe it would be this one.",
  35: "Another little piece of our story.",
  40: "I hope we make a million more memories like this.",
  42: "And this is only the beginning. ❤️",
};

const defaultCaptions = [
  "Another little piece of us. ❤️",
  "A moment I want to remember forever.",
  "Some memories don't need an explanation.",
  "You and me. That's my favourite combination.",
  "One more memory for our story.",
  "This moment will always have a place in my heart.",
];

const videos = Array.from(
  { length: TOTAL_VIDEOS },
  (_, index) => {
    const number = index + 1;

    return {
      id: number,
      src: `/videos/vid (${number}).mp4`,
      caption:
        specialCaptions[number] ||
        defaultCaptions[
          index % defaultCaptions.length
        ],
    };
  }
);

export default function Videos({
  setVideoPlaying,
}) {
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const isOpen = selectedIndex !== null;

  const selectedVideo =
    isOpen ? videos[selectedIndex] : null;

  // ==========================================
  // OPEN VIDEO
  // ==========================================

  const openVideo = (index) => {
    setSelectedIndex(index);
  };

  // ==========================================
  // CLOSE VIDEO
  // ==========================================

  const closeVideo = () => {
    setSelectedIndex(null);

    // Resume Alfaaz
    setVideoPlaying(false);
  };

  // ==========================================
  // PREVIOUS
  // ==========================================

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current - 1 + videos.length) %
        videos.length
      );
    });

    // Keep music paused while switching
    setVideoPlaying(true);
  };

  // ==========================================
  // NEXT
  // ==========================================

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current + 1) %
        videos.length
      );
    });

    // Keep music paused while switching
    setVideoPlaying(true);
  };

  // ==========================================
  // KEYBOARD CONTROLS
  // ==========================================

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideo();
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

  // ==========================================
  // LOCK BACKGROUND SCROLL
  // ==========================================

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
      id="videos"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 sm:px-8 lg:px-12"
    >
      {/* ======================================
          BACKGROUND GLOW
      ======================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ======================================
            HEADING
        ======================================= */}

        <motion.div
          className="mb-20 text-center"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-red-500/40" />

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            <div className="h-px w-12 bg-red-500/40" />
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-400">
            Moving memories
          </p>

          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Some memories
            <br />
            <span className="text-white/40">
              need to move.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            42 little moments.
            <br />
            42 pieces of our story.
            <br />
            And somehow, I want to keep every
            single one.
          </p>
        </motion.div>

        {/* ======================================
            FEATURED VIDEO CARD
        ======================================= */}

        <motion.button
          type="button"
          onClick={() => openVideo(0)}
          className="group relative mb-8 block w-full overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900 text-left"
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Lightweight preview */}
          <video
            src={videos[0].src}
            muted
            playsInline
            preload="metadata"
            className="h-[55vh] min-h-[400px] w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:border-red-400/50 group-hover:bg-red-500/20">
              <Play
                size={28}
                className="ml-1 fill-white text-white"
              />
            </div>
          </div>

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.3em] text-red-400">
                Memory 01
              </span>

              <div className="h-px w-8 bg-red-400/50" />
            </div>

            <p className="max-w-2xl font-serif text-2xl font-light leading-relaxed text-white sm:text-3xl">
              {videos[0].caption}
            </p>
          </div>
        </motion.button>

        {/* ======================================
            VIDEO GRID
        ======================================= */}

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {videos.slice(1).map((video, index) => {
            const actualIndex = index + 1;

            return (
              <motion.button
                key={video.id}
                type="button"
                onClick={() =>
                  openVideo(actualIndex)
                }
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 text-left"
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    (index % 4) * 0.05,
                }}
              >
                {/* =================================
                    VIDEO PREVIEW

                    IMPORTANT:
                    NO autoplay
                ================================== */}

                <video
                  src={video.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
                    <Play
                      size={17}
                      className="ml-0.5 fill-white text-white"
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] tracking-widest text-white/60 backdrop-blur-md">
                    {String(video.id).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="line-clamp-2 text-xs leading-5 text-white/75 sm:text-sm">
                    {video.caption}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ======================================
            END MESSAGE
        ======================================= */}

        <motion.div
          className="mt-28 text-center"
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
            size={22}
            className="mx-auto mb-6 fill-red-500 text-red-500"
          />

          <p className="font-serif text-2xl font-light text-white/80 sm:text-3xl">
            I don't just want memories
            <br />
            with you.
          </p>

          <p className="mt-4 text-sm text-white/35">
            I want a lifetime of moments worth
            remembering.
          </p>
        </motion.div>
      </div>

      {/* ======================================
          FULLSCREEN VIDEO PLAYER
      ======================================= */}

      <AnimatePresence>
        {isOpen && selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeVideo}
          >
            {/* =================================
                CLOSE
            ================================== */}

            <button
              type="button"
              onClick={closeVideo}
              className="absolute right-5 top-5 z-30 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Close video"
            >
              <X size={22} />
            </button>

            {/* =================================
                PREVIOUS
            ================================== */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6 sm:p-4"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>

            {/* =================================
                NEXT
            ================================== */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6 sm:p-4"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>

            {/* =================================
                PLAYER
            ================================== */}

            <motion.div
              key={selectedVideo.id}
              className="relative flex w-full max-w-5xl flex-col items-center"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* Actual video */}

              <video
                key={selectedVideo.src}
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
                preload="auto"
                onPlay={() => {
                  setVideoPlaying(true);
                }}
                onPause={() => {
                  setVideoPlaying(false);
                }}
                onEnded={() => {
                  setVideoPlaying(false);
                }}
                className="max-h-[78vh] w-full rounded-2xl object-contain shadow-2xl"
              />

              {/* Caption */}

              <div className="mt-5 text-center">
                <p className="text-sm text-white/70">
                  {selectedVideo.caption}
                </p>

                <div className="mt-4 flex items-center justify-center gap-3">
                  <Heart
                    size={13}
                    className="fill-red-500 text-red-500"
                  />

                  <span className="text-xs tracking-[0.25em] text-white/30">
                    {selectedVideo.id} /{" "}
                    {TOTAL_VIDEOS}
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