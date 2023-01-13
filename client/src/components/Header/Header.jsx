import './_Header.scss';
import { useTranslation } from 'react-i18next';
import image from './mountain.jpg';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/mlay_tours.png"

function Header() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className="main__div">
      <img src={image} alt="elephant" />
      <header className="main__header">
        <img src={require("../../assets/mlay_tours.png")}></img>
        <h2>{t("welcomeTo")}</h2>
        <p>{t("ourGoal")}</p>
        <button onClick={() => navigate('/tours')}>{t("ourTours")}</button>
      </header>
    </div>
  );
}

export default Header;
