import React, { useState, useRef, useEffect, useCallback } from "react";
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

const alienAnimations = {
  Heatblast:    { effect: "fire",       label: "Inferno Blast" },
  "Four Arms":  { effect: "shake",      label: "Quad Smash" },
  Diamondhead:  { effect: "crystal",    label: "Crystal Shatter" },
  Ghostfreak:   { effect: "ghost",      label: "Dark Possession" },
  Upgrade:      { effect: "scanlines",  label: "Tech Merge" },
  "Way Big":    { effect: "grow",       label: "Cosonic Beam" },
  XLR8:         { effect: "speed",      label: "Velocity Dash" },
  Cannonbolt:   { effect: "spin",       label: "Rolling Thunder" },
  Ripjaws:      { effect: "ripple",     label: "Jaw Snap" },
  Buzzshock:    { effect: "arcs",       label: "Chain Lightning" },
  "Grey Matter": { effect: "hologram",  label: "Smart Hack" },
  Upchuck:      { effect: "absorb",     label: "Vomit Volley" },
  Swampfire:    { effect: "vines",      label: "Methane Burst" },
  Humungousaur: { effect: "quake",      label: "Titan Stomp" },
  "Big Chill":  { effect: "frost",      label: "Absolute Zero" },
  "Alien X":    { effect: "galaxy",     label: "Reality Rewrite" },
  Chromastone:  { effect: "rainbow",    label: "Prism Beam" },
  Rath:         { effect: "roar",       label: "Ravage Slash" },
  Clockwork:    { effect: "gears",      label: "Time Rewind" },
  Armodrillo:   { effect: "drill",      label: "Seismic Pound" },
  "Water Hazard": { effect: "jets",     label: "Hydro Cannon" },
  Terraspin:    { effect: "tornado",    label: "Hurricane Spin" },
  NRG:          { effect: "nuclear",    label: "Nuclear Meltdown" },
  Toepick:      { effect: "smoke",      label: "Face of Fear" },
  Feedback:     { effect: "lightning",  label: "Overcharge Blast" }
};

const AlienCard = React.memo(({ alien, onSelect, isSelected, sectionIndex }) => {
  const [clicked, setClicked] = useState(false);
  const [entered, setEntered] = useState(false);
  const cardRef = useRef(null);
  const anim = alienAnimations[alien.name] || { effect: "fire", label: "Attack" };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setEntered(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleClick = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 700);
    onSelect(alien);
  }, [alien, onSelect]);

  return (
    <motion.div
      ref={cardRef}
      className={`alien-card anim-${alien.name.replace(/\s+/g, "").toLowerCase()} ${anim.effect} ${isSelected ? "selected" : ""} ${clicked ? "clicked" : ""} ${entered ? "entered" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -12, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
      onHoverEnd={() => setClicked(false)}
      onClick={handleClick}
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

      <div className="card-number">#{(sectionIndex + 1).toString().padStart(2, "0")}</div>
      <div className="card-click-ripple" />

      <div className={`effect-overlay effect-${anim.effect}`}>
        {anim.effect === "fire" && <>
          <div className="fp f1" /><div className="fp f2" /><div className="fp f3" />
          <div className="fp f4" /><div className="fp f5" /><div className="fp f6" />
        </>}
        {anim.effect === "crystal" && <>
          <div className="cs s1" /><div className="cs s2" /><div className="cs s3" />
          <div className="cs s4" />
        </>}
        {anim.effect === "ghost" && <>
          <div className="gt t1" /><div className="gt t2" /><div className="gt t3" />
        </>}
        {anim.effect === "scanlines" && <>
          <div className="sl-line" /><div className="sl-line" /><div className="sl-line" />
          <div className="sl-line" /><div className="sl-line" />
        </>}
        {anim.effect === "grow" && <div className="gw-glow" />}
        {anim.effect === "speed" && <>
          <div className="sb s1" /><div className="sb s2" /><div className="sb s3" />
          <div className="sb s4" />
        </>}
        {anim.effect === "spin" && <div className="cb-spin" />}
        {anim.effect === "ripple" && <>
          <div className="wr r1" /><div className="wr r2" /><div className="wr r3" />
        </>}
        {anim.effect === "arcs" && <>
          <div className="ea a1" /><div className="ea a2" /><div className="ea a3" />
          <div className="ea a4" />
        </>}
        {anim.effect === "hologram" && <>
          <div className="he e1" /><div className="he e2" /><div className="he e3" />
          <div className="he e4" />
        </>}
        {anim.effect === "absorb" && <div className="uo-orb" />}
        {anim.effect === "vines" && <>
          <div className="sv v1" /><div className="sv v2" /><div className="sv v3" />
          <div className="sv v4" />
        </>}
        {anim.effect === "quake" && <>
          <div className="hc-crack" /><div className="hc-crack" /><div className="hc-crack" />
        </>}
        {anim.effect === "frost" && <>
          <div className="bf f1" /><div className="bf f2" /><div className="bf f3" />
        </>}
        {anim.effect === "galaxy" && <>
          <div className="ax-star" /><div className="ax-star" /><div className="ax-star" />
          <div className="ax-star" /><div className="ax-star" /><div className="ax-star" />
          <div className="ax-nebula" />
        </>}
        {anim.effect === "rainbow" && <div className="cc-prism" />}
        {anim.effect === "roar" && <>
          <div className="rr-slash" /><div className="rr-slash" /><div className="rr-slash" />
        </>}
        {anim.effect === "gears" && <>
          <div className="cg g1" /><div className="cg g2" />
        </>}
        {anim.effect === "drill" && <>
          <div className="ad-dust" /><div className="ad-dust" /><div className="ad-dust" />
        </>}
        {anim.effect === "jets" && <>
          <div className="wj j1" /><div className="wj j2" />
        </>}
        {anim.effect === "tornado" && <div className="ts-swirl" />}
        {anim.effect === "nuclear" && <>
          <div className="nr-ring" /><div className="nr-ring" /><div className="nr-pulse" />
        </>}
        {anim.effect === "smoke" && <>
          <div className="td-smoke" /><div className="td-smoke" />
        </>}
        {anim.effect === "lightning" && <>
          <div className="fb-bolt" /><div className="fb-bolt" /><div className="fb-bolt" />
        </>}
      </div>
    </motion.div>
  );
});

const AlienGrid = ({ onSelectAlien, selectedAlien }) => {
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
              {sectionAliens.map((alien, index) => (
                <AlienCard
                  key={alien.id}
                  alien={alien}
                  onSelect={onSelectAlien}
                  isSelected={selectedAlien?.id === alien.id}
                  sectionIndex={index}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AlienGrid;