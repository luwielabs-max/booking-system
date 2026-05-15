import "../../styles/settings.css";

const SettingsPage = () => {
  return (
    <div className="settings-wrapper">

      {/* HEADER */}
      <div className="settings-header">

        <div>

          <h1>Settings</h1>

          <p>
            Manage your business profile and booking preferences.
          </p>

        </div>

      </div>

      {/* GRID */}
      <div className="settings-grid">

        {/* BUSINESS INFO */}
        <div className="settings-card">

          <div className="settings-card-header">

            <h3>Business Information</h3>

            <p>
              Update your public business profile.
            </p>

          </div>

          <div className="settings-form">

            <div className="settings-input-group">

              <label>Business Name</label>

              <input
                type="text"
                placeholder="Luwie Studio"
              />

            </div>

            <div className="settings-input-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="hello@luwie.com"
              />

            </div>

            <div className="settings-input-group">

              <label>Business Description</label>

              <textarea
                placeholder="Tell customers about your business..."
              ></textarea>

            </div>

            <button className="settings-save-btn">
              Save Changes
            </button>

          </div>

        </div>

        {/* BOOKING LINK */}
        <div className="settings-card">

          <div className="settings-card-header">

            <h3>Booking Link</h3>

            <p>
              Share your booking page with customers.
            </p>

          </div>

          <div className="booking-link-box">

            <input
              type="text"
              value="booker.com/luwie-studio"
              readOnly
            />

            <button>
              Copy Link
            </button>

          </div>

          {/* BRANDING */}
<div className="branding-section">

  <h4>Branding</h4>

  {/* LOGO */}
  <div className="branding-logo-upload">

    <div className="branding-logo-preview">
      LS
    </div>

    <button>
      Upload Logo
    </button>

  </div>

  {/* COLOR */}
  <div className="brand-colors">

    <button className="brand-color purple"></button>

    <button className="brand-color black active"></button>

    <button className="brand-color blue"></button>

    <button className="brand-color emerald"></button>

  </div>

</div>

          {/* AVAILABILITY */}
          <div className="availability-section">

            <h4>Availability</h4>

            <div className="availability-grid">

              <button className="active">
                Mon
              </button>

              <button className="active">
                Tue
              </button>

              <button className="active">
                Wed
              </button>

              <button>
                Thu
              </button>

              <button>
                Fri
              </button>

              <button>
                Sat
              </button>

              <button>
                Sun
              </button>

            </div>

          </div>

          {/* LOGOUT */}
          <div className="logout-section">

            <button className="logout-btn">
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SettingsPage;