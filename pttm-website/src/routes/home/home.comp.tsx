import "./home.styles.css";

import Carousel from "../../components/carousel/carousel.comp";
import Footer from "../../components/footer/footer.comp";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="home-container container-fluid">
        <h3 className="home-opener">
          Delicious Poke only at Poke To The Moon!
        </h3>
        <h2 className="home-header">What is Poke?</h2>
        <h4 className="home-intro text-indent">
          A poke bowl is a Hawaiian dish that typically consists of marinated
          diced raw fish served over a bed of rice with various toppings such as
          vegatables, fruits, and sauces. It is a healthy and flavorful meal
          that has become popular globally for its unique taste and versatility.
          Here at Poke to the Moon, we emphasize poke&apos;s versatility with
          our boujee add ons that are unique to our poke place. By combining
          traditional flavors with innovative twists, we strive to deliver a
          memorable culinary experience that showcases the best of what poke
          cuisine has to offer.
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
