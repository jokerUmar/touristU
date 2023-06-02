import React from "react";
import "./section-card.css";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { ArrayDataContext } from "../context/ArrayDataContext";
import { SummaContext } from "../context/SummaContext";
import { lang } from "../../lang/Lang";
import { LangContext } from "../context/LangContext";
import { memo } from "react";

function SectionCard() {
  let { data } = useContext(DataContext);
  let { arrayData, setArrayData } = useContext(ArrayDataContext);
  let { reducer, setReducer } = useContext(SummaContext);
  let { langData } = useContext(LangContext);

  function handleMarket(e) {
    if (!arrayData.includes(e)) {
      setArrayData([...arrayData, e]);
      setReducer(reducer + e.cost_num);
    }
  }

  return (
    <div className="cards">
      <div className="container">
        <section className="card_section">
          {data.map((element) => {
            return (
              <div
                key={element.title}
                style={{ backgroundImage: `url(${element.img})` }}
                className="card-container"
              >
                <div className="main-content">
                  <p
                    style={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {lang[langData].cards.info}
                  </p>
                  <p className="card__titles">{element.title_info}</p>
                  <p className="card_cost">{element.cost_str} UZS</p>
                  <div className="flex-row">
                    <button
                      className="card_btn"
                      onClick={() => handleMarket(element)}
                    >
                      {lang[langData].cards.all}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default memo(SectionCard);
