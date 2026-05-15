import "../styles/auth.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="auth-wrapper">

      {/* BUBBLES */}
      <div className="auth-bubble auth-bubble-one"></div>
      <div className="auth-bubble auth-bubble-two"></div>

      {/* CARD */}
      <div className="auth-card">

        {/* HEADER */}
        <div className="auth-header">

          <h1>Welcome back</h1>

          <p>
            Login to manage your bookings,
            services and scheduling system.
          </p>

        </div>

        {/* FORM */}
        <form className="auth-form">

          <div className="auth-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
              className="auth-input"
            />

          </div>

          <div className="auth-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              className="auth-input"
            />

          </div>

            <div className="auth-forgot-wrapper">

            <Link
            to="/forgot-password"
                className="auth-forgot-link"
            >
                Forgot password?
            </Link>

                </div>

          <button className="auth-btn">
            Login
          </button>

        </form>

        {/* FOOTER */}
        <div className="auth-footer">

  Don’t have an account?{" "}

  <Link to="/register">
    <span>Create one</span>
  </Link>

</div>

      </div>

    </div>
  );
};

export default LoginPage;