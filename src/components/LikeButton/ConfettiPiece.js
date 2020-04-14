import React from "react";
import styled from "styled-components";
import Particle from "../Particle";

export default function ConfettiPiece({ angle, distance }) {
  return (
    <Particle angle={angle} distance={distance}>
      <StyledConfetti></StyledConfetti>
    </Particle>
  );
}

const StyledConfetti = styled.div`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
`;
