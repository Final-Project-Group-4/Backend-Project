import React from 'react';
import {
  Contacts,
  Footer,
  Header,
  MainDown,
  MainUp,
  Navbar,
} from '../components/export';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainUp />
      <MainDown />
      <Contacts />
      <Footer />
    </div>
  );
}
