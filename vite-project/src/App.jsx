import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AlienGrid from "./components/AlienGrid";
import AlienDetail from "./components/AlienDetail";
import { aliens } from "./data/aliens";

function App() {
  const [selectedAlien, setSelectedAlien] = useState(null);

  useEffect(() => {
    if (selectedAlien) {
      document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedAlien]);

  return (
    <div className="app">
      <Navbar onSelectAlien={setSelectedAlien} activeAlien={selectedAlien} />
      <Hero onSelectAlien={setSelectedAlien} />
      <AlienGrid onSelectAlien={setSelectedAlien} selectedAlien={selectedAlien} />
      {selectedAlien && <AlienDetail alien={selectedAlien} />}
    </div>
  );
}

export default App;
