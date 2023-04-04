import React from "react";
import Header from './components/Header/index.js';
import Card from "./objects/card/index.js";
import Player from "./objects/player/index.js";
function App() {
  return (
    <>
      <Header />
      <Card />
      <Player player ="o"/>
    </>
  );
}

export default App;
