import "./_Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram , faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          <div className="col">
            <h4>ADDRESS</h4>
            <ul className="list-unstyled">
              <li>unknown</li>
              <li>TP.O.BOX 8228</li>
              <li>Nairobi 00200</li>
            </ul>
          </div>
          <div className="col">
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li>Name: Peter Mlay</li>
              <li>telephone: 12345678910</li>
              <li>Email: mlaypeter019@gmail.com</li>
            </ul>
          </div>
          <div className="col">
            <h4>FAQ</h4>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad rem necessitatibus dolor molestiae aliquid sequi officia .</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis aspernatur, voluptas!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci!</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="last-row">
          <p className="col-sm">copyright 2009 | All rights reserved</p>
          <div className="social-icons">
           <div className="icons">  
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
          </div>
          <div className="icons">
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="icons">
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer