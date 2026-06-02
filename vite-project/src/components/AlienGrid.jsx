import React, { useState } from "react";
import "./AlienGrid.css";
import { motion } from "framer-motion";
import { aliens } from "../data/aliens";

const sectionConfig = {
  "Classic Series (2005–2008)": {
    icon: "📺", color: "#00ff88", desc: "The original 10 aliens that started it all"
  },
  "Alien Force (2008–2010)": {
    icon: "⚡", color: "#ff6600", desc: "The next generation of heroes"
  },
  "Ultimate Alien (2010–2012)": {
    icon: "🔥", color: "#cc44ff", desc: "Evolved forms and new transformations"
  },
  "Omniverse (2012–2014)": {
    icon: "🌌", color: "#00aaff", desc: "The final chapter of Ben's journey"
  }
};

const universeOrder = [
  "Classic Series (2005–2008)",
  "Alien Force (2008–2010)",
  "Ultimate Alien (2010–2012)",
  "Omniverse (2012–2014)"
];

const AlienGrid = ({ onSelectAlien, selectedAlien }) => {
  const [clickedId, setClickedId] = useState(null);

  const grouped = {};
  universeOrder.forEach(u => { grouped[u] = []; });
  aliens.forEach(a => {
    if (grouped[a.universe]) grouped[a.universe].push(a);
  });

  return (
    <section className="alien-grid-section" id="aliens">
      <motion.div
        className="grid-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="grid-title"><span className="highlight">ALIEN</span> DATABASE</h2>
        <p className="grid-subtitle">Explore {aliens.length} aliens across all series — hover to inspect, click to unlock the full wiki entry</p>
      </motion.div>

      {universeOrder.map((section, sIdx) => {
        const sectionAliens = grouped[section];
        if (!sectionAliens || sectionAliens.length === 0) return null;
        const cfg = sectionConfig[section];

        return (
          <div key={section} className="series-section">
            <motion.div
              className="series-header"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.1 }}
            >
              <div className="series-icon" style={{ background: cfg.color }}>{cfg.icon}</div>
              <div className="series-info">
                <h3 className="series-title">{section}</h3>
                <p className="series-desc">{cfg.desc}</p>
              </div>
              <div className="series-count">{sectionAliens.length} aliens</div>
            </motion.div>

            <div className="alien-cards">
              {sectionAliens.map((alien, index) => {
                const isSelected = selectedAlien?.id === alien.id;
                const isClicked = clickedId === alien.id;

                return (
                  <motion.div
                    key={alien.id}
                    className={`alien-card ${isSelected ? "selected" : ""} ${isClicked ? "clicked" : ""}`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -12, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
                    onHoverEnd={() => setClickedId(null)}
                    onClick={() => {
                      setClickedId(alien.id);
                      setTimeout(() => setClickedId(null), 600);
                      onSelectAlien(alien);
                    }}
                    layout
                  >
                    <div className="card-glow" style={{ background: alien.gradient }}></div>
                    <div className="card-image-wrapper">
                      <motion.img
                        src={alien.cardImage}
                        alt={alien.name}
                        className="card-image"
                        whileHover={{ scale: 1.2, rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="card-info">
                      <motion.h3 className="card-name" layout>{alien.name}</motion.h3>
                      <p className="card-species">{alien.species}</p>
                      <span className="card-universe">{alien.universe}</span>
                    </div>
                    <div className="card-number">#{alien.id.toString().padStart(2, "0")}</div>
                    <div className="card-click-ripple" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AlienGrid;