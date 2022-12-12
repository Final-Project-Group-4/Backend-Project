import "./_Header.scss"
import image from "./mountain.jpg"
function Header() {
  return (
    <div className="main__div">
<img src={image} alt="elephant" />
<header className="main__header">
  <h2>-Welcome To-</h2>
    <h1>Kili Excursions</h1>
    <p>Our goal is set to provide a unique adventure for everyone.</p>
    <button>OUR TOURS</button>
    </header>
    </div>
  )
}

export default Header