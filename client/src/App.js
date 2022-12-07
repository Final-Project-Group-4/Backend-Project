import React from 'react';
import Container from '@mui/material/Container';
import {Navbar,Header, MainUp,MainDown, Footer, Contacts} from "./components/export"

function App() {
  return (
    <div className="App">
      <Container>
      <Navbar/>
      <Header/>
      <MainUp/>
     <MainDown/> 
      <Contacts/>
      <Footer/>

      </Container>




    </div>
  );
}

export default App;
