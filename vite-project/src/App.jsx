import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AlienGrid from "./components/AlienGrid";
import AlienDetail from "./components/AlienDetail";
import Characters from "./components/Characters";
import Quiz from "./components/Quiz";
import OmnitrixTransform from "./components/OmnitrixTransform";
import Particles from "./components/Particles";
import { aliens } from "./data/aliens";
import { useSound } from "./hooks/useSound";

function App() {
  const [selectedAlien, setSelectedAlien] = useState(null);
  const [transformingAlien, setTransformingAlien] = useState(null);
  const { playOmnitrix, playTransform, speakAlien, playBeep } = useSound();

  useEffect(() => {
    const timer = setTimeout(() => playOmnitrix(), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectAlien = useCallback((alien) => {
    if (alien) {
      speakAlien(alien.name);
      setTransformingAlien(alien);
    } else {
      setSelectedAlien(null);
      setTransformingAlien(null);
    }
  }, [speakAlien]);

  const handleTransformComplete = useCallback(() => {
    setSelectedAlien(transformingAlien);
    setTransformingAlien(null);
  }, [transformingAlien]);

  useEffect(() => {
    if (selectedAlien) {
      setTimeout(() => {
        document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [selectedAlien]);

  return (
    <div className="app">
      <Particles />
      <div className="app-content">
        <Navbar onSelectAlien={handleSelectAlien} activeAlien={selectedAlien} />
        <Hero onSelectAlien={handleSelectAlien} />
        <AlienGrid onSelectAlien={handleSelectAlien} selectedAlien={selectedAlien} onBeep={playBeep} />
        {selectedAlien && <AlienDetail alien={selectedAlien} />}
        <Characters />
        <Quiz />
      </div>
      <OmnitrixTransform alien={transformingAlien} onComplete={handleTransformComplete} onPlayTransform={playTransform} />
    </div>
  );
}

export default App;