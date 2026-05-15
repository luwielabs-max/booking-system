import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/hero.css";


const LandingPage = () => {
  return (
    <div className="hero-wrapper">

      {/* BACKGROUND BUBBLES */}
      <div className="hero-bubble hero-bubble-one"></div>
      <div className="hero-bubble hero-bubble-two"></div>

      {/* NAVBAR */}
      <nav className="hero-navbar">

        <div className="hero-navbar-inner">

          {/* BRAND */}
          <div className="hero-brand">

            <div className="hero-brand-text">
              <h1>Booker</h1>
              <p>Premium Scheduling</p>
            </div>

          </div>

          {/* NAV BUTTON */}
          <Link to="/register">

  <button className="hero-primary-btn">
    Book Now
  </button>

</Link>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="hero-content hero-grid">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-text-wrapper"
        >

          {/* LABEL */}
          <div className="hero-label">

            <div className="hero-label-dot"></div>

            <p>Modern Booking Infrastructure</p>

          </div>

          {/* TITLE */}
          <h1 className="hero-title">
            Elegant
            <span className="hero-title-muted">
              {" "}scheduling
            </span>
            <br />
            for modern businesses.
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description">
            Simple scheduling experience for customers,
            powerful management tools for service businesses
            that care about premium experience.
          </p>

          {/* ACTIONS */}
          <div className="hero-actions">

           <Link to="/register">

  <button className="hero-primary-btn">
    Start Booking
  </button>

</Link>

            <button className="hero-secondary-btn">
              View Demo
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="booking-card-wrapper"
        >

          <div className="booking-card">

            {/* HEADER */}
            <div className="booking-card-header">

              <h3>Book an appointment</h3>

              <p>
                Schedule your session in minutes.
              </p>

            </div>

            {/* SERVICES */}
            <div className="booking-section">

              <label>Select Service</label>

              <div className="service-options">

                <button className="service-btn active">
                  Branding
                </button>

                <button className="service-btn">
                  Consultation
                </button>

                <button className="service-btn">
                  Design Session
                </button>

              </div>

            </div>

            {/* DATE */}
            <div className="booking-section">

              <label>Select Date</label>

              <input
                type="date"
                className="booking-input"
              />

            </div>

            {/* TIME */}
            <div className="booking-section">

              <label>Available Time</label>

              <div className="time-grid">

                <button className="time-btn active">
                  9:00 AM
                </button>

                <button className="time-btn">
                  11:00 AM
                </button>

                <button className="time-btn">
                  1:00 PM
                </button>

                <button className="time-btn">
                  4:00 PM
                </button>

              </div>

            </div>

            {/* USER INFO */}
            <div className="booking-section">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                className="booking-input"
              />

            </div>

            <div className="booking-section">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="john@email.com"
                className="booking-input"
              />

            </div>

            {/* BUTTON */}
            <button className="booking-submit-btn">
              Confirm Booking
            </button>

          </div>

        </motion.div>

      </section>

    </div>
  );
};

export default LandingPage;