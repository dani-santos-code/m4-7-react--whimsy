import React from "react";
import { useSpring, animated } from "react-spring";

export default function Particle({ children, angle, distance }) {
  const convertDegreesToRadians = angle => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const initialX = Math.cos(angleInRads);
  const initialY = Math.sin(angleInRads);

  const x = initialX * distance;
  const y = initialY * distance;

  const style = useSpring({
    transform: `translate(${x}, ${y})`,
    from: {
      transform: `translate(${initialX}, ${initialY})`
    }
    // config: {
    //   tension: 200,
    //   friction: 12
    // }
  });

  return <animated.div style={style}>{children}</animated.div>;
}
