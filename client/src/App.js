import TourCard from './components/shared/TourCard/TourCard';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage/Home.jsx';
import Tours from './pages/Tours/Tours.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import PlanTrip from './pages/PlanTrip/PlanTrip.jsx';
import SingleTour from './pages/Tours/SingleTour.jsx';
import Admin from './pages/Admin/Admin.jsx';
import FAQ from './pages/FAQ/Faq.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { Navbar, Footer } from './components/export';
import { TourProvider } from './context/TourContext';
import { Cloudinary } from '@cloudinary/url-gen';


const galleryImages = [
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019141/peter%27s%20website/going-up-the-path_bpeuah.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019129/peter%27s%20website/kilimanjaro-peak4_kk3ucv.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019122/peter%27s%20website/kilimanjaro-peak6._g3pk6z.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019122/peter%27s%20website/kilimanjaro-peak6._g3pk6z.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019113/peter%27s%20website/on-the-route-jungle_lvjfgi.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019111/peter%27s%20website/peak-kilimanjaro_jhwnpy.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019109/peter%27s%20website/peak-congratulation_jmqjjv.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019111/peter%27s%20website/peak-kilimanjaro_jhwnpy.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019102/peter%27s%20website/Shira-tourIMG-0625_kkx8x4.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019104/peter%27s%20website/native-man-kilimanjaro_vrtygy.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019107/peter%27s%20website/peter-in-orange-bg-mountain_ldmsot.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019100/peter%27s%20website/peak-of-kilimanjaro2_stjkrb.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019087/peter%27s%20website/Peter-with-two-others_uuptfd.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019088/peter%27s%20website/safari-wildboars_tsm3ca.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019085/peter%27s%20website/peter-team_dlmqsi.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019083/peter%27s%20website/safari-lions_hcudel.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019079/peter%27s%20website/safari-zebras_ximjri.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019079/peter%27s%20website/safari-zebra1_dhdtqb.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019077/peter%27s%20website/walking-up-the-route_cuiuye.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019079/peter%27s%20website/safari-zebras2_yiikwm.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019074/peter%27s%20website/Shira-tourIMG-0629_igfpkt.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019072/peter%27s%20website/Shira-tourIMG-0628_rgjdnp.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019067/peter%27s%20website/Shira-tourIMG-0630_zsnu0i.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019062/peter%27s%20website/walking-on-the-mountain-over-the-clouds_d0oark.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019006/peter%27s%20website/Mrangu-route2_ukpm9m.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019003/peter%27s%20website/Machame-route3_yybkmc.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019007/peter%27s%20website/Mrangu-route1_dbjtlb.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019007/peter%27s%20website/Lemosho-route1_gsuiaa.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019005/peter%27s%20website/Machame-route2_dvdkes.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671018995/peter%27s%20website/Umbwe-1route_ot9kyd.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671018994/peter%27s%20website/Umbwe-2route_japdid.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019075/peter%27s%20website/safari-zebras3_rkqbkx.jpg',
  },
];

function App() {
  return (
    <TourProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/tours/:singleTourName" element={<SingleTour />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/category/:type" element={<Tours />} />
          <Route path="/gallery" element={<Gallery galleryImages={galleryImages} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </TourProvider>
  );
}

export default App;
