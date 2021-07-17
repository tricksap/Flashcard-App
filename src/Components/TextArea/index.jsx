import React, { useState } from "react";

function TextArea(props) {
  const [entry, setEntry] = useState({
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
    props.submitEntry(entry);
    setEntry({
      question: "",
      answer: "",
    });
    e.preventDefault();
  }

  return (
    <div>
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
        <button type="submit" onClick={submitNote}>
          Create
        </button>
      </form>
    </div>
  );
}

export default TextArea;
