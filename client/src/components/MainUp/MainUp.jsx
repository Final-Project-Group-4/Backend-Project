import { ValueCard, Peter } from '../export';
import './_MainUp.scss';
import {
  // FaTwitterSquare,
  // FaInstagramSquare,
  // FaLinkedin,
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
      text: 'We offer best of Tanzania adventures: Kilimanjaro trekking, Meru trekking, day hike, safaris to different tanzanian parks.',
      icon: <HiScissors size={60} />,
    },
    {
      title: 'Local, Coffee',
      text: 'We make coffee in a traditional way from a coffee seed to a cup of coffee, while doing this process we also sing and dance.',
      icon: <FaCoffee size={60} />,
    },
    {
      title: 'Safari',
      text: 'We offer best of Tanzania safari: Great migration, Ngorongoro crater, Tarangire national park and other Tanzanian parks.',
      icon: <FaBinoculars size={60} />,
    },
    {
      title: 'Transportation',
      text: 'We use 4x4 drive Land Cruisers for safaris and mini bus to transfer from airport to the hotel.',
      icon: <FaCarSide size={60} />,
    },
  ];

  return (
    <div className="container mainup">
      <div className="first">
        <div className="text">
          <h2>We are offering</h2>
          <p>
          Mlay Tours leads tourists on incredible adventures  in Tanzania. Leading treks to Mt. Kilimanjaro Mt. Meru, Tanzania's game parks and cultural tours.All these activities will make your journey unforgettable.
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
      {/* <div className="icons">
        <a href="#">
          <FaTwitterSquare color="#262626" size={30} />
        </a>
        <a href="#">
          <FaInstagramSquare color="#262626" size={30} />
        </a>
        <a href="#">
          <FaLinkedin color="#262626" size={30} />
        </a>
      </div> */}
    </div>
  );
}

export default MainUp;
