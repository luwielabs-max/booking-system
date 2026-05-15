import "../styles/auth.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="auth-wrapper">

      {/* BUBBLES */}
      <div className="auth-bubble auth-bubble-one"></div>
      <div className="auth-bubble auth-bubble-two"></div>

      {/* CARD */}
      <div className="auth-card">

        {/* HEADER */}
        <div className="auth-header">

          <h1>Create account</h1>

          <p>
            Launch your premium booking system
            in just a few minutes.
          </p>

        </div>

        {/* FORM */}
        <form className="auth-form">

          <div className="auth-group">

            <label>Business Name</label>

            <input
              type="text"
              placeholder="Luxe Studio"
              className="auth-input"
            />

          </div>

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
              placeholder="Create a password"
              className="auth-input"
            />

          </div>

          <button className="auth-btn">
            Create Account
          </button>

        </form>

        {/* FOOTER */}
       <div className="auth-footer">

        Already have an account?{" "}

        <Link to="/login">
            <span>Login</span>
        </Link>

        </div>

      </div>

    </div>
  );
};

export default RegisterPage;