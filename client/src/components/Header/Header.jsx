import './_Header.scss';
import image from './mountain.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="main__div">
      <img src={image} alt="elephant" />
      <header className="main__header">
        <h2>-Welcome To-</h2>
        <h1>MLAY TOURS</h1>
        <p>Our goal is set to provide a unique adventure for everyone.</p>
        <button onClick={() => navigate('/tours')}>OUR TOURS</button>
      </header>
    </div>
  );
}

export default Header;
