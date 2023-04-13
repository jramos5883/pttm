import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.comp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route />
      </Route>
    </Routes>
  );
};

export default App;
