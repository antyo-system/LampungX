import { motion } from "framer-motion";

export default function Itinerary() {
  return (
    <div className="container" id="itinerary" data-aos="fade-up">
      <h2 className="section-title">🗺️ Rencana Perjalanan Populer</h2>

      <motion.div
        className="card"
        style={{ margin: "30px 0" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "30px" }}>
          <div>
            <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Trip 3 Hari Lampung</h3>
            <p style={{ color: "var(--gray)", marginBottom: "20px" }}>Rute terbaik untuk first-timer</p>
            <div style={{ background: "var(--light)", padding: "15px", borderRadius: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Estimasi Biaya:</span>
                <span style={{ fontWeight: "bold", color: "var(--primary)" }}>Rp 385.000/orang</span>
              </div>
              <button className="btn" style={{ width: "100%" }}>
                <i className="fas fa-eye"></i> Lihat Detail
              </button>
            </div>
          </div>
          <div>
            {[
              ["08.00 - 09.00", "Sarapan Lembur Sari", "Kuliner khas Lampung"],
              ["09.30 - 12.00", "Pantai Mutun", "Wisata pantai & foto"]
            ].map(([time, title, desc], i) => (
              <motion.div
                key={i}
                className="timeline-item"
                style={{ display: "flex", marginBottom: "15px" }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div style={{
                  background: "var(--primary)", color: "white", padding: "8px 15px",
                  borderRadius: "8px", minWidth: "120px", textAlign: "center"
                }}>
                  {time}
                </div>
                <div style={{
                  background: "white", padding: "12px", borderRadius: "0 8px 8px 8px",
                  flex: 1, marginLeft: "15px", border: "1px solid #eee"
                }}>
                  <strong>{title}</strong>
                  <div style={{ color: "var(--gray)" }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
