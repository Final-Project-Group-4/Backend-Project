import { ValueCard, Peter } from "../export";
import "./_MainUp.scss";
import { RxScissors } from "react-icons/rx";
import { CiCoffeeBean } from "react-icons/ci";
import { GiElephant } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import mainUp from "./../../assets/lp-img-mainup.jpg";

function MainUp() {
  const values = [
    {
      title: "Custom trip",
      text: "We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.",
      icon: <RxScissors size={70} />,
    },
    {
      title: "Local, Coffee",
      text: "We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.",
      icon: <CiCoffeeBean size={70} />,
    },
    {
      title: "Safari",
      text: "We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.",
      icon: <GiElephant size={70} />,
    },
    {
      title: "Transportation",
      text: "We offered custom tailored trips based on your needs and interests. Contact us to design a plan and get a free quote.",
      icon: <AiOutlineCar size={70} />,
    },
  ];

  return (
    <div className="container mainup">
      <div className="first">
        <div className="text">
          <h2>We are offering</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>

        <img src={mainUp} alt="" />
      </div>
      <div className="values-container">
        {values.map((item, i) => (
          <ValueCard
            key={i}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
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
