import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Button from "./Buttons";
function App() {
  const [create, setCreate] = useState(false);
  return (
    <div>
      <Header />
      <Button />
      {create ? "" : <Card />}
    </div>
  );
}
export default App;
