import React, { useContext } from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faHotTub,
  faPassport,
  faCar,
  faPeopleArrows,
  faHamburger,
  faHotel,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../context/LangContext";
import { lang } from "../../lang/Lang";
import { memo } from "react";

function Services() {
  let { langData } = useContext(LangContext);

  return (
    <>
      <div className="services">
        <div className="container">
          <h1 className="service__title">{lang[langData].service.title}</h1>

          <div className="service-box">
            <div className="service_article first-child">
              <FontAwesomeIcon className="service_icon" icon={faMap} />
              <p>{lang[langData].service.organize}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faHotTub} />
              <p>{lang[langData].service.guest}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faPassport} />
              <p>{lang[langData].service.visa}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faCar} />
              <p>{lang[langData].service.rent_car}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faPeopleArrows} />
              <p>{lang[langData].service.guide}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faHamburger} />
              <p>{lang[langData].service.food}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faHotel} />
              <p>{lang[langData].service.hotel}</p>
            </div>
            <div className="service_article">
              <FontAwesomeIcon className="service_icon" icon={faFile} />
              <p>{lang[langData].service.transport}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Services);
