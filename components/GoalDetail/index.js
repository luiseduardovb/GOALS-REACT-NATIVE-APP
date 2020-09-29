import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Body, Header, Left, Spinner, Text } from "native-base";
import { Circle } from "react-native-svg";

//Components
import UpdateProgress from "../Buttons/UpdateProgress";
import ProgressCircle from "../ProgressCircle";
import PopularityGraph from "../PopularityGraph";
import Leaderboard from "../Leaderboard";

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

const GoalDetail = ({ route }) => {
  const { goal } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledCard>
          <StyledTitle>Leaderboard</StyledTitle>
          <Leaderboard goal={goal} />
        </StyledCard>
        {/* <StyledCard>
          <StyledTitle>Progress</StyledTitle>
          <ProgressCircle goal={goal} />
        </StyledCard> */}
        <StyledCard>
          <StyledTitle>Popularity</StyledTitle>
          <PopularityGraph goal={goal} />
        </StyledCard>
        <TextDetailStyled>Description: {goal.description}</TextDetailStyled>
        <TextDetailStyled>
          Target: {goal.target} {goal.unitOfMeasure}
        </TextDetailStyled>
        <TextDetailStyled>Category: {goal.category}</TextDetailStyled>
        <LeaderBoard>
          <TextLeaderboardStyled>Leaderboard</TextLeaderboardStyled>
        </LeaderBoard>
        <PersonalProgress>
          <TextProgressStyled>Progress</TextProgressStyled>
          <ProgressCircle goal={goal} />
        </PersonalProgress>
        <UpdateProgress goal={goal} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalDetail);
