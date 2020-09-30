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
