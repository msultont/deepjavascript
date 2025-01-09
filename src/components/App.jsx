import "../assets/css/animate.css"
import "../assets/css/icomoon.css"
import "../assets/css/bootstrap.css"
import "../assets/css/style.css"
import "../styles/style.scss"

import "../assets/js/modernizr-2.6.2.min.js"
import "../assets/js/jquery.min.js"
import "../assets/js/jquery.easing.1.3.js"
import "../assets/js/bootstrap.min.js"
import "../assets/js/jquery.waypoints.min.js"
import "../assets/js/jquery.stellar.min.js"
// import "../assets/js/jquery.easypiechart.min.js"
import "../assets/js/main.js"

import React from "react"

const App = () => {
  return (
    <>
      <div className="fkh5co-loader"></div>
      <div id="page">
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{ backgroundImage: "url(images/cover_bg_3.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <div
                      className="profile-thumb"
                      style={{ background: "url(../assets/images/sulton.png)" }}
                    ></div>
                    <h1>
                      <span>Sulton Wibawa</span>
                    </h1>
                    <h3>
                      <span>My Life Portfolio</span>
                    </h3>
                    <p>
                      <ul className="fh5co-social-icons">
                        <li>
                          <a href="#">
                            <i className="icon-twitter2"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-facebook2"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-linkedin2"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-dribbble2"></i>
                          </a>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up22"></i>
        </a>
      </div>
    </>
  )
}
export default App;
