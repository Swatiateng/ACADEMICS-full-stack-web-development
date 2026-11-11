import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Task Manager</h2>

      <div className="nav-links">

        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;