import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
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
            <button className="btn btn-secondary">
              <i className="fas fa-user"></i> Masuk
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setOpen(true)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

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
