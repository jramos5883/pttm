import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container container-fluid">
      <Link className="nav-links" to="/">
        Home
      </Link>
      <Link className="nav-links" to="">
        About Us
      </Link>
      <h1>POKE TO THE MOON</h1>
      <Link className="nav-links" to="">
        Menu
      </Link>
      <Link className="nav-links" to="">
        Location
      </Link>
    </div>
  );
};

export default Navbar;
