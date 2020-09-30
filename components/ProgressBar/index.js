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
  const profile = authStore.userProfile.filter(
    (profile) => profile.id === goal.ownerId
  );
  console.log("ProgressBar -> userProgress", profile);
  return (
    <>
      <StyledView>
        <StyledInner>
          <StyledText>100%</StyledText>
        </StyledInner>
      </StyledView>
    </>
  );
};

export default observer(ProgressBar);
