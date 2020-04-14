import React from "react";
import styled, { keyframes } from "styled-components";

export default function PoppingCircle({ size, color }) {
  return <Circle color={color} />;
}

const popCircle = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Circle = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  position: absolute;
  /* transform-origin: center; */
  animation: ${popCircle} 500ms forwards;
  border-radius: 50%;
`;
