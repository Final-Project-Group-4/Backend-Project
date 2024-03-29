import "./_Navbar.scss";
import { useState } from "react";
import Toggle from "./toggle/Toggle";
import MediaIcons from "./MediaIcons/MediaIcons";
import MainNav from "./mainNav/MainNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <Link to={"/"}>
          <p>MLAY TOURS</p>
        </Link>
      </div>
      <MainNav />
      <MediaIcons />
      <Toggle setToggle={setToggle} toggle={toggle} />
    </nav>
  );
};

export default Navbar;
