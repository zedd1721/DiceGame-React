import React from "react";
import styled from "styled-components";

function Scoreboard({ selectedNumber, setSelectedNumber, score, error }) {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <Wrapper>
      <div className="Score">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
      <NumberContainer>
        <p>{error}</p>
        <div className="numberSelect">
          {numbers.map((number, i) => {
            return (
              <Box
                isSelected={number === selectedNumber}
                key={i}
                onClick={() => setSelectedNumber(number)}
              >
                {number}
              </Box>
            );
          })}
        </div>
        <h2>Select a Number</h2>
      </NumberContainer>
    </Wrapper>
  );
}

export default Scoreboard;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .numberSelect {
    display: flex;
    gap: 25px;
  }
  h2 {
    margin-top: 20px;
    font-weight: 700;
  }
  p {
    color: red;
  }
`;

const Box = styled.div`
  height: 70px;
  width: 70px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  /* &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  } */
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (!isSelected ? "black" : "white")};
`;

const Wrapper = styled.div`
  width: 85%;
  margin: 55px auto;
  /* background-color: aliceblue; */

  display: flex;
  justify-content: space-between;

  .Score {
    width: 150px;
    /* background-color: red; */

    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    line-height: 50px;
    h1 {
      font-size: 90px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
