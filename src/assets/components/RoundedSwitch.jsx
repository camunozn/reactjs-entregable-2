import { useState } from "react";
import "../../App.css";

function RoundedSwitch() {
  return (
    <div className="Switch">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default RoundedSwitch;
