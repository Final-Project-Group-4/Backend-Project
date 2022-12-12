import "./toggle.scss"
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
function Toggle(props) {
    

  return (
        
      <div className="app__navbar__menu">
        <HiMenuAlt4 onClick={() => props.setToggle(true)} />
        {props.toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85 }}
          >
            {/* when the use toggle the function setToggle useState gonna be false so it can disspaer */}
            <HiX onClick={() => props.setToggle(false)} />
            <ul className="try">
              {["Tours", "Galery", "About Us", "Plan Trip"].map((item) => (
                <li key={{ item }}>
                  <a href={`#${item}`} onClick={() => props.setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="Language">
              {[
                "DE",
                "|",
                "FR",
                "|",
                "EN",
              ].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
<ul className="icon">
<BsFacebook style={{width : "20px" , height : "20px" }} />,
<FaInstagram style={{width : "20px" , height : "20px"}} />,
</ul>
          </motion.div>
          
        )}
        
      </div>
  )
  
}

export default Toggle