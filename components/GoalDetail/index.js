import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Components
import ProgressCircle from "../ProgressCircle";
import PopularityGraph from "../PopularityGraph";
import Leaderboard from "../Leaderboard";

//Store

//Styles
import {
  LeaderBoard,
  PersonalProgress,
  Popularity,
  StyledCard,
  StyledTitle,
} from "./styles";

const GoalDetail = ({ route }) => {
  const { goal } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledCard>
          <StyledTitle>Leaderboard</StyledTitle>
          <Leaderboard route={route} />
        </StyledCard>
        <StyledCard>
          <StyledTitle>Progress</StyledTitle>
          <ProgressCircle route={route} />
        </StyledCard>
        <StyledCard>
          <StyledTitle>Popularity</StyledTitle>
          <PopularityGraph route={route} />
        </StyledCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalDetail);
