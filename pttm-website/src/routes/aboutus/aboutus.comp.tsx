import Footer from "../../components/footer/footer.comp";

import "./aboutus.styles.css";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus-pic-container">
        <img
          className="container-fluid"
          src="/images/pokeAboutUs.jpg"
          alt="PokeToTheMoon-Resturant"
        />
      </div>
      <div className="aboutus-content-container container-fluid">
        <h1 className="aboutus-content aboutus-header my-headers">
          - About Us -
        </h1>
        <h4 className="aboutus-content text-indent">
          Welcome to Poke To The Moon, The ultimate destination for poke lovers
          in the city of Orange! Our unique poke shop is dedicated to brining
          you the most flavorful and satisfying poke bowls using the freshiest
          ingredients available. At Poke to the Moon, we take pride in our
          home-made signature sauces that are simply out of this world. Our Moon
          Sauce, a Cajun Garlic Butter, Ape Sauce, a Spicy Soy Garlic, and Doge
          Sauce, a Soy Sesame, are all uniquely crafted to elevate your poke
          bowl experience. Each sauce is carefully prepared with a perfect
          balance of flavors that will leave you wanting more.
        </h4>
        <h4 className="aboutus-content text-indent">
          Our custom poke bowls allow you to create your own masterpiece with a
          wide range of fresh and healthy ingredients to choose from. We also
          offer boujee toppings such as bone marrow, salmon skin, and truffle to
          take your poke bowl to the next level. Located inside the Village
          mall, we offer a comfortable and welcoming atmosphere where you can
          enjoy your poke bowl with family and friends. Our friendly staff is
          dedicated to providing exceptional service and making sure that you
          leave our shop satisfied and happy.
        </h4>
        <h4 className="aboutus-content text-indent">
          Thank you for choosing Poke to the Moon as your go-to poke spot. We
          look forward to serving you soon!
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
