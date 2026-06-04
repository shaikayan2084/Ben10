import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OmnitrixTransform.css";

const OmnitrixTransform = ({ alien, onComplete, onPlayTransform }) => {
  useEffect(() => {
    if (alien) {
      onPlayTransform?.();
    }
  }, [alien]);

  return (
    <AnimatePresence>
      {alien && (
        <motion.div
          className="transform-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 1200);
          }}
        >
          <motion.div
            className="transform-flash"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="transform-ring-outer">
            <motion.div
              className="transform-ring"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 720, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="transform-ring-inner" />
            </motion.div>
          </div>

          <motion.div
            className="transform-core"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="transform-omnitrix-icon">
              <svg viewBox="0 0 100 100" className="omnitrix-svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#00ff88" strokeWidth="3" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#00ff88" strokeWidth="2" opacity="0.5" />
                <circle cx="50" cy="50" r="12" fill="#00ff88" />
                <text x="50" y="56" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold" fontFamily="Orbitron">10</text>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1={50 + 40 * Math.cos((angle * Math.PI) / 180)}
                    y1={50 + 40 * Math.sin((angle * Math.PI) / 180)}
                    x2={50 + 48 * Math.cos((angle * Math.PI) / 180)}
                    y2={50 + 48 * Math.sin((angle * Math.PI) / 180)}
                    stroke="#00ff88"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="transform-silhouette"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img src={alien?.image} alt="" className="silhouette-img" />
            <div className="silhouette-glow" style={{ background: alien?.gradient }} />
          </motion.div>

          <motion.p
            className="transform-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {alien?.name}
          </motion.p>

          <motion.div
            className="transform-scanlines"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 0.8, repeat: 2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OmnitrixTransform;