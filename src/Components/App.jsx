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

  // function createCard() {
  //   entries.map((item) => {
  //     console.log(item);
  //     return (
  //       <Card key="1" id="1" question={item.question} answer={item.answer} />
  //     );
  //   });
  // }

  return (
    <div>
      <Header />
      <Button change={onChange} />
      {create ? (
        <TextArea submitEntry={submitEntry} />
      ) : (
        <Table />
        /* seperate to a function */

        /* entries.map((item) => {
          console.log(item);
          return <Card question={item.question} answer={item.answer} />;
        }) */
      )}
    </div>
  );
}
export default App;
