import React from "react";
import "./AlienGrid.css";
import { motion } from "framer-motion";
import { aliens } from "../data/aliens";

const AlienGrid = ({ onSelectAlien, selectedAlien }) => {
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
        <p className="grid-subtitle">Click any alien to view its complete wiki entry — species, abilities, weaknesses, and more</p>
      </motion.div>

      <div className="alien-cards">
        {aliens.map((alien, index) => {
          const isSelected = selectedAlien?.id === alien.id;
          return (
            <motion.div
              key={alien.id}
              className={`alien-card ${isSelected ? "selected" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => onSelectAlien(alien)}
            >
              <div className="card-glow" style={{ background: alien.gradient }}></div>
              <div className="card-image-wrapper">
                <img src={alien.cardImage} alt={alien.name} className="card-image" />
              </div>
              <div className="card-info">
                <h3 className="card-name">{alien.name}</h3>
                <p className="card-species">{alien.species}</p>
                <span className="card-universe">{alien.universe}</span>
              </div>
              <div className="card-number">#{alien.id.toString().padStart(2, "0")}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AlienGrid;
