import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      data-aos="fade-up"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LampungExplorer</h3>
            <p>Platform wisata terpercaya untuk menjelajahi keindahan Lampung.</p>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              {["instagram", "facebook", "tiktok", "youtube"].map((icon, i) => (
                <motion.i
                  key={i}
                  className={`fab fa-${icon}`}
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 250 }}
                ></motion.i>
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
    </motion.footer>
  );
}
