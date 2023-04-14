import { Fragment } from "react";
import Footer from "../../components/footer/footer.comp";

import "./menu.styles.css";

const Menu = () => {
  return (
    <Fragment>
      <div className="menu-container">
        <img
          className="container-fluid"
          src="/images/pokemenu.png"
          alt="PokeToTheMoon-Resturant"
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Menu;
