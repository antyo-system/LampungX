export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LampungExplorer</h3>
            <p>Platform wisata terpercaya untuk menjelajahi keindahan Lampung.</p>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              {["instagram", "facebook", "tiktok", "youtube"].map((icon, i) => (
                <i
                  key={i}
                  className={`fab fa-${icon}`}
                  style={{ fontSize: "24px", cursor: "pointer" }}
                ></i>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Link Cepat</h3>
            <a href="#">Beranda</a>
            <a href="#">Destinasi</a>
            <a href="#">Rencana</a>
            <a href="#">Panduan</a>
          </div>

          <div className="footer-section">
            <h3>Kontak</h3>
            <p><i className="fas fa-map-marker-alt"></i> Bandar Lampung, Indonesia</p>
            <p><i className="fas fa-envelope"></i> info@lampungexplorer.id</p>
            <p><i className="fas fa-phone"></i> (0721) 123-456</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LampungExplorer. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
