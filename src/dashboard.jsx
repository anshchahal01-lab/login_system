import { useState } from "react";

function Dashboard({ setLoggedIn }) {
  const [showToken, setShowToken] = useState(false);

  const token = localStorage.getItem("token");

  if (!token) {
    return <h2>Access Denied</h2>;
  }

  const user = JSON.parse(atob(token));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div className="dashboard-page">

      <nav className="navbar">

        <div className="brand">
          🔐 Secure<span>Auth</span>
        </div>

        <div className="nav-user">
          <div className="avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div>
            <b>{user.username}</b>
            <small>{user.role}</small>
          </div>

          <button className="logout-small" onClick={handleLogout}>
            Logout
          </button>
        </div>

      </nav>

      <main className="dashboard-content">

        <div className="welcome">
          <div>
            <p className="welcome-label">AUTHENTICATION SUCCESSFUL ✓</p>

            <h1>
              Welcome back, <span>{user.username}</span> 👋
            </h1>

            <p>
              Your account is securely authenticated and your dashboard
              is protected.
            </p>
          </div>

          <div className="shield">
            🛡️
          </div>
        </div>

        <div className="stats">

          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <div>
              <small>USER ID</small>
              <h2>{user.userId}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛡️</div>
            <div>
              <small>ROLE</small>
              <h2>{user.role}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div>
              <small>STATUS</small>
              <h2 className="online">Online</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔑</div>
            <div>
              <small>TOKEN</small>
              <h2>Active</h2>
            </div>
          </div>

        </div>

        <div className="grid">

          <div className="panel">

            <div className="panel-header">
              <h2>👤 User Profile</h2>
              <span className="badge">VERIFIED</span>
            </div>

            <div className="profile">

              <div className="big-avatar">
                {user.username.charAt(0).toUpperCase()}
              </div>

              <div className="profile-info">
                <h2>{user.username}</h2>

                <p>
                  <span>🆔</span>
                  User ID: {user.userId}
                </p>

                <p>
                  <span>🛡️</span>
                  Role: {user.role}
                </p>

                <p>
                  <span>🕒</span>
                  Login: {user.loginTime}
                </p>
              </div>

            </div>

          </div>

          <div className="panel">

            <div className="panel-header">
              <h2>🔐 Authentication</h2>
              <span className="secure">SECURE</span>
            </div>

            <div className="auth-status">

              <div className="check">✓</div>

              <div>
                <h3>JWT Token Active</h3>

                <p>
                  Your authentication token is currently stored
                  securely in browser storage.
                </p>
              </div>

            </div>

            <button
              className="token-button"
              onClick={() => setShowToken(!showToken)}
            >
              {showToken ? "Hide Token" : "View Token"}
            </button>

            {showToken && (
              <div className="token">
                {token}
              </div>
            )}

          </div>

        </div>

        <div className="activity">

          <h2>📊 Security Activity</h2>

          <div className="activity-item">
            <span className="activity-icon">🔓</span>

            <div>
              <b>Login Successful</b>
              <p>Authentication completed successfully.</p>
            </div>

            <span className="time">Just now</span>
          </div>

          <div className="activity-item">
            <span className="activity-icon">🎫</span>

            <div>
              <b>JWT Token Generated</b>
              <p>Simulated authentication token created.</p>
            </div>

            <span className="time">Just now</span>
          </div>

          <div className="activity-item">
            <span className="activity-icon">🛡️</span>

            <div>
              <b>Dashboard Protected</b>
              <p>Protected UI access granted.</p>
            </div>

            <span className="time">Just now</span>
          </div>

        </div>

        <button className="logout-button" onClick={handleLogout}>
          🚪 Logout from SecureAuth
        </button>

      </main>

    </div>
  );
}

export default Dashboard;