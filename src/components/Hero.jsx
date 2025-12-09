import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="container">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Jelajahi Keindahan Lampung
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Temukan wisata tersembunyi & buat perjalanan tak terlupakan
        </motion.p>

        <motion.div
          className="search-box"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          data-aos="zoom-in"
        >
          <i className="fas fa-search" style={{ color: "var(--gray)" }}></i>
          <input
            type="text"
            placeholder="Cari destinasi, kuliner, aktivitas..."
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
