import "./_Navbar.scss";
import { useState } from "react";
import Toggle from "./toggle/toggle";
import MediaIcons from "./MediaIcons/MediaIcons";
import MainNav from "./mainNav/MainNav";
import logo from "./../../../assets/small-logo.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <MainNav />
      <MediaIcons />
      <Toggle setToggle={setToggle} toggle={toggle} />
    </nav>
  );
};

export default Navbar;
