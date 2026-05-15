import "../../styles/publicBooking.css";

const services = [
  {
    title: "Brand Strategy",
    duration: "60 mins",
  },
  {
    title: "Consultation",
    duration: "30 mins",
  },
  {
    title: "Design Session",
    duration: "90 mins",
  },
];

const PublicBookingPage = () => {
  return (
    <div className="public-wrapper">

      {/* HERO BRAND SECTION */}
      <div className="public-hero">

        <div className="public-logo">
          LS
        </div>

        <h1>Luwie Studio</h1>

        <p>Premium Booking Experience</p>

      </div>

      {/* MAIN CARD */}
      <div className="public-card">

        {/* SERVICES */}
        <div className="section">

          <h3>Select Service</h3>

          <div className="service-grid">

            {services.map((s) => (
              <button key={s.title} className="service-item">
                <span>{s.title}</span>
                <small>{s.duration}</small>
              </button>
            ))}

          </div>

        </div>

        {/* DATE */}
        <div className="section">

          <h3>Select Date</h3>

          <input type="date" />

        </div>

        {/* TIME */}
        <div className="section">

          <h3>Select Time</h3>

          <div className="time-grid">

            <button>9:00 AM</button>
            <button>11:00 AM</button>
            <button>1:00 PM</button>
            <button>4:00 PM</button>

          </div>

        </div>

        {/* DETAILS */}
        <div className="section">

          <h3>Your Details</h3>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />

        </div>

        {/* SUBMIT */}
        <button className="submit-btn">
          Confirm Booking
        </button>

      </div>

    </div>
  );
};

export default PublicBookingPage;