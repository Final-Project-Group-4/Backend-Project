import './_Peter.scss';
import peter from './../../../assets/peter1.png';

function Peter() {
  return (
    <div className="peter">
      <div className="peter-img">
        <img src={peter} alt="" />
      </div>
      <div className="peter-text">
        <h3>Hi, I'm Peter</h3>
        <p>
          One of the most experienced guides you can ever find. Over 8 years of experience in
          technical climbing, hiking; I have summit Kilimanjaro many times. On top of all I am
          certified CPR and mountain rescue.
        </p>
      </div>
    </div>
  );
}

export default Peter;
