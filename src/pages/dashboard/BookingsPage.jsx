import "../../styles/bookings.css";

const bookings = [
  {
    name: "Sarah Johnson",
    service: "Brand Strategy",
    date: "12 May 2026",
    time: "10:00 AM",
    status: "pending",
  },
  {
    name: "Michael Lee",
    service: "Consultation",
    date: "13 May 2026",
    time: "1:00 PM",
    status: "confirmed",
  },
  {
    name: "Amanda Cole",
    service: "Design Session",
    date: "14 May 2026",
    time: "4:00 PM",
    status: "completed",
  },
];

const BookingsPage = () => {
  return (
    <div className="bookings-wrapper">

      {/* HEADER */}
      <div className="bookings-header">

        <div>
          <h1>Bookings</h1>
          <p>Manage all incoming customer bookings</p>
        </div>

        {/* SEARCH (UI ONLY) */}
        <input
          type="text"
          placeholder="Search bookings..."
          className="bookings-search"
        />

      </div>

      {/* TABLE */}
      <div className="bookings-table">

        <div className="table-header">

          <span>Name</span>
          <span>Service</span>
          <span>Date</span>
          <span>Time</span>
          <span>Status</span>
          <span>Action</span>

        </div>

        {bookings.map((b, i) => (
          <div key={i} className="table-row">

            <span className="name">{b.name}</span>
            <span>{b.service}</span>
            <span>{b.date}</span>
            <span>{b.time}</span>

            <span>
              <span className={`status ${b.status}`}>
                {b.status}
              </span>
            </span>

            <div className="actions">

              <button className="approve">Approve</button>
              <button className="reject">Reject</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default BookingsPage;