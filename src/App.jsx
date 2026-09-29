import Hero from "./components/Hero";
import ScrollIndicator from "./components/ScrollIndicator";
import Timeline from "./components/Timeline";
import Memories from "./components/Memories";
import Videos from "./components/Videos";
import HeartToHeart from "./components/HeartToHeart";
import LoveLetter from "./components/LoveLetter";
import Promises from "./components/Promises";
import Finale from "./components/Finale";

function App() {
  return (
    <main>
      <Hero />
      <ScrollIndicator />
      <Timeline />
      <Memories />
      <Videos />
      <HeartToHeart />
      <LoveLetter/>
      <Promises/>
      <Finale/>
    </main>
  );
}

export default App;