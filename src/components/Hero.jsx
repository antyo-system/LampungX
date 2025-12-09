export default function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="container">
        <h1>Jelajahi Keindahan Lampung</h1>

        <p>Temukan wisata tersembunyi & buat perjalanan tak terlupakan</p>

        <div className="search-box" data-aos="zoom-in">
          <i className="fas fa-search" style={{ color: "var(--gray)" }}></i>
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
