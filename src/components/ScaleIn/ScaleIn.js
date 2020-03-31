import React from "react";
import { useSpring, animated } from "react-spring";
import styled, { keyframes } from "styled-components";

export default function ScaleIn({ children }) {
  return <ScaleInStyledComponent>{children}</ScaleInStyledComponent>;
}

const scalingIn = keyframes`
    from {
        transform: scale(0.5)
    }
    to {
        transform: scale(1)
    }
`;

const ScaleInStyledComponent = styled.div`
  animation: ${scalingIn} 500ms forwards;
`;
