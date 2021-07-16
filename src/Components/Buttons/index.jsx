import React from "react";
import "./But.css";

function Button(props) {
  return (
    <div className="btn">
      <button onClick={() => props.change(false)}>Study</button>
      <button onClick={() => props.change(true)}>Add</button>
    </div>
  );
}

export default Button;
