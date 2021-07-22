import React from "react";
import "./But.css";
import Buttons from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Button(props) {
  return (
    <div className="btn">
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Buttons onClick={() => props.change(false)}>Study</Buttons>
        <Buttons onClick={() => props.change(true)}>Add</Buttons>
      </ButtonGroup>
    </div>
  );
}

export default Button;
