import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-container container-fluid">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="aboutus">
          About Us
        </Link>
        <h1>POKE TO THE MOON</h1>
        <Link className="nav-links" to="menu">
          Menu
        </Link>
        <Link className="nav-links" to="location">
          Location
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
