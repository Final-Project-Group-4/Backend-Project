import "./MediaIcons.scss";
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaPowerOff, FaFacebook } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../../../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Menu from "@mui/material/Menu";
import { Button, MenuItem } from "@mui/material";

function MediaIcons() {
  const {i18n} = useTranslation();
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);

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
      toast.error(err.response.data.message);
    }
  };

  const handleMenuClose = (value) => {
    if (value === "en") {
      i18n.changeLanguage("en");
    } else if (value === "fr") {
      i18n.changeLanguage("fr");
    } else if (value === "de") {
      i18n.changeLanguage("de");
    }
    setAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleMenuClose("de")} className="menu-item">
        DE
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose("fr")} className="menu-item">
        FR
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose("en")} className="menu-item">
        EN
      </MenuItem>
    </Menu>
  );

  return (
    <div className="app__navbar__right">
      <Button
        aria-label="language selection"
        // aria-controls={menuId}
        onClick={handleLanguageMenuOpen}
      >
        <FaLanguage size={40} style={{ color: "white" }} />
      </Button>
      <ul className="app__navbar__icons">
        <li className="app__flex p-text">
          <a
            href={`https://www.facebook.com/profile.php?id=100069632993371`}
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook size={20} />
          </a>
        </li>
        <li className="app__flex p-text">
          <a
            href={`https://instagram.com/mlay_tours?r=nametag`}
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>

      {/* <ul className="app__navbar_langauge">
        <li className="app__flex p-text">
          <p
            className="a"
            onClick={() => {
              i18n.changeLanguage("de");
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
            }}
          >
            EN
          </p>
        </li>
      </ul> */}

      {user && (
        <>
          <ul className="app__navbar_langauge">
            <li className="app__flex p-text">
              <Link to={"/admin"}>Admin</Link>
            </li>
          </ul>
          <ul className="app__navbar_langauge">
            <li className="app__flex p-text">
              <p className="a logout-icon" onClick={handleLogout}>
                <FaPowerOff size={25} />
              </p>
            </li>
          </ul>
        </>
      )}
      {renderMenu}
    </div>
  );
}

export default MediaIcons;
