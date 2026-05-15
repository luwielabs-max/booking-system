import { Outlet, Link } from "react-router-dom";
import "../styles/dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        {/* LOGO */}
        <div className="dashboard-logo">

          <div className="dashboard-logo-icon"></div>

          <div>
            <h1>Booker</h1>
            <p>Premium Scheduling</p>
          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="dashboard-nav">

          <Link
            to="/dashboard"
            className="dashboard-nav-item active"
          >
            Overview
          </Link>

          <Link
            to="/dashboard/bookings"
            className="dashboard-nav-item"
          >
            Bookings
          </Link>

          <Link
            to="/dashboard/services"
            className="dashboard-nav-item"
          >
            Services
          </Link>

          <Link
            to="/dashboard/settings"
            className="dashboard-nav-item"
          >
            Settings
          </Link>

        </nav>

        {/* LOGOUT */}
        <button className="dashboard-logout-btn">
          Logout
        </button>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        {/* TOPBAR */}
        <div className="dashboard-topbar">

          <div>
            <h2>Dashboard</h2>
            <p>
              Manage your bookings and services.
            </p>
          </div>

        </div>

        {/* PAGE CONTENT */}
        <div className="dashboard-content">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;