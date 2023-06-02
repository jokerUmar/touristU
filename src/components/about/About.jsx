import React, { useContext } from "react";
import "./about.css";
import { lang } from "../../lang/Lang";
import { LangContext } from "../context/LangContext";
import { memo } from "react";

function About() {
  let { langData } = useContext(LangContext);

  return (
    <section className="about_box">
      <div className="container">
        <h1 className="about_title">{lang[langData].about.title}</h1>
        <p>
          <b>“UTOURIST GROUP” </b>
          {lang[langData].about.info}
        </p>
      </div>
    </section>
  );
}

export default memo(About);
