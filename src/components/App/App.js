import React, { useReducer } from "react";
import styled from "styled-components";
import "focus-visible";

import avatar from "../../assets/carmen-sandiego.png";

import Tweet from "../Tweet";

const App = () => {
  const reducer = (state, action) => {};
  const [state, dispatch] = useReducer(reducer, {
    numOfLikes: 100,
    numOfRetweets: 100,
    isLiked: false,
    isRetweeted: false
  });

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
