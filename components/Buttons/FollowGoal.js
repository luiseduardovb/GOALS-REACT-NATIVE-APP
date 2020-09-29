import React, { useState } from "react";

// Stores

import goalStore from "../../stores/goalStore";

//Components

//Styles
import { Icon, Text } from "native-base";
import { FollowButtonStyled, StyledTouchableOpacity } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const FollowGoal = ({ goal }) => {
  return (
    <>
      <TouchableOpacity onPress={() => goalStore.followGoal(goal.id)}>
        <FollowButtonStyled size={10} type="FontAwesome" name="code-fork" />
      </TouchableOpacity>
    </>
  );
};

export default FollowGoal;
