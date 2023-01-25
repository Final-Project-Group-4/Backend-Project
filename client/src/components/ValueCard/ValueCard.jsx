import './_ValueCard.scss';

function ValueCard({ title, text, icon }) {
  return (
    <div className="value-card" >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ValueCard;
