import React from "react";
import classes from "./index.module.css";
function Card(props) {
  const [flip, setFlip] = React.useState(false);
  return (
    <div
      onClick={() => setFlip(!flip)}
      className={`${classes.card} ${flip ? classes.flip : ""}`}
    >
      <div className={classes.front}>back</div>
      <div className={classes.back}>asd</div>
    </div>
  );
}
export default Card;
