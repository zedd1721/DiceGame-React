import "./App.css";

import Startgame from "./components/Startgame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGamestarted, setIsGamestarted] = useState(false);

  const gamePlay = () => {
    setIsGamestarted((start) => !start);
  };

  return (
    <>
      {
        isGamestarted ? <GamePlay /> : <Startgame toggle={gamePlay}/>
      }
    </>
  );
}

export default App;
