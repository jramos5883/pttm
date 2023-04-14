import MyMap from "../../components/map/map.comp";
import Footer from "../../components/footer/footer.comp";

import "./location.styles.css";

const Location = () => {
  return (
    <div>
      <MyMap />
      <h2>Business Information</h2>
      <div className="info-content-container">
        <div className="info-content">
          <p>Address:</p>
          <p>1500 E Village Way, Ste 2221 Orange, Ca 92865</p>

          <p>Phone Number: </p>
          <p>(657)224-9081</p>
        </div>
        <div className="hours-container">
          <p>Monday: 11:00AM - 7:00PM</p>
          <p>Tuesday: 11:00AM - 7:00PM</p>
          <p>Wensday: 11:00AM - 7:00PM</p>
          <p>Thursday: 11:00AM - 7:00PM</p>
          <p>Friday: 11:00AM - 7:00PM</p>
          <p>Saturday: 11:00AM - 6:30PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
