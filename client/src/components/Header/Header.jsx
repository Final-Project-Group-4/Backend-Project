import './_Header.scss';
import { useTranslation } from 'react-i18next';
import image from './mountain.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


function Header() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div className="main__div">
      
      
        <img className='bg-imgEl' src={image} alt="elephant" />
        <header className="main__header">
        {/* <div className='overlay'> */}
          <h2>{t("welcomeTo")}</h2>
          <img src={require("../../assets/Mlay_version4.png")} alt="logo"></img>
          
          <p>{t("ourGoal")}</p>
           <li><a className='linkToTours' href="http://localhost:3000/tours">{t("ourTours")} <FaArrowRight /></a></li>  
          <button className='btn-OurTours' onClick={() => navigate('/tours')}>{t("ourTours")}</button>
       {/*  </div> */}
        </header>
    
    </div>
  );
}

export default Header;
