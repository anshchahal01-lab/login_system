import { useState } from "react";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        const user = {
          userId: 101,
          username: "admin",
          role: "Admin",
          loginTime: new Date().toLocaleString()
        };

        const token = btoa(JSON.stringify(user));

        localStorage.setItem("token", token);

        setLoggedIn(true);
      } else {
        setLoading(false);
        setError("Invalid username or password");
      }
    }, 1200);
  };

  return (
    <div className="auth-page">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="login-card">

        <div className="logo">
          🔐
        </div>

        <h1>Secure<span>Login</span></h1>

        <p className="subtitle">
          Welcome back! Please login to your account.
        </p>

        <div className="input-group">
          <label>Username</label>

          <div className="input-wrapper">
            <span>👤</span>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="input-wrapper">
            <span>🔑</span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {password && (
          <div className="strength">
            <div
              className={
                password.length >= 6
                  ? "strength-bar strong"
                  : "strength-bar weak"
              }
            ></div>

            <small>
              {password.length >= 6
                ? "Password strength: Good"
                : "Password strength: Weak"}
            </small>
          </div>
        )}

        {error && (
          <div className="error-box">
            ⚠️ {error}
          </div>
        )}

        <button
          className="login-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Authenticating...
            </>
          ) : (
            <>
              Login →
            </>
          )}
        </button>

        <div className="demo-box">
          <b>Demo Credentials</b>
          <br />
          Username: <span>admin</span>
          <br />
          Password: <span>1234</span>
        </div>

        <p className="security">
          🛡️ Secured with simulated JWT authentication
        </p>

      </div>
    </div>
  );
}

export default Login;