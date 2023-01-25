import { Contacts, Header, MainDown, MainUp } from '../../components/export';

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <MainUp />
      <MainDown />
      <Contacts />
    </div>
  );
}
