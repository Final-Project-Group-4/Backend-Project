import React from "react";
import {
  Contact,
  Footer,
  Header,
  MainDown,
  MainUp,
  Navbar,
} from "../components/export";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainUp />
      <MainDown />
      <Contact />
      <Footer />
    </div>
  );
}
