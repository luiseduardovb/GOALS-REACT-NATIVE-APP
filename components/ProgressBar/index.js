import React from "react";
import { observer } from "mobx-react";
import { View, Animated, Text } from "react-native";

//Stores
import authStore from "../../stores/authStore";
import goalStore from "../../stores/goalStore";

//Styles
import {
  StyledCard,
  StyledView,
  StyledInner,
  StyledInner2,
  StyledText,
  StyledTitle,
} from "./styles";

const ProgressBar = ({ navigation, goal }) => {
  let max = goal.target;
  let percentage = (goal.Progress.targetProgress / max) * 100;
  const maxPerc = (100 * percentage) / max;
  // const profile = authStore.userProfile.filter(
  //   (profile) => profile.id === goal.ownerId
  // );
  // console.log("ProgressBar -> userProgress", profile);
  // style={{ width: `${maxPerc}%` }}
  return (
    <>
      <StyledView>
        <StyledInner style={{ width: goal.Progress.targetProgress }}>
          <StyledText>{goal.Progress.targetProgress}%</StyledText>
        </StyledInner>
      </StyledView>
    </>
  );
};

export default observer(ProgressBar);
