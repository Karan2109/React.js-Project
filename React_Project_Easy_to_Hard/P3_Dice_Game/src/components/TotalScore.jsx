import React from "react";
import styled from "styled-components";

function TotalScore({score}) {
  return (
    <TotalScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </TotalScoreContainer>
  );
}

export default TotalScore;

const TotalScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  
  h1 {
    font-size: 100px;
    font-weight: bold;
  }

  p {
    font-size: 24px;
    font-weight: 500px;
  }
  `;
