import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <>
    <nav style={{ display: "flex", padding: "5px" }}>
      <div className="nav-menu">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "blue",
          })}
        >
          Home
        </NavLink>
      </div>

      <div className="nav-menu">
        <NavLink to="/misdemeanour">Misdemeanours</NavLink>
      </div>

      <div className="nav-menu">
        <NavLink to="/confession">Confess To Us</NavLink>
      </div>
    </nav>
  </>
);

export default Nav;
