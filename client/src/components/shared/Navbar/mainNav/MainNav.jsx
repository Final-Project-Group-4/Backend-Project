import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./mainNav.scss";

function MainNav() {
  const { t } = useTranslation();

  return (
    <ul className="app__navbar__links">
      <li className="app__flex p-text">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={"/tours"}>{t("tours")}</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={"/gallery"}>{t("gallery")}</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={"/about"}>{t("aboutUs")}</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={"/plantrip"}>{t("planTrip")}</Link>
      </li>
    </ul>
  );
}

export default MainNav;
