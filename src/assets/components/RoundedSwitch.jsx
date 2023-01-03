import { useState } from "react";
import "../../App.css";

function RoundedSwitch({ toggleSwitch, handleChange }) {
  return (
    <div className="Switch">
      <label className="switch">
        <input type="checkbox" checked={toggleSwitch} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default RoundedSwitch;
