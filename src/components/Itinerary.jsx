export default function Itinerary() {
  const schedule = [
    { time: "08.00 - 09.00", title: "Sarapan Lembur Sari", desc: "Kuliner khas Lampung" },
    { time: "09.30 - 12.00", title: "Pantai Mutun", desc: "Wisata pantai & foto" }
  ];

  return (
    <div className="container" id="itinerary" data-aos="fade-up">
      <h2 className="section-title">🗺️ Rencana Perjalanan Populer</h2>

      <div className="card itinerary-card" data-aos="zoom-in">
        <div className="itinerary-grid">
          <div className="itinerary-summary">
            <h3 className="itinerary-title">Trip 3 Hari Lampung</h3>
            <p className="itinerary-subtitle">Rute terbaik untuk first-timer</p>

            <div className="itinerary-cost">
              <div className="cost-row">
                <span>Estimasi Biaya:</span>
                <span className="cost-value">Rp 385.000/orang</span>
              </div>
              <button className="btn btn-block">
                <i className="fas fa-eye"></i> Lihat Detail
              </button>
            </div>
          </div>

          <div className="itinerary-timeline">
            {schedule.map(({ time, title, desc }, i) => (
              <div key={time} className="timeline-item" data-aos="fade-right" data-aos-delay={i * 100}>
                <div className="timeline-time">{time}</div>
                <div className="timeline-content">
                  <strong>{title}</strong>
                  <div className="timeline-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
