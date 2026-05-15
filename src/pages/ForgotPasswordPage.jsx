import "../styles/auth.css";

const ForgotPasswordPage = () => {
  return (
    <div className="auth-wrapper">

      <div className="auth-bubble auth-bubble-one"></div>
      <div className="auth-bubble auth-bubble-two"></div>

      <div className="auth-card">

        <div className="auth-header">

          <h1>Recover account</h1>

          <p>
            Enter your email address and we’ll send
            you recovery instructions.
          </p>

        </div>

        <form className="auth-form">

          <div className="auth-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
              className="auth-input"
            />

          </div>

          <button className="auth-btn">
            Send Recovery Link
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgotPasswordPage;