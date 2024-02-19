import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <Rulescontainer>
      <h3>How to play dice game</h3>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </Rulescontainer>
  );
}

export default Rules;

const Rulescontainer = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  
  .text {
    margin-top: 20px;
  }
`;
