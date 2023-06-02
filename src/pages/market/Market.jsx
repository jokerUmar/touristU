import React, { useContext } from "react";
import "./market.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ArrayDataContext } from "../../components/context/ArrayDataContext";
import { SummaContext } from "../../components/context/SummaContext";
import { Link } from "react-router-dom";
import { lang } from "../../lang/Lang";
import { LangContext } from "../../components/context/LangContext";
import { memo } from "react";

function Market() {
  let { arrayData, setArrayData } = useContext(ArrayDataContext);
  let { reducer, setReducer } = useContext(SummaContext);
  let { langData } = useContext(LangContext);

  function handleDelete(e) {
    let filterArr = arrayData.filter((fil) => fil.id != e.id);
    setArrayData(filterArr);
    setReducer(reducer - e.cost_num * e.count);
  }

  function handleIncrement(e) {
    e.count++;
    setArrayData([...arrayData]);
    setReducer(reducer + e.cost_num);
  }

  function handleDecrement(e) {
    if (e.count > 1) {
      e.count--;
      setArrayData([...arrayData]);
      setReducer(reducer - e.cost_num);
    }
  }

  let reverse_cost = reducer.toString().split("").reverse();
  let reverseNumArr = [];

  for (let i = 0; i < reverse_cost.length; i++) {
    const element = reverse_cost[i];
    if (i % 3 == 0) {
      reverseNumArr.push(",");
      reverseNumArr.push(element);
    } else {
      reverseNumArr.push(element);
    }
  }
  reverseNumArr.splice(0, 1);

  return (
    <div className="market">
      <div className="container">
        <h1 className="market_title">{lang[langData].emptyBusket.title}</h1>
        {arrayData.length > 0 ? (
          <div className="all-box">
            <div className="market-parent">
              {arrayData.map((element) => {
                return (
                  <div className="market-box" key={element.id}>
                    <div className="market-box_left">
                      <img className="market-img" src={element.img} alt="" />
                      <article>
                        <p> {element.title_info}</p>
                        <span>uzs {element.cost_str}</span>
                      </article>
                    </div>

                    <div className="market-box_right">
                      <div className="counter-box">
                        <button
                          className="counter-minus"
                          onClick={() => handleDecrement(element)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          className="counter-number"
                          value={element.count}
                          type="number"
                        />
                        <button
                          className="counter-plus"
                          onClick={() => handleIncrement(element)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div
                        className="counter-trash"
                        onClick={() => handleDelete(element)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="reducer-box">
              <div className="article">
                <span className="reducer_text">
                  {lang[langData].checkout.all_cost} :{" "}
                </span>
                <span className="reducer_cost">
                  UZS {reverseNumArr.reverse().join("")}.00
                </span>
              </div>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <button className="reducer_btn">
                  {lang[langData].busket.btn_title}
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="empty-box">
            <p>{lang[langData].emptyBusket.empty_info}</p>
            <p>{lang[langData].emptyBusket.info}</p>
            <div className="empty_travel-box">
              <Link to="/travel" className="empty-travel">
                {lang[langData].emptyBusket.link}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Market);
