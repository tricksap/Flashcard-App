import React, { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";

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
        <h3>Question</h3>
        <textarea
          name="question"
          onChange={changes}
          value={entry.question}
          rows="4"
          cols="50"
        />
        <h3>Answer</h3>
        <input name="answer" onChange={changes} value={entry.answer}></input>
        <br />
        <button type="submit" onClick={submitNote}>
          Create
        </button>
      </form>
    </div>
  );
}

export default TextArea;
