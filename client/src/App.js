//import TourCard from './components/shared/TourCard/TourCard';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage/Home.jsx';
import Tours from './pages/Tours/Tours.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import PlanTrip from './pages/PlanTrip/PlanTrip.jsx';
import SingleTour from './pages/Tours/SingleTour.jsx';
import Admin from './pages/Admin/Admin.jsx';
import Login from './pages/Login/Login.jsx';
import FAQ from './pages/FAQ/Faq.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { Navbar, Footer } from './components/export';
import Settings from './components/Settings/Settings.jsx';
import ManageTours from './components/ManageTours/ManageTours.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/tours/:id" element={<SingleTour />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/category/:type" element={<Tours />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plantrip" element={<PlanTrip />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Settings />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/manageTours" element={<ManageTours />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/*
                <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
