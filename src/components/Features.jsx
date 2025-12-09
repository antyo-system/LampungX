export default function Features() {
  const list = [
    {
      icon: "fa-route",
      title: "Rencana Perjalanan ke Neraka",
      desc: "Buat itinerary custom sesuai keinginanmu",
    },
    {
      icon: "fa-map-marked-alt",
      title: "Peta Offline",
      desc: "Akses peta tanpa internet connection",
    },
    {
      icon: "fa-user-friends",
      title: "Panduan Lokal",
      desc: "Tour guide verified oleh komunitas",
    },
    {
      icon: "fa-calculator",
      title: "Kalkulator Biaya",
      desc: "Estimasi budget perjalanan akurat",
    },
  ];

  return (
    <div className="container" data-aos="fade-up">
      <div className="features">
        {list.map((f, i) => (
          <div className="feature-item" key={i} data-aos="zoom-in-up">
            <div className="feature-icon">
              <i className={`fas ${f.icon}`}></i>
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
