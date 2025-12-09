export default function Destinations() {
  const list = [
    { name: "Pantai Mutun", rating: "★★★★☆ 4.5", desc: "Pantai pasir putih yang menenangkan.", location: "Bandar Lampung", price: "Gratis" },
    { name: "Gunung Pesagi", rating: "★★★★☆ 4.7", desc: "Pemandangan spektakuler di ketinggian.", location: "Lampung Barat", price: "Rp 15.000" },
    { name: "Way Kambas", rating: "★★★★★ 4.9", desc: "Taman nasional gajah sumatera.", location: "Lampung Timur", price: "Rp 25.000" },
  ];

  return (
    <div className="container" id="destinasi" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-down">🏝️ Destinasi Populer</h2>
      <div className="destinations-grid">
        {list.map((d, i) => (
          <div
            className="dest-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <div className="dest-img"></div>
            <div className="dest-info">
              <h3>{d.name}</h3>
              <p className="rating">{d.rating}</p>
              <p>{d.desc}</p>
              <div className="dest-meta">
                <span><i className="fas fa-map-marker-alt"></i> {d.location}</span>
                <span><i className="fas fa-tag"></i> {d.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <button className="btn" style={{ padding: "15px 40px", fontSize: "18px" }}>
          <i className="fas fa-plus"></i> Lihat Semua Destinasi
        </button>
      </div>
    </div>
  );
}
