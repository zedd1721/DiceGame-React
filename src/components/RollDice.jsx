import React from "react";
import styled from "styled-components";
import Rules from "./Rules";
import { useState } from "react";

function RollDice({ currentDice, randomNumber, setScore }) {
  

  const [toggle, settoggle] = useState(false)
  const handleResetScore = () => {
    setScore(0);
  };

  const handleToggleRules = () => {
    settoggle((prev) => !prev);
  };
  return (
    <Dicecontainer>
      <div className="wrapper">
        <img
          onClick={() => randomNumber(1, 7)}
          src={`/src/assets/dice_${currentDice}.png`}
          alt="dice"
        />
        <p>Click on Dice to roll</p>
      </div>
      <div className="btns">
        <button onClick={handleResetScore} className="reset">
          Reset Score
        </button>
        <button onClick={handleToggleRules} className="rules">
          {toggle ? "Hide" : "Show"} Rules
          </button>
      </div>
      {toggle && <Rules />}
      
    </Dicecontainer>
  );
}

export default RollDice;

const Dicecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 40px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    p {
      font-weight: 500;
      font-size: 24px;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: 25px;

    button {
      width: 220px;
      padding: 10px 18px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
    .reset {
      background-color: white;
      border: 1px solid black;
    }
    .rules {
      background-color: black;
      color: white;
    }
  }
`;
