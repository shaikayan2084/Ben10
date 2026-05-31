import React, { useRef } from "react";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { aliens } from "../data/aliens";

const Hero = ({ onSelectAlien }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const uniqueAliens = aliens.filter((a, i, arr) => 
    arr.findIndex(x => x.cardImage === a.cardImage) === i
  );

  return (
    <section ref={ref} className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            ⚡ It's Hero Time!
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            BEN <span className="highlight">10</span>
          </motion.h1>
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Explore the complete Omnitrix alien database. Discover their powers, weaknesses, and epic journeys across the Ben 10 universe.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button className="cta-primary" onClick={() => document.getElementById("aliens")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Aliens
            </button>
            <button className="cta-secondary" onClick={() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" })}>
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-omnitrix"
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="omnitrix-ring">
            <div className="omnitrix-core">
              <div className="omnitrix-glow"></div>
              <span className="omnitrix-text">10</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="alien-strip"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="strip-label">SCROLL TO EXPLORE ▼</p>
      </motion.div>
    </section>
  );
};

export default Hero;
