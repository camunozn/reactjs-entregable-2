import { useState } from "react";
import "../../App.css";

function DetailBox({ title, icon, detail }) {
  return (
    <div className="Box">
      <div className="detail-box flex">
        <h3 className="heading-tertiary">{title}</h3>
        <div className="detail-data flex">
          <i className={icon}></i>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailBox;
