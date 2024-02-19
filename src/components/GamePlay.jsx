import React from "react";
import Scoreboard from "./Scoreboard";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, seterror] = useState();

  const randomNumber = (min, max) => {
    if (!selectedNumber) {
      seterror("You have not selected any Number");
      return;
    }
    seterror("");
    setcurrentDice(Math.floor(Math.random() * (max - min) + min));

    if (selectedNumber === currentDice) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev -2);
    }
    setSelectedNumber(undefined);
    return currentDice;
  };

  return (
    <main>
      <Scoreboard
        error={error}
        score={score}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <RollDice
        setScore={setScore}
        currentDice={currentDice}
        randomNumber={randomNumber}
      />
      {/* <Rules /> */}
    </main>
  );
}

export default GamePlay;
