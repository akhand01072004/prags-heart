import { useState } from "react";

import Hero from "./components/Hero";
import ScrollIndicator from "./components/ScrollIndicator";
import Timeline from "./components/Timeline";
import Memories from "./components/Memories";
import Videos from "./components/Videos";
import HeartToHeart from "./components/HeartToHeart";
import LoveLetter from "./components/LoveLetter";
import Promises from "./components/Promises";
import Finale from "./components/Finale";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <main>
      <MusicPlayer videoPlaying={videoPlaying} />

      <Hero />
      <ScrollIndicator />
      <Timeline />
      <Memories />

      <Videos
        setVideoPlaying={setVideoPlaying}
      />

      <HeartToHeart />
      <LoveLetter />
      <Promises />
      <Finale />
    </main>
  );
}

export default App;