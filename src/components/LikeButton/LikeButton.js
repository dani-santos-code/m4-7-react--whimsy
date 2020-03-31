import React from "react";
import styled, { keyframes } from "styled-components";
import PoppingCircle from "../PoppingCircle";
import Heart from "./Heart";
import ScaleIn from "../ScaleIn";
import ConfettiPiece from "./ConfettiPiece";
import { range } from "../../utils";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked ? (
        <>
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
          <PoppingCircle size={size} color="#E790F7" />
          {range(12).map(i => (
            <ConfettiPiece
              key={i}
              angle={360 * (i / 12)}
              distance={20}
              color={PARTICLE_COLORS[0]}
            />
          ))}
        </>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
