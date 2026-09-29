import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ videoPlaying }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // -----------------------------------------
  // Try to start music when website opens
  // -----------------------------------------
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    const startMusic = async () => {
      if (videoPlaying) return;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Browser blocked autoplay.
        // We will start music after the user's
        // first interaction.
        setIsPlaying(false);
      }
    };

    startMusic();
  }, []);

  // -----------------------------------------
  // Pause/resume music when video plays
  // -----------------------------------------
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (videoPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Only resume if the user has already
      // started/interacted with the music.
      if (audio.currentTime > 0 || isPlaying) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  }, [videoPlaying]);

  // -----------------------------------------
  // Start music after first user interaction
  // -----------------------------------------
  useEffect(() => {
    const startAfterInteraction = async () => {
      const audio = audioRef.current;

      if (!audio || videoPlaying) return;

      if (!isPlaying) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {}
      }
    };

    const events = [
      "click",
      "touchstart",
      "keydown",
    ];

    events.forEach((event) => {
      window.addEventListener(
        event,
        startAfterInteraction,
        { once: true }
      );
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(
          event,
          startAfterInteraction
        );
      });
    };
  }, [videoPlaying, isPlaying]);

  // -----------------------------------------
  // Manual music toggle
  // -----------------------------------------
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {}
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // -----------------------------------------
  // Mute/unmute
  // -----------------------------------------
  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <>
      {/* Background music */}
      <audio
        ref={audioRef}
        src="/music/Alfaaz.mp3"
        preload="auto"
      />

      {/* Music controls */}
      <div className="fixed bottom-5 right-5 z-[90] flex items-center gap-2">
        {/* Play / Pause */}
        <button
          type="button"
          onClick={toggleMusic}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-red-500/40 hover:bg-black/80"
          aria-label={
            isPlaying
              ? "Pause music"
              : "Play music"
          }
        >
          {isPlaying ? (
            <Music
              size={17}
              className="text-red-400"
            />
          ) : (
            <Music
              size={17}
              className="text-white/50"
            />
          )}
        </button>

        {/* Mute */}
        <button
          type="button"
          onClick={toggleMute}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:border-red-500/40 hover:bg-black/80"
          aria-label={
            isMuted
              ? "Unmute music"
              : "Mute music"
          }
        >
          {isMuted ? (
            <VolumeX
              size={17}
              className="text-white/50"
            />
          ) : (
            <Volume2
              size={17}
              className="text-red-400"
            />
          )}
        </button>
      </div>
    </>
  );
}