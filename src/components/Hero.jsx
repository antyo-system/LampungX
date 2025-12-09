// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Jelajahi Keindahan Lampung</h1>
        <p>Temukan wisata tersembunyi & buat perjalanan tak terlupakan</p>
        <div className="search-box">
          <i className="fas fa-search" style={{ color: "white" }}></i>
          <input
            type="text"
            placeholder="Cari destinasi, kuliner, aktivitas..."
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
