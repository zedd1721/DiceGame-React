import React from "react";
import styled from "styled-components";

function Startgame({toggle}) {
  return (
    <Container>
      <img src="/src/assets/dices.png" alt="dice" />
      <Title>
        <H1>DICE GAME</H1>
        <Button onClick={toggle}>Play Now</Button>
      </Title>
    </Container>
  );
}

export default Startgame;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  img {
    height: 450px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    img {
      height: 250px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (max-width: 450px) {
    align-items: center;
  }
`;
const H1 = styled.h1`
  font-weight: 700;
  font-size: 96px;
  @media (max-width: 450px) {
    font-size: 55px;
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;

  transition: all ease 0.2s;

  &:hover {
    background-color: white;
    color: black;
    /* border: 1px solid black; */
  }

  @media (max-width: 450px) {
    margin-top: 50px;
    font-size: 12px;
  }
`;
