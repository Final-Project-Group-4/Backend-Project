import "./MediaIcons.scss"
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
function MediaIcons() {
  return (
 
        <ul className="app__navbar__right">
           
        {[<BsFacebook />, <FaInstagram />].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
    <ul className="app__navbar_langauge">
         {["DE", "|", "FR", "|", "EN"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
        </ul>
        </ul>
   

  )
}

export default MediaIcons