import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Button from "./Buttons";
import TextArea from "./TextArea";
function App() {
  const [create, setCreate] = useState(false);
  function onChange(x) {
    setCreate(x);
  }

  return (
    <div>
      <Header />
      <Button change={onChange} />
      {create ? <TextArea /> : <Card />}
    </div>
  );
}
export default App;
