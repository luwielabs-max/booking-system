import "../../styles/overview.css";

const stats = [
  {
    title: "Total Bookings",
    value: "128",
  },
  {
    title: "Pending Requests",
    value: "14",
  },
  {
    title: "Completed Sessions",
    value: "96",
  },
  {
    title: "Cancelled",
    value: "08",
  },
];

const bookings = [
  {
    name: "Sarah Johnson",
    service: "Brand Strategy",
    status: "Confirmed",
    time: "10:00 AM",
  },
  {
    name: "Michael Lee",
    service: "Consultation",
    status: "Pending",
    time: "1:00 PM",
  },
  {
    name: "Amanda Cole",
    service: "Design Session",
    status: "Completed",
    time: "4:00 PM",
  },
];

const OverviewPage = () => {
  return (
    <div className="overview-wrapper">

      {/* HEADER */}
      <div className="overview-header">

        <div>

          <h1>Welcome back</h1>

          <p>
            Here’s an overview of your booking system.
          </p>

        </div>

      </div>

      {/* STATS */}
      <div className="stats-grid">

        {stats.map((item) => (

          <div
            key={item.title}
            className="stats-card"
          >

            <p>{item.title}</p>

            <h2>{item.value}</h2>

          </div>

        ))}

      </div>

      {/* LOWER GRID */}
      <div className="overview-lower-grid">

        {/* RECENT BOOKINGS */}
        <div className="overview-card">

          <div className="overview-card-header">

            <h3>Recent Bookings</h3>

            <button>
              View All
            </button>

          </div>

          <div className="bookings-list">

            {bookings.map((booking) => (

              <div
                key={booking.name}
                className="booking-item"
              >

                <div>

                  <h4>{booking.name}</h4>

                  <p>{booking.service}</p>

                </div>

                <div className="booking-meta">

                  <span
                    className={`booking-status ${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>

                  <small>{booking.time}</small>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="overview-card">

          <div className="overview-card-header">

            <h3>Quick Actions</h3>

          </div>

          <div className="quick-actions">

            <button>
              Add Service
            </button>

            <button>
              Create Availability
            </button>

            <button>
              Share Booking Link
            </button>

            <button>
              View Analytics
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OverviewPage;