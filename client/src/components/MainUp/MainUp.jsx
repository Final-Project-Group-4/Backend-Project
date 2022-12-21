import { ValueCard, Peter } from '../export';
import './_MainUp.scss';
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaCoffee,
  FaBinoculars,
  FaCarSide,
} from 'react-icons/fa';
import mainUp from './../../assets/lp-img-mainup.jpg';
import { HiScissors } from 'react-icons/hi';

function MainUp() {
  const values = [
    {
      title: 'Custom trip',
      text: 'We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.',
      icon: <HiScissors size={60} />,
    },
    {
      title: 'Local, Coffee',
      text: 'We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.',
      icon: <FaCoffee size={60} />,
    },
    {
      title: 'Safari',
      text: 'We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.',
      icon: <FaBinoculars size={60} />,
    },
    {
      title: 'Transportation',
      text: 'We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.',
      icon: <FaCarSide size={60} />,
    },
  ];

  return (
    <div className="container mainup">
      <div className="first">
        <div className="text">
          <h2>We are offering</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
        </div>

        <img src={mainUp} alt="" />
      </div>
      <div className="values-container">
        {values.map((item, i) => (
          <ValueCard key={i} title={item.title} text={item.text} icon={item.icon} />
        ))}
      </div>
      <Peter />
      <div className="icons">
        <a href="#">
          <FaTwitterSquare color="#262626" size={30} />
        </a>
        <a href="#">
          <FaInstagramSquare color="#262626" size={30} />
        </a>
        <a href="#">
          <FaLinkedin color="#262626" size={30} />
        </a>
      </div>
    </div>
  );
}

export default MainUp;
