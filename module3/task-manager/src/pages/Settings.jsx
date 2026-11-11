import { useState } from "react";

function Settings() {

  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className="container">

      <h1>Settings</h1>

      <p>Manage your preferences here.</p>

      <div className="task-card">

        <h3>User Preferences</h3>

        <div className="setting-item">

          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) =>
                setNotifications(e.target.checked)
              }
            />

            Enable Notifications

          </label>

        </div>

        <div className="setting-item">

          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) =>
                setDarkMode(e.target.checked)
              }
            />

            Enable Dark Mode

          </label>

        </div>

        <p>
          Notifications: {notifications ? "Enabled" : "Disabled"}
        </p>

        <p>
          Dark Mode: {darkMode ? "Enabled" : "Disabled"}
        </p>

      </div>

    </div>

  );
}

export default Settings;