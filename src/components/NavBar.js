import { NavLink, Link } from "react-router-dom";
import nbaLogo from "../pictures/nbalogo.png";

function NavBar() {
  return (
    <header className="main-header">
      <div className="header-image-hover">
        <Link to="/">
          <img src={nbaLogo} alt="wcon" className="header-image" />
        </Link>
      </div>
      <div className="header-options">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/about">About</NavLink>
        </p>
        <p>
          <NavLink to="/library">Library</NavLink>
        </p>
        <p>
          <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </header>
  );
}

export default NavBar;
