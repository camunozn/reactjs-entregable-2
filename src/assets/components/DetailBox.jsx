import { useState } from "react";
import "../../App.css";

function DetailBox({ title, icon, detail }) {
  return (
    <div className="DetailBox">
      <h3 className="heading-tertiary">{title}</h3>
      <div className="container grid grid--2--columns">
        <i className={icon}></i>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default DetailBox;
