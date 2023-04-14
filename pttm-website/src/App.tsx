import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.comp";
import Home from "./routes/home/home.comp";
import AboutUs from "./routes/aboutus/aboutus.comp";
import Menu from "./routes/menu/menu.comp";
import Location from "./routes/location/location.comp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="menu" element={<Menu />} />
        <Route path="location" element={<Location />} />
      </Route>
    </Routes>
  );
};

export default App;
