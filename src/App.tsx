import React, { useEffect } from "react";
// Components
import { Blocks, Nav, Wallet } from "./components";

function App() {
  return (
    <div className="App">
      <Nav />
      <>
        <Wallet />
        <Blocks />
      </>
    </div>
  );
}

export default App;
