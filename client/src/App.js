
import React from 'react';
import Container from '@mui/material/Container';

import {
  Navbar,
  Header,
  MainUp,
  MainDown,
  Contacts,
  Footer,
} from "./components/export";
import TourCard from "./components/shared/TourCard/TourCard";
function App() {
  return (
    <div className="App">
    <Container>
      <Navbar />
      <Header />
      <MainUp />
      {/* <TourCard /> */}
      <MainDown />
      <Contacts />
      <Footer />
 
   </Container>
    </div>
  );
}

export default App;
