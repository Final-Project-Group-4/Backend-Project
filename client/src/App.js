import React from "react";
import {
  Navbar,
  Header,
  MainUp,
  MainDown,
  Contact,
  Footer,
} from "./components/export";
import TourCard from "./components/shared/TourCard/TourCard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainUp />
      {/* <TourCard /> */}
      <MainDown />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
