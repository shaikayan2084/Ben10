import React from "react";
import "./AlienDetail.css";
import { motion, AnimatePresence } from "framer-motion";

const alienThemes = {
  Heatblast: { vibe: "fire", icon: "🔥", pattern: "radial-gradient(circle at 50% 50%, rgba(255,69,0,0.15) 0%, transparent 70%)" },
  "Four Arms": { vibe: "warrior", icon: "💪", pattern: "repeating-linear-gradient(45deg, rgba(204,0,0,0.05) 0px, rgba(204,0,0,0.05) 20px, transparent 20px, transparent 40px)" },
  Diamondhead: { vibe: "crystal", icon: "💎", pattern: "linear-gradient(60deg, rgba(0,255,136,0.08) 0%, transparent 30%, transparent 70%, rgba(0,255,136,0.08) 100%)" },
  Ghostfreak: { vibe: "ghost", icon: "👻", pattern: "radial-gradient(ellipse at 30% 50%, rgba(153,51,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(153,51,255,0.05) 0%, transparent 50%)" },
  Swampfire: { vibe: "nature", icon: "🌿", pattern: "repeating-linear-gradient(0deg, rgba(0,204,68,0.04) 0px, rgba(0,204,68,0.04) 3px, transparent 3px, transparent 8px)" },
  Humungousaur: { vibe: "prehistoric", icon: "🦕", pattern: "radial-gradient(circle at 80% 20%, rgba(139,69,19,0.15) 0%, transparent 40%)" },
  "Big Chill": { vibe: "ice", icon: "❄️", pattern: "linear-gradient(180deg, rgba(0,170,255,0.1) 0%, transparent 50%, rgba(0,170,255,0.05) 100%)" },
  XLR8: { vibe: "speed", icon: "⚡", pattern: "repeating-linear-gradient(90deg, rgba(0,102,255,0.06) 0px, rgba(0,102,255,0.06) 4px, transparent 4px, transparent 12px)" },
  "Alien X": { vibe: "cosmic", icon: "🌌", pattern: "radial-gradient(circle at 20% 30%, rgba(170,221,255,0.08) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(170,221,255,0.05) 0%, transparent 30%)" },
  Upgrade: { vibe: "tech", icon: "🔧", pattern: "repeating-linear-gradient(45deg, transparent 0px, transparent 15px, rgba(0,255,0,0.04) 15px, rgba(0,255,0,0.04) 16px)" },
  "Way Big": { vibe: "heroic", icon: "🦸", pattern: "radial-gradient(circle at 50% 30%, rgba(255,51,51,0.12) 0%, transparent 50%)" },
};

const AlienDetail = ({ alien }) => {
  if (!alien) return null;
  const theme = alienThemes[alien.name] || { vibe: "default", icon: "⭐", pattern: "none" };

  return (
    <section className="detail-section" id="details">
      <AnimatePresence mode="wait">
        <motion.div
          key={alien.id}
          className={`detail-container vibe-${theme.vibe}`}
          style={{ background: alien.gradient }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="detail-pattern" style={{ background: theme.pattern }}></div>
          <div className="vibe-orb" />

          <div className="detail-layout">
            <motion.div
              className="detail-image-section"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={`detail-image-wrapper glow-${theme.vibe}`}>
                <img src={alien.image} alt={alien.name} className="detail-image" />
              </div>
              <div className="vibe-icon">{theme.icon}</div>
              <div className="detail-image-badge">
                <span className="badge-species">{alien.species}</span>
                <span className="badge-planet">{alien.homePlanet}</span>
              </div>
            </motion.div>

            <motion.div
              className="detail-info-section"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="detail-header">
                <h2 className="detail-name">
                  <span className="name-icon">{theme.icon}</span> {alien.name}
                </h2>
                <span className="detail-universe">{alien.universe}</span>
              </div>

              <p className="detail-description">{alien.description}</p>

              <div className="detail-specs">
                <div className="spec-item">
                  <span className="spec-label">Species</span>
                  <span className="spec-value">{alien.species}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Home Planet</span>
                  <span className="spec-value">{alien.homePlanet}</span>
                </div>
              </div>

              <div className={`detail-section-title accent-${theme.vibe}`}>
                <span className="section-icon">⚔️</span> Abilities
              </div>
              <ul className={`detail-abilities accent-${theme.vibe}`}>
                {alien.abilities.map((ability, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {ability}
                  </motion.li>
                ))}
              </ul>

              <div className={`detail-section-title accent-${theme.vibe}`}>
                <span className="section-icon">🛡️</span> Weakness
              </div>
              <p className="detail-weakness">{alien.weakness}</p>

              <div className={`detail-section-title accent-${theme.vibe}`}>
                <span className="section-icon">📅</span> Appearances
              </div>
              <div className="detail-appearances">
                <div className="appearance-item">
                  <span className="appearance-label">First Appearance</span>
                  <span className="appearance-value">{alien.firstAppearance}</span>
                </div>
                <div className="appearance-item">
                  <span className="appearance-label">Last Appearance</span>
                  <span className="appearance-value">{alien.lastAppearance}</span>
                </div>
              </div>

              <div className={`detail-section-title accent-${theme.vibe}`}>
                <span className="section-icon">💡</span> Did You Know?
              </div>
              <ul className="detail-facts">
                {alien.interestingFacts.map((fact, i) => (
                  <motion.li
                    key={i}
                    className={`fact-${theme.vibe}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AlienDetail;
