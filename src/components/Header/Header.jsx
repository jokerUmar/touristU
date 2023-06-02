import React, { useContext } from "react";
import "./header.css";
import logotip from "../../assets/images/logotip-img.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lang } from "../../lang/Lang";
import {
  faAddressBook,
  faAddressCard,
  faBars,
  faHouse,
  faPlane,
  faTaxi,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { BarsContext } from "../context/barsContext";
import { LangContext } from "../context/LangContext";
import { memo } from "react";

function Header() {
  let { bars, setBars } = useContext(BarsContext);
  let { langData, setLangData } = useContext(LangContext);

  function handleLang(e) {
    setLangData(e.target.value);
  }

  return (
    <header className="header">
      <div className="container header">
        <img src={logotip} width={140} alt="" />

        <ul
          className="header-list"
          style={
            bars
              ? {
                  display: "flex",
                  transform: "translate(0px)",
                  transition: "0.3s",
                }
              : { transform: "translateY(-100%)", transition: "0.3s" }
          }
        >
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            className={`header_item header_item2 is_active `}
          >
            <FontAwesomeIcon icon={faHouse} />
            <p>{lang[langData].header.menu}</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            to="/about"
            className={`header_item header_item2}`}
          >
            <FontAwesomeIcon icon={faAddressCard} />
            <p>{lang[langData].header.about}</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            to="/services"
            className={`header_item header_item3}`}
          >
            <FontAwesomeIcon icon={faTaxi} />
            <p>{lang[langData].header.service}</p>
          </NavLink>

          <NavLink
            to="/travel"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            className={`header_item header_item4 }`}
          >
            <FontAwesomeIcon icon={faPlane} />
            <p>{lang[langData].header.travel}</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            to="/contact"
            className={`header_item header_item5}`}
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <p>{lang[langData].header.contact}</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            to="/market"
            className={`header_item header_item6}`}
          >
            <FontAwesomeIcon style={{ width: "80px" }} icon={faCartShopping} />
            <p>{lang[langData].header.buscket}</p>
          </NavLink>

          <div className="header_item box">
            <select onChange={(e) => handleLang(e)}>
              <option value="uz">Uzb</option>
              <option value="ru">Rus</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </ul>

        <span className="bars-box" onClick={() => setBars(!bars)}>
          {!bars ? (
            <FontAwesomeIcon style={{ fontSize: "28px" }} icon={faBars} />
          ) : (
            <FontAwesomeIcon style={{ fontSize: "28px" }} icon={faXmark} />
          )}
        </span>
      </div>
    </header>
  );
}

export default memo(Header);
