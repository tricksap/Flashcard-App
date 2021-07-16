import React, { useState } from "react";
import "./card.module.css";
function Card(props) {
  const [flip, setfFip] = useState(false);
  return (
    <div
      onClick={() => {
        setfFip(!flip);
      }}
      className={`card ${flip ? "flip" : ""}`}
    >
      <div className="front">back</div>
      <div className="back">front</div>
    </div>
  );
}
export default Card;
