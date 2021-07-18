import React from "react";
import "./index.css";
import Card from "../Card";
function Table(props) {
  return (
    <div className="grid">
      {props.entries.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        );
      })}
    </div>
  );
}

export default Table;
