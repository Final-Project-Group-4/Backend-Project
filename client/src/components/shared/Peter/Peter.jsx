import './_Peter.scss';
import peter from './../../../assets/peter1.png';
import { useTranslation } from 'react-i18next';

function Peter() {
  const {t}= useTranslation()
  return (
    <div className="peter">
      <div className="peter-img">
        <img src={peter} alt="" />
      </div>
      <div className="peter-text">
        <h3>{t("peter")}</h3>
        <p>
       {t("petersExperience")}
        </p>
      </div>
    </div>
  );
}

export default Peter;
