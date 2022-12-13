import React from 'react';
import { Contacts, Header, MainDown, MainUp} from '../../components/export';

export default function Home() {
  return (
    <div>
      <Header />
      <MainUp />
      <MainDown />
      <Contacts />
    </div>
  );
}
