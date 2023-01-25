import './_NotFound.scss';
import error404 from '../../assets/error-404.jpg';

export default function NotFound() {
  return (
    <div className="container marginat">
      <div className="not-found">
        <img src={error404} alt="Page not found" />
      </div>
    </div>
  );
}
