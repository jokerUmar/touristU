import React, { memo } from "react";
import "./travel.css";
import SectionCard from "../sectionCard/SectionCard";

function Travel() {
  return (
    <div className="travel">
      <div className="container">
        <h1 className="travel_title">sayohat</h1>
        <SectionCard />
      </div>
    </div>
  );
}

export default memo(Travel);
