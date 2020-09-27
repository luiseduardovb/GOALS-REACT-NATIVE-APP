import React from "react";
import { observer } from "mobx-react";
import { View, Animated, Text } from "react-native";

//Styles
import {
  StyledCard,
  StyledView,
  StyledInner,
  StyledInner2,
  StyledText,
  StyledTitle,
} from "./styles";
import UserGoalList from "../UserGoalList";

const GoalChart = ({ navigation }) => {
  return (
    <StyledCard>
      <StyledTitle>Goals</StyledTitle>
      <UserGoalList navigation={navigation} />
    </StyledCard>
  );
};

export default observer(GoalChart);
