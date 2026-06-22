import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Characters.css";
import { characters } from "../data/characters";

const sectionConfig = {
  title: "Core Characters",
  subtitle: "The heroes, villains, and allies that define the Ben 10 universe"
};

const CharacterCard = ({ character }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`character-card ${expanded ? "expanded" : ""}`}
      style={{ "--char-color": character.color, "--char-grad": character.gradient }}
      layout
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="char-glow" style={{ background: character.gradient }} />
      <div className="char-image-wrapper">
        <img src={character.image} alt={character.name} className="char-image" />
      </div>
      <div className="char-info">
        <h3 className="char-name">{character.name}</h3>
        <span className="char-role" style={{ color: character.color }}>{character.role}</span>
        <p className="char-species">{character.species}</p>
        <blockquote className="char-quote">&ldquo;{character.quote}&rdquo;</blockquote>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="char-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="char-description">{character.description}</p>
            <div className="char-meta">
              <div className="char-meta-item">
                <span className="meta-label">First Appearance</span>
                <span className="meta-value">{character.firstAppearance}</span>
              </div>
              <div className="char-meta-item">
                <span className="meta-label">Last Appearance</span>
                <span className="meta-value">{character.lastAppearance}</span>
              </div>
              <div className="char-meta-item">
                <span className="meta-label">Affiliation</span>
                <span className="meta-value">{character.affiliation}</span>
              </div>
            </div>
            <div className="char-abilities">
              <h4>Abilities</h4>
              <div className="ability-tags">
                {character.abilities.map((ability, i) => (
                  <span key={i} className="ability-tag" style={{ borderColor: character.color, color: character.color }}>
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Characters = () => {
  return (
    <section id="characters" className="characters-section">
      <div className="characters-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{sectionConfig.title}</h2>
          <p className="section-subtitle">{sectionConfig.subtitle}</p>
        </motion.div>

        <div className="characters-grid">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
