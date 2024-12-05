import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="dogi" />
    </>
  );
}

export default App;
