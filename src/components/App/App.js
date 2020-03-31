import React, { useReducer } from "react";
import styled from "styled-components";
import "focus-visible";

import avatar from "../../assets/carmen-sandiego.png";

import Tweet from "../Tweet";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE-LIKE":
        if (state.isLiked) {
          return {
            ...state,
            numOfLikes: state.numOfLikes - 1,
            isLiked: false
          };
        } else {
          return {
            ...state,
            numOfLikes: state.numOfLikes + 1,
            isLiked: true
          };
        }
      case "TOGGLE-RETWEET":
        if (state.isRetweeted) {
          return {
            ...state,
            numOfRetweets: state.numOfRetweets - 1,
            isRetweeted: false
          };
        } else {
          return {
            ...state,
            numOfRetweets: state.numOfRetweets + 1,
            isRetweeted: true
          };
        }
      default:
        throw new Error("Action type not recognized");
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    numOfLikes: 100,
    numOfRetweets: 100,
    isLiked: false,
    isRetweeted: false
  });

  const toggleLike = () => {
    dispatch({ type: "TOGGLE-LIKE" });
  };

  const toggleRetweet = () => {
    dispatch({ type: "TOGGLE-RETWEET" });
  };

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
        handleToggleLike={toggleLike}
        handleToggleRetweet={toggleRetweet}
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
