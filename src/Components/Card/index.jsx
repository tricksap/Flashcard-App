import React, { useState } from "react";
import "./card.css";
import useLongPress from "../../useLongPress";
function Card(props) {
  const [flip, setfFip] = useState(false);

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  // when long press is triggered
  const onLongPress = () => {
    props.delete(props.id);
  };

  // when click
  const onClick = () => {
    setfFip(!flip);
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div {...longPressEvent} className={`card ${flip ? "flip" : ""}`}>
      <div className="front">{props.question}</div>
      <div className="back">{props.answer}</div>
    </div>
  );
}
export default Card;
