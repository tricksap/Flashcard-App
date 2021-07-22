import React, { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import Buttons from "@material-ui/core/Button";

function TextArea(props) {
  const [entry, setEntry] = useState({
    id: "",
    question: "",
    answer: "",
  });

  function changes(e) {
    const { name, value } = e.target;
    setEntry((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNote(e) {
    entry.id = nanoid(6);
    props.submitEntry(entry);
    setEntry({
      id: "",
      question: "",
      answer: "",
    });
    e.preventDefault();
  }

  return (
    <div className="box">
      <form>
        <textarea
          name="question"
          onChange={changes}
          value={entry.question}
          rows="3"
          placeholder="Question"
        />
        <input
          name="answer"
          onChange={changes}
          value={entry.answer}
          placeholder="Answer"
        ></input>
        <br />
        <Buttons
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={submitNote}
        >
          Create
        </Buttons>
      </form>
    </div>
  );
}

export default TextArea;
