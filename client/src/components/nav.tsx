import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <>
    <nav style={{ display: "flex", padding: "5px" }}>
      <div className="nav-menu">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Home
        </NavLink>
      </div>

      <div className="nav-menu">
        <NavLink
          to="/misdemeanour"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Misdemeanours
        </NavLink>
      </div>

      <div className="nav-menu">
        <NavLink
          to="/confession"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Confess To Us
        </NavLink>
      </div>
    </nav>
  </>
);

export default Nav;
