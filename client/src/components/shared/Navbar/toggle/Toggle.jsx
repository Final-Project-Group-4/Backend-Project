import "./_toggle.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../../../../context/Context";
import axios from "axios";
import { toast } from "react-toastify";

function Toggle(props) {
  const [t, i18n] = useTranslation();
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch({ type: "LOGOUT" });

    try {
      const res = await axios.post(`/api/admin/logout`);
      console.log(res.data);
      if (res.data) {
        toast.error("You logged out");
        navigate("/");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="app__navbar__menu">
      <HiMenuAlt4 onClick={() => props.setToggle(true)} />
      {props.toggle && (
        <motion.div
          whileInView={{ x: [275, 0] }}
          transition={{ duration: 0.85 }}
        >
          {/* when the use toggle the function setToggle useState gonna be false so it can disappear */}
          <HiX onClick={() => props.setToggle(false)} />
          <ul className="try">
            <li>
              <Link to={"/"} onClick={() => props.setToggle(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/tours"} onClick={() => props.setToggle(false)}>
                {t("tours")}
              </Link>
            </li>
            <li>
              <Link to={"/gallery"} onClick={() => props.setToggle(false)}>
                {t("gallery")}
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={() => props.setToggle(false)}>
                {t("aboutUs")}
              </Link>
            </li>
            <li>
              <Link to={"/plantrip"} onClick={() => props.setToggle(false)}>
                {t("planTrip")}
              </Link>
            </li>
            {user && (
              <>
                <li className="app__flex p-text">
                  <Link to={"/admin"}>Admin</Link>
                </li>
                <li className="app__flex p-text">
                  <p className="a logout-icon" onClick={handleLogout}>
                    <Link to={"/"}>Logout</Link>
                  </p>
                </li>
              </>
            )}
            <ul className="Language">
              <li className="app__flex p-text">
                <p
                  className="a"
                  onClick={() => {
                    i18n.changeLanguage("de");
                    props.setToggle(false);
                  }}
                >
                  DE
                </p>
              </li>
              <li className="app__flex p-text">
                <p className="a">|</p>
              </li>
              <li className="app__flex p-text">
                <p
                  className="a"
                  onClick={() => {
                    i18n.changeLanguage("fr");
                    props.setToggle(false);
                  }}
                >
                  FR
                </p>
              </li>
              <li className="app__flex p-text">
                <p className="a">|</p>
              </li>
              <li className="app__flex p-text">
                <p
                  className="a"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    props.setToggle(false);
                  }}
                >
                  EN
                </p>
              </li>
            </ul>
            <ul className="icon">
              <a
                href={`https://www.facebook.com/profile.php?id=100069632993371`}
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook size={20} color="black" />
              </a>
              <a
                href={`https://instagram.com/mlay_tours?r=nametag`}
                rel="noreferrer"
                target="_blank"
              >
                <FaInstagram size={20} color="black" />
              </a>
            </ul>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Toggle;
