import React, { useContext, useState } from "react";
import "./main.css";
import { DataContext } from "../context/DataContext";
import Carroussel from "../carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CarouselShowContext } from "../context/carouselShowContext";
import Services from "../services/Services";
import SectionCard from "../sectionCard/SectionCard";
import { LangContext } from "../context/LangContext";
import { lang } from "../../lang/Lang";
import { memo } from "react";

function MainV() {
  const [circleCount, setCircleCount] = useState(1);

  let { data } = useContext(DataContext);
  const { goToSlide, setGoToSlide } = useContext(CarouselShowContext);
  let { langData } = useContext(LangContext);

  function handlePrev() {
    if (data.length - 1 != goToSlide) {
      setGoToSlide(goToSlide + 1);
      setCircleCount(circleCount + 1);
    } else {
      setCircleCount(1);
      setGoToSlide(0);
    }
  }

  function handleMinus() {
    if (goToSlide > 0) {
      setCircleCount(circleCount - 1);
      setGoToSlide(goToSlide - 1);
    } else {
      setCircleCount(data.length);
      setGoToSlide(data.length - 1);
    }
  }

  function handlecircle(e) {
    setCircleCount(e);
    setGoToSlide(e - 1);
  }

  return (
    <>
      <section
        className="main"
        style={{ backgroundImage: `url(${data[goToSlide].img}` }}
      >
        <div className="container">
          <main className="hero">
            <div className="hero_child">
              <div className="line-box">
                <span className="line"></span>
                <button
                  onClick={() => handlecircle(1)}
                  className={`circle circle-1 ${
                    circleCount == 1 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 1 ? "1" : ""}
                </button>
                <button
                  onClick={() => handlecircle(2)}
                  className={`circle circle-2 ${
                    circleCount == 2 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 2 ? "2" : ""}
                </button>
                <button
                  onClick={() => handlecircle(3)}
                  className={`circle circle-3 ${
                    circleCount == 3 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 3 ? "3" : ""}
                </button>
                <button
                  onClick={() => handlecircle(4)}
                  className={`circle circle-4 ${
                    circleCount == 4 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 4 ? "4" : ""}
                </button>
              </div>

              <div className="text">
                <div className="text-box">
                  <h1>{lang[langData].body.title}</h1>
                </div>
              </div>
              <Carroussel
                cards={data}
                height="500px"
                width="30%"
                margin="0 auto"
                offset={2}
                showArrows={false}
                setCircleCount={setCircleCount}
                circleCount={circleCount}
              />
            </div>
          </main>
        </div>

        <div className="hero-footer">
          <div className="container">
            <FontAwesomeIcon
              className="circle-chivron"
              onClick={handleMinus}
              style={{ fontSize: "36px", marginRight: "5px" }}
              icon={faChevronLeft}
            />
            <FontAwesomeIcon
              className="circle-chivron"
              onClick={handlePrev}
              style={{ fontSize: "36px", marginLeft: "5px" }}
              icon={faChevronRight}
            />
          </div>
        </div>
      </section>

      <Services />

      <SectionCard />
    </>
  );
}

export default memo(MainV);
