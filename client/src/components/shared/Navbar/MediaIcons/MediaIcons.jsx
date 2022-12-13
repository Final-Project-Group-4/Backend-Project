import "./MediaIcons.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function MediaIcons() {
  return (
    <div className="app__navbar__right">
      <ul className="app__navbar__icons">
        {[<FaFacebook size={20} />, <FaInstagram size={20} />].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <ul className="app__navbar_langauge">
        {["DE", "|", "FR", "|", "EN"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MediaIcons;
