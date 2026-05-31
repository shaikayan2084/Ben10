import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onSelectAlien, activeAlien }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      <ul className="nav-links">
        <li className={!activeAlien ? "active" : ""} onClick={() => { onSelectAlien(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Home</li>
        <li><a href="#aliens" onClick={() => onSelectAlien(null)}>Aliens</a></li>
        <li><a href="#details">Details</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-fill">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
