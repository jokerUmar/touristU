import React, { memo, useContext } from "react";
import "./footer.css";
import payme from "../../assets/images/payme.png";
import click from "../../assets/images/click.png";
import uzum from "../../assets/images/uzum.png";
import logotip from "../../assets/images/logotip-img.png";
import { Link } from "react-router-dom";
import { lang } from "../../lang/Lang";
import { LangContext } from "../context/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  let { langData } = useContext(LangContext);

  return (
    <div className="footer">
      <div className="container">
        <div className="left-box">
          <div className="about">
            <h1>{lang[langData].footer.about.title}</h1>
            <p>{lang[langData].footer.about.info}</p>
            <p>+99899 858-48-26</p>
            <p>utourist@yandex.com</p>
          </div>
          <div className="section">
            <h1>{lang[langData].footer.header.title}</h1>
            <Link className="footer-link" to="/about">
              {lang[langData].footer.header.about}
            </Link>
            <Link className="footer-link" to="/services">
              {lang[langData].footer.header.service}
            </Link>
            <Link className="footer-link" to="/travel">
              {lang[langData].footer.header.travel}
            </Link>
            <Link className="footer-link" to="/faq">
              {lang[langData].footer.header.partners}
            </Link>
            <Link className="footer-link" to="/contact">
              {lang[langData].footer.header.contact}
            </Link>
          </div>
        </div>
        <div className="right-box">
          <div className="pay-type">
            <h1>{lang[langData].footer.payme.title}</h1>
            <img width="80px" src={payme} />
            <img width="80px" src={click} />
            <img width="80px" src={uzum} />
          </div>

          <div className="logo-box">
            <img src={logotip} alt="" />
            <p className="logo-box_text">birga dunyoni ko'ramiz</p>
            <article className="social_contact">
              <a href="">
                <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faTelegram} size="xl" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faYoutube} size="xl" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
