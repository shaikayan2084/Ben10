import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AlienGrid from "./components/AlienGrid";
import AlienDetail from "./components/AlienDetail";
import OmnitrixTransform from "./components/OmnitrixTransform";
import Particles from "./components/Particles";
import { aliens } from "./data/aliens";

function App() {
  const [selectedAlien, setSelectedAlien] = useState(null);
  const [transformingAlien, setTransformingAlien] = useState(null);

  const handleSelectAlien = useCallback((alien) => {
    if (alien) {
      setTransformingAlien(alien);
    } else {
      setSelectedAlien(null);
      setTransformingAlien(null);
    }
  }, []);

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
        <AlienGrid onSelectAlien={handleSelectAlien} selectedAlien={selectedAlien} />
        {selectedAlien && <AlienDetail alien={selectedAlien} />}
      </div>
      <OmnitrixTransform alien={transformingAlien} onComplete={handleTransformComplete} />
    </div>
  );
}

export default App;
