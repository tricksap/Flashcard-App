import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Button from "./Buttons";
import TextArea from "./TextArea";
import Table from "./Table";
function App() {
  const [create, setCreate] = useState(false);
  const [entries, setEntries] = useState([]);

  function onChange(bool) {
    setCreate(bool);
  }

  function submitEntry(entry) {
    setEntries((prev) => [...prev, entry]);
  }
  return (
    <div>
      <Header />
      <Button change={onChange} />
      {create ? (
        <TextArea submitEntry={submitEntry} />
      ) : (
        <Table entries={entries} />
      )}
    </div>
  );
}
export default App;
