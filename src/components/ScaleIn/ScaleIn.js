import React from "react";
import { useSpring, animated } from "react-spring";

export default function ScaleIn({ children }) {
  const style = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    },
    config: {
      tension: 200,
      friction: 1,
      clamp: true
    }
  });
  return <animated.div style={style}>{children}</animated.div>;
}
