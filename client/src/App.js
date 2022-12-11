import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.js";
import Tours from "./pages/Tours.js";
import Gallery from "./pages/Gallery.js";
import AboutUs from "./pages/AboutUs.js";
import PlanTrip from "./pages/PlanTrip.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plantrip" element={<PlanTrip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
