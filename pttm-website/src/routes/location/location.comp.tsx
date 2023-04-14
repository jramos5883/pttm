import MyMap from "../../components/map/map.comp";
import Footer from "../../components/footer/footer.comp";

import "./location.styles.css";

const Location = () => {
  return (
    <div>
      <MyMap />
      <div className="info-content-container container-fluid">
        <h2 className="info-header">Business Information</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="info-content">
              <h3>Address:</h3>
              <h4>1500 E Village Way, Ste 2221 Orange, Ca 92865</h4>

              <h3>Phone Number: </h3>
              <h4>(657)224-9081</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hours-container">
              <h3>Hours of Operation:</h3>
              <h4>Monday: 11:00AM - 7:00PM</h4>
              <h4>Tuesday: 11:00AM - 7:00PM</h4>
              <h4>Wensday: 11:00AM - 7:00PM</h4>
              <h4>Thursday: 11:00AM - 7:00PM</h4>
              <h4>Friday: 11:00AM - 7:00PM</h4>
              <h4>Saturday: 11:00AM - 6:30PM</h4>
              <h4>Sunday: Closed</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
