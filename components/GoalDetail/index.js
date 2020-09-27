import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Body, Header, Left, Spinner, Text } from "native-base";
import { Circle } from "react-native-svg";

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
  TextLeaderboardStyled,
  TextProgressStyled,
  TextDetailStyled,
} from "./styles";

import UpdateProgress from "../Buttons/UpdateProgress";
import UpdateGoal from "../Buttons/UpdateGoal";

const GoalDetail = ({ route }) => {
  const { goal } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledCard>
          <StyledTitle>Leaderboard</StyledTitle>
          <Leaderboard goal={goal} />
        </StyledCard>
        <StyledCard>
          <StyledTitle>Progress</StyledTitle>
          <ProgressCircle goal={goal} />
        </StyledCard>
        <StyledCard>
          <StyledTitle>Popularity</StyledTitle>
          <PopularityGraph goal={goal} />
        </StyledCard>
        <TextDetailStyled>Description: {goal.description}</TextDetailStyled>
        <TextDetailStyled>Target: {goal.target}</TextDetailStyled>
        <TextDetailStyled>Category: {goal.category}</TextDetailStyled>
        <LeaderBoard>
          <TextLeaderboardStyled>Leaderboard</TextLeaderboardStyled>
        </LeaderBoard>
        <PersonalProgress>
          <TextProgressStyled>Progress</TextProgressStyled>
          <ProgressCircle goal={goal} />
        </PersonalProgress>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalDetail);
