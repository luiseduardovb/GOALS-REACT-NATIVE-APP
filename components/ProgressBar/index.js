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

const ProgressBar = () => {
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
