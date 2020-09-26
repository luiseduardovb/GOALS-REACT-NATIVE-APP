import React, { useState } from "react";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Circle } from "react-native-svg";

//Components
import ProgressCircle from "../ProgressCircle";
import PopularityGraph from "../PopularityGraph";
import UpdateProgress from "../Buttons/UpdateProgress";
import UpdateGoal from "../Buttons/UpdateGoal";

//Styles

import {
  LeaderBoard,
  PersonalProgress,
  Popularity,
  TextLeaderboardStyled,
  TextProgressStyled,
  TextDetailStyled,
} from "./styles";
import { Body, Header, Left, Spinner, Text } from "native-base";

const GoalDetail = ({ route }) => {
  const goal = route.params.goal;
  return (
    <SafeAreaView>
      <ScrollView>
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
        {/* <Popularity>
          <Text>Popularity</Text>
          <PopularityGraph route={route} />
        </Popularity> */}
        <UpdateProgress goal={goal} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(GoalDetail);
