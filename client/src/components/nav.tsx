import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <>
    <nav style={{ display: "flex", padding: "5px" }}>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "blue",
          })}
        >
          Home
        </NavLink>
      </div>

      <div>
        <NavLink to="/misdemeanour">Misdemeanours</NavLink>
      </div>

      <div>
        <NavLink to="/confession">Confess To Us</NavLink>
      </div>
    </nav>
  </>
);

export default Nav;
