import React from "react";
import styled from "styled-components";

function RollDice({ roleDice, currentDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    color: #333;
  }
`;
