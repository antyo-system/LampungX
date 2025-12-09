import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container nav-container">
          <div className="logo">
            <i className="fas fa-mountain"></i>
            <span>LampungExplorer</span>
          </div>

          <div className="desktop-nav">
            <a href="#home">Beranda</a>
            <a href="#destinasi">Destinasi</a>
            <a href="#itinerary">Rencana</a>
            <a href="#guide">Panduan</a>
            <a href="#about">Tentang</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              <i className="fas fa-user"></i> Masuk
            </motion.button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setOpen(true)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </motion.nav>

      {open && (
        <>
          <div className="overlay active" onClick={() => setOpen(false)}></div>
          <div className="mobile-nav active">
            <button className="close-menu" onClick={() => setOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
            <a href="#home">Beranda</a>
            <a href="#destinasi">Destinasi</a>
            <a href="#itinerary">Rencana</a>
            <a href="#guide">Panduan</a>
            <a href="#about">Tentang</a>
            <a href="#login">
              <i className="fas fa-user"></i> Masuk
            </a>
          </div>
        </>
      )}
    </>
  );
}
