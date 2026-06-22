import React, { useState, useEffect } from "react";
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
  Chromastone: { vibe: "crystal", icon: "💎", pattern: "linear-gradient(60deg, rgba(204,68,255,0.08) 0%, transparent 30%, transparent 70%, rgba(204,68,255,0.08) 100%)" },
  Rath: { vibe: "warrior", icon: "🐯", pattern: "repeating-linear-gradient(45deg, rgba(255,102,0,0.05) 0px, rgba(255,102,0,0.05) 20px, transparent 20px, transparent 40px)" },
  Cannonbolt: { vibe: "prehistoric", icon: "🌀", pattern: "radial-gradient(circle at 50% 50%, rgba(102,153,255,0.1) 0%, transparent 50%)" },
  Ripjaws: { vibe: "ghost", icon: "🐟", pattern: "radial-gradient(ellipse at 50% 100%, rgba(0,136,68,0.1) 0%, transparent 60%)" },
  Clockwork: { vibe: "tech", icon: "⏰", pattern: "repeating-linear-gradient(90deg, rgba(204,170,0,0.06) 0px, rgba(204,170,0,0.06) 2px, transparent 2px, transparent 10px)" },
  Toepick: { vibe: "ghost", icon: "👹", pattern: "radial-gradient(circle at 30% 30%, rgba(136,68,0,0.12) 0%, transparent 50%)" },
  Feedback: { vibe: "speed", icon: "⚡", pattern: "repeating-linear-gradient(0deg, rgba(0,255,102,0.06) 0px, rgba(0,255,102,0.06) 3px, transparent 3px, transparent 10px)" },
  Buzzshock: { vibe: "speed", icon: "⚡", pattern: "repeating-linear-gradient(-45deg, rgba(34,204,0,0.06) 0px, rgba(34,204,0,0.06) 4px, transparent 4px, transparent 8px)" },
  Armodrillo: { vibe: "warrior", icon: "🦾", pattern: "radial-gradient(circle at 70% 20%, rgba(255,136,0,0.1) 0%, transparent 40%)" },
  "Water Hazard": { vibe: "ice", icon: "💧", pattern: "linear-gradient(180deg, rgba(0,102,204,0.1) 0%, transparent 40%, rgba(0,102,204,0.05) 100%)" },
  "Grey Matter": { vibe: "tech", icon: "🧠", pattern: "repeating-linear-gradient(135deg, transparent 0px, transparent 10px, rgba(136,170,0,0.04) 10px, rgba(136,170,0,0.04) 11px)" },
  Terraspin: { vibe: "nature", icon: "🌪️", pattern: "radial-gradient(circle at 50% 50%, rgba(136,204,255,0.08) 0%, transparent 60%)" },
  NRG: { vibe: "fire", icon: "☢️", pattern: "radial-gradient(circle at 50% 50%, rgba(102,255,0,0.12) 0%, transparent 50%)" },
  Upchuck: { vibe: "nature", icon: "🤮", pattern: "radial-gradient(circle at 30% 70%, rgba(0,204,102,0.1) 0%, transparent 50%)" },
  Wildmutt: { vibe: "prehistoric", icon: "🐕", pattern: "radial-gradient(circle at 50% 50%, rgba(255,102,0,0.1) 0%, transparent 50%)" },
  Stinkfly: { vibe: "ghost", icon: "🪰", pattern: "repeating-linear-gradient(45deg, rgba(51,204,51,0.04) 0px, rgba(51,204,51,0.04) 10px, transparent 10px, transparent 20px)" },
  "Echo Echo": { vibe: "tech", icon: "🔊", pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 50%)" },
  Jetray: { vibe: "speed", icon: "🐟", pattern: "linear-gradient(90deg, rgba(255,204,0,0.08) 0%, transparent 50%, rgba(255,204,0,0.08) 100%)" },
  Brainstorm: { vibe: "tech", icon: "🦀", pattern: "repeating-linear-gradient(0deg, rgba(0,102,255,0.05) 0px, rgba(0,102,255,0.05) 2px, transparent 2px, transparent 6px)" },
  Spidermonkey: { vibe: "warrior", icon: "🐒", pattern: "radial-gradient(circle at 50% 80%, rgba(51,51,204,0.1) 0%, transparent 50%)" },
  Goop: { vibe: "nature", icon: "🟢", pattern: "radial-gradient(circle at 50% 50%, rgba(0,255,51,0.08) 0%, transparent 50%)" },
  AmpFibian: { vibe: "ice", icon: "🐙", pattern: "linear-gradient(180deg, rgba(51,102,255,0.1) 0%, transparent 50%, rgba(51,102,255,0.05) 100%)" },
  Fasttrack: { vibe: "speed", icon: "🐱", pattern: "repeating-linear-gradient(90deg, rgba(0,51,204,0.06) 0px, rgba(0,51,204,0.06) 3px, transparent 3px, transparent 10px)" },
  ChamAlien: { vibe: "ghost", icon: "🦎", pattern: "radial-gradient(circle at 50% 50%, rgba(153,51,204,0.08) 0%, transparent 50%)" },
  Eatle: { vibe: "prehistoric", icon: "🪲", pattern: "radial-gradient(circle at 30% 30%, rgba(204,102,0,0.1) 0%, transparent 50%)" },
  Juryrigg: { vibe: "tech", icon: "🔩", pattern: "repeating-linear-gradient(135deg, rgba(255,102,0,0.05) 0px, rgba(255,102,0,0.05) 5px, transparent 5px, transparent 15px)" },
  Bloxx: { vibe: "warrior", icon: "🧱", pattern: "repeating-linear-gradient(0deg, rgba(204,0,0,0.06) 0px, rgba(204,0,0,0.06) 8px, transparent 8px, transparent 16px)" },
  Gravattack: { vibe: "cosmic", icon: "🪐", pattern: "radial-gradient(circle at 50% 50%, rgba(102,204,255,0.1) 0%, transparent 50%)" },
  Crashhopper: { vibe: "warrior", icon: "🦗", pattern: "repeating-linear-gradient(-45deg, rgba(102,255,51,0.05) 0px, rgba(102,255,51,0.05) 12px, transparent 12px, transparent 24px)" },
  "Ball Weevil": { vibe: "fire", icon: "🐛", pattern: "radial-gradient(circle at 50% 50%, rgba(102,255,0,0.1) 0%, transparent 50%)" },
  Walkatrout: { vibe: "ice", icon: "🐟", pattern: "radial-gradient(circle at 50% 100%, rgba(51,153,255,0.06) 0%, transparent 50%)" },
  "Pesky Dust": { vibe: "ghost", icon: "🦋", pattern: "radial-gradient(circle at 50% 50%, rgba(255,102,204,0.08) 0%, transparent 50%)" },
  "Mole-Stache": { vibe: "warrior", icon: "🦡", pattern: "repeating-linear-gradient(90deg, rgba(139,69,19,0.05) 0px, rgba(139,69,19,0.05) 6px, transparent 6px, transparent 12px)" },
  "The Worst": { vibe: "heroic", icon: "🟠", pattern: "radial-gradient(circle at 50% 50%, rgba(255,204,0,0.08) 0%, transparent 50%)" },
  "Kickin Hawk": { vibe: "warrior", icon: "🐔", pattern: "repeating-linear-gradient(45deg, rgba(204,102,0,0.05) 0px, rgba(204,102,0,0.05) 8px, transparent 8px, transparent 16px)" },
  Astrodactyl: { vibe: "speed", icon: "🦅", pattern: "linear-gradient(90deg, rgba(102,204,0,0.08) 0%, transparent 50%, rgba(102,204,0,0.08) 100%)" },
  Bullfrag: { vibe: "nature", icon: "🐸", pattern: "radial-gradient(circle at 50% 50%, rgba(0,204,68,0.08) 0%, transparent 50%)" },
  Atomix: { vibe: "fire", icon: "☢️", pattern: "radial-gradient(circle at 50% 50%, rgba(255,51,0,0.12) 0%, transparent 50%)" },
  Gutrot: { vibe: "nature", icon: "🧪", pattern: "repeating-linear-gradient(180deg, rgba(136,204,0,0.05) 0px, rgba(136,204,0,0.05) 4px, transparent 4px, transparent 8px)" },
  Whampire: { vibe: "ghost", icon: "🦇", pattern: "radial-gradient(circle at 50% 50%, rgba(102,0,51,0.12) 0%, transparent 50%)" },
  Wildvine: { vibe: "nature", icon: "🌿", pattern: "repeating-linear-gradient(0deg, rgba(0,102,0,0.06) 0px, rgba(0,102,0,0.06) 4px, transparent 4px, transparent 10px)" },
  Blitzwolfer: { vibe: "warrior", icon: "🐺", pattern: "radial-gradient(circle at 50% 50%, rgba(170,170,170,0.08) 0%, transparent 50%)" },
  "Snare-oh": { vibe: "ghost", icon: "🩹", pattern: "repeating-linear-gradient(45deg, rgba(204,170,0,0.05) 0px, rgba(204,170,0,0.05) 10px, transparent 10px, transparent 20px)" },
  Frankenstrike: { vibe: "tech", icon: "⚡", pattern: "repeating-linear-gradient(90deg, rgba(0,255,0,0.06) 0px, rgba(0,255,0,0.06) 2px, transparent 2px, transparent 8px)" },
  Ditto: { vibe: "heroic", icon: "👥", pattern: "radial-gradient(circle at 50% 50%, rgba(255,102,0,0.08) 0%, transparent 50%)" },
  "Eye Guy": { vibe: "warrior", icon: "👁️", pattern: "repeating-linear-gradient(135deg, rgba(102,255,51,0.05) 0px, rgba(102,255,51,0.05) 6px, transparent 6px, transparent 12px)" },
  Lodestar: { vibe: "cosmic", icon: "🧲", pattern: "radial-gradient(circle at 50% 50%, rgba(255,204,0,0.1) 0%, transparent 50%)" },
};

const alienAttacks = {
  Heatblast: { name: "Inferno Blast", effect: "fire", color: "#ff4500" },
  "Four Arms": { name: "Quad Smash", effect: "shockwave", color: "#cc0000" },
  Diamondhead: { name: "Crystal Shatter", effect: "crystal", color: "#00ff88" },
  Ghostfreak: { name: "Dark Possession", effect: "ghost", color: "#9933ff" },
  Swampfire: { name: "Methane Burst", effect: "fire", color: "#00cc44" },
  Humungousaur: { name: "Titan Stomp", effect: "shockwave", color: "#8b4513" },
  "Big Chill": { name: "Absolute Zero", effect: "ice", color: "#00aaff" },
  "Alien X": { name: "Reality Rewrite", effect: "cosmic", color: "#aaddff" },
  Upgrade: { name: "Tech Merge", effect: "tech", color: "#00ff00" },
  "Way Big": { name: "Cosonic Beam", effect: "cosmic", color: "#ff3333" },
  XLR8: { name: "Velocity Dash", effect: "speed", color: "#0066ff" },
  Chromastone: { name: "Prism Beam", effect: "crystal", color: "#cc44ff" },
  Rath: { name: "Ravage Slash", effect: "shockwave", color: "#ff6600" },
  Cannonbolt: { name: "Rolling Thunder", effect: "spin", color: "#6699ff" },
  Ripjaws: { name: "Jaw Snap", effect: "bite", color: "#008844" },
  Clockwork: { name: "Time Rewind", effect: "time", color: "#ccaa00" },
  Toepick: { name: "Face of Fear", effect: "ghost", color: "#884400" },
  Feedback: { name: "Overcharge Blast", effect: "electric", color: "#00ff66" },
  Buzzshock: { name: "Chain Lightning", effect: "electric", color: "#22cc00" },
  Armodrillo: { name: "Seismic Pound", effect: "drill", color: "#ff8800" },
  "Water Hazard": { name: "Hydro Cannon", effect: "water", color: "#0066cc" },
  "Grey Matter": { name: "Smart Hack", effect: "tech", color: "#88aa00" },
  Terraspin: { name: "Hurricane Spin", effect: "wind", color: "#88ccff" },
  NRG: { name: "Nuclear Meltdown", effect: "nuclear", color: "#66ff00" },
  Upchuck: { name: "Vomit Volley", effect: "spit", color: "#00cc66" },
  Wildmutt: { name: "Feral Rage", effect: "speed", color: "#ff6600" },
  Stinkfly: { name: "Mucus Stream", effect: "spit", color: "#33cc33" },
  "Echo Echo": { name: "Sonic Boom", effect: "wind", color: "#ffffff" },
  Jetray: { name: "Neuroshock Blast", effect: "electric", color: "#ffcc00" },
  Brainstorm: { name: "Brain Zap", effect: "electric", color: "#0066ff" },
  Spidermonkey: { name: "Web Sling", effect: "water", color: "#3333cc" },
  Goop: { name: "Goop Sludge", effect: "water", color: "#00ff33" },
  AmpFibian: { name: "Electro-Squid", effect: "electric", color: "#3366ff" },
  Fasttrack: { name: "Speed Blitz", effect: "speed", color: "#0033cc" },
  ChamAlien: { name: "Claw Strike", effect: "ghost", color: "#9933cc" },
  Eatle: { name: "Chomp Down", effect: "bite", color: "#cc6600" },
  Juryrigg: { name: "Gadget Bomb", effect: "tech", color: "#ff6600" },
  Bloxx: { name: "Build Wall", effect: "crystal", color: "#cc0000" },
  Gravattack: { name: "Gravity Well", effect: "cosmic", color: "#66ccff" },
  Crashhopper: { name: "Impact Leap", effect: "shockwave", color: "#66ff33" },
  "Ball Weevil": { name: "Goo Grenade", effect: "spit", color: "#66ff00" },
  Walkatrout: { name: "Slippery Escape", effect: "water", color: "#3399ff" },
  "Pesky Dust": { name: "Dream Dust", effect: "ghost", color: "#ff66cc" },
  "Mole-Stache": { name: "Mustache Whip", effect: "drill", color: "#8b4513" },
  "The Worst": { name: "Tough Hide", effect: "fire", color: "#ffcc00" },
  "Kickin Hawk": { name: "Feathered Fury", effect: "speed", color: "#cc6600" },
  Astrodactyl: { name: "Cosmic Dive", effect: "wind", color: "#66cc00" },
  Bullfrag: { name: "Tongue Lash", effect: "bite", color: "#00cc44" },
  Atomix: { name: "Atomic Blast", effect: "nuclear", color: "#ff3300" },
  Gutrot: { name: "Toxic Cloud", effect: "fire", color: "#88cc00" },
  Whampire: { name: "Vampire Drain", effect: "ghost", color: "#660033" },
  Wildvine: { name: "Vine Constrict", effect: "fire", color: "#006600" },
  Blitzwolfer: { name: "Howl Storm", effect: "wind", color: "#aaaaaa" },
  "Snare-oh": { name: "Bandage Bind", effect: "ghost", color: "#ccaa00" },
  Frankenstrike: { name: "Electro Fist", effect: "electric", color: "#00ff00" },
  Ditto: { name: "Duo Strike", effect: "speed", color: "#ff6600" },
  "Eye Guy": { name: "Multi-Beam", effect: "crystal", color: "#66ff33" },
  Lodestar: { name: "Magnetic Surge", effect: "cosmic", color: "#ffcc00" },
};

const AttackBurst = ({ effect, color }) => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!active) return null;

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i / 12) * 360,
    delay: i * 0.04,
    dist: 60 + (i % 4) * 30,
  }));

  return (
    <div className="attack-burst" style={{ "--attack-color": color }}>
      <div className={`attack-core effect-${effect}`} />
      {particles.map((p) => (
        <div
          key={p.id}
          className="attack-particle"
          style={{
            "--angle": `${p.angle}deg`,
            "--dist": `${p.dist}px`,
            "--delay": `${p.delay}s`,
            background: color,
          }}
        />
      ))}
      <div className={`attack-ring effect-${effect}`} />
    </div>
  );
};

const AlienDetail = ({ alien }) => {
  if (!alien) return null;
  const theme = alienThemes[alien.name] || { vibe: "default", icon: "⭐", pattern: "none" };
  const attack = alienAttacks[alien.name] || { name: "Attack", effect: "fire", color: "#00ff88" };
  const [showAttack, setShowAttack] = useState(true);

  useEffect(() => {
    setShowAttack(true);
    const t = setTimeout(() => setShowAttack(false), 1800);
    return () => clearTimeout(t);
  }, [alien.id]);

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
                {showAttack && <AttackBurst effect={attack.effect} color={attack.color} />}
              </div>
              <div className="attack-name-tag" style={{ borderColor: attack.color, color: attack.color }}>
                ⚔️ {attack.name}
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