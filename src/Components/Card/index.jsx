import React, { useState } from "react";
import "./card.css";
function Card(props) {
  const [flip, setfFip] = useState(false);
  return (
    <div
      onClick={() => {
        setfFip(!flip);
      }}
      className={`card ${flip ? "flip" : ""}`}
    >
      <div className="front">{props.question}</div>
      <div className="back">{props.answer}</div>
    </div>
  );
}
export default Card;
